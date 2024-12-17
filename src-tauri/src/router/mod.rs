pub mod routes;

use axum::{Extension, Router};
use routes::chats::chats_router;
use std::{net::SocketAddr, sync::Arc};
use tokio::net::TcpListener;

use crate::db::middleware::DatabaseLayer;

#[derive(Clone)]
pub struct AppState {}

impl AppState {
    pub async fn new() -> Self {
        Self {}
    }
}

pub async fn setup_server(database_layer: DatabaseLayer) -> Result<(), hyper::Error> {
    let shared_state = Arc::new(AppState::new().await);

    println!("Starting server setup...");

    let app = Router::new()
        .nest("/chats", chats_router())
        .layer(Extension(database_layer))
        .with_state(shared_state.clone());

    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    let listener = TcpListener::bind("0.0.0.0:3000").await.unwrap();

    println!("🚀 Server running at http://{}", addr);

    axum::serve(listener, app).await.unwrap();

    Ok(())
}
