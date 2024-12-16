use std::sync::Arc;

use axum::{extract::State, routing::get, Json, Router};

use crate::{db::handlers::chats::Chat, errors::db::DatabaseError};

use super::AppState;

pub fn chats_router() -> Router<Arc<AppState>> {
    Router::new().route("/", get(get_all_chats_handler))
}
