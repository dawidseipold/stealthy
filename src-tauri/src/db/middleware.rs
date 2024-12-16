use axum::{extract::Request, response::Response};
use futures_util::future::BoxFuture;
use std::{
    sync::LazyLock,
    task::{Context, Poll},
};
use surrealdb::{
    engine::remote::ws::{Client, Ws},
    opt::auth::Root,
    Surreal,
};
use tower::{Layer, Service};

use crate::errors::db::DatabaseError;

use super::queries::{
    chats::DEFINE_CHAT_TABLE, messages::DEFINE_MESSAGE_TABLE,
    participants::DEFINE_PARTICIPANT_TABLE,
};

#[derive(Clone)]
pub struct DatabaseLayer {
    pub db: Surreal<Client>,
}

impl<S> Layer<S> for DatabaseLayer {
    type Service = DatabaseMiddleware<S>;

    fn layer(&self, inner: S) -> Self::Service {
        DatabaseMiddleware { inner }
    }
}

impl DatabaseLayer {
    pub async fn new() -> Result<Self, surrealdb::Error> {
        let db = Surreal::new::<Ws>("localhost:8000").await?;

        db.signin(Root {
            username: "root",
            password: "root",
        })
        .await?;

        db.use_ns("test").use_db("test").await?;

        Ok(Self { db })
    }

    pub async fn initialize_tables(&self) -> Result<(), DatabaseError> {
        self.db
            .query(DEFINE_CHAT_TABLE)
            .await
            .map_err(|_| DatabaseError::QueryError)?;

        self.db
            .query(DEFINE_MESSAGE_TABLE)
            .await
            .map_err(|_| DatabaseError::QueryError)?;

        self.db
            .query(DEFINE_PARTICIPANT_TABLE)
            .await
            .map_err(|_| DatabaseError::QueryError)?;

        Ok(())
    }
}

#[derive(Clone)]
struct DatabaseMiddleware<S> {
    inner: S,
}

impl<S> Service<Request> for DatabaseMiddleware<S>
where
    S: Service<Request, Response = Response> + Send + 'static,
    S::Future: Send + 'static,
{
    type Response = S::Response;
    type Error = S::Error;
    type Future = BoxFuture<'static, Result<Self::Response, Self::Error>>;

    fn poll_ready(&mut self, cx: &mut Context<'_>) -> Poll<Result<(), Self::Error>> {
        self.inner.poll_ready(cx)
    }

    fn call(&mut self, request: Request) -> Self::Future {
        let future = self.inner.call(request);

        Box::pin(async move {
            let response: Response = future.await?;
            Ok(response)
        })
    }
}
