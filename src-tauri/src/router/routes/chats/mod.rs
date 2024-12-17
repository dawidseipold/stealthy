pub mod get_all_chats;

use crate::router::AppState;
use axum::{routing::get, Router};
use std::sync::Arc;

pub fn chats_router() -> Router<Arc<AppState>> {
    Router::new().route("/", get(get_all_chats::get_all_chats))
}
