pub mod handlers;
pub mod routes;

use axum::{extract::State, response::IntoResponse, routing::get, Extension, Router, ServiceExt};
use routes::chats::chats_router;
use std::{net::SocketAddr, sync::Arc};
use tokio::net::TcpListener;

#[derive(Clone)]
pub struct AppState {}

impl AppState {
    pub async fn new() -> Self {
        Self {}
    }
}

pub async fn setup_server() -> Result<(), hyper::Error> {
    let shared_state = Arc::new(AppState::new().await);

    let app = Router::new()
        .nest("/chats", chats_router())
        .with_state(shared_state.clone());

    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    let listener = TcpListener::bind(addr).await.unwrap();

    println!("🚀 Server running at http://{}", addr);

    axum::serve(listener, app.into_make_service())
        .await
        .unwrap();

    Ok(())
}
