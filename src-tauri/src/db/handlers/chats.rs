use std::sync::Arc;

use serde::{Deserialize, Serialize};
use surrealdb::{engine::remote::ws::Client, sql::Thing, Datetime, Surreal};

use crate::{db::queries::chats::GET_ALL_CHATS, errors::db::DatabaseError};

#[derive(Debug, Serialize, Deserialize)]
pub struct Chat {
    pub id: Thing,
    pub chat_type: String,
    pub creator_id: Thing,
    pub room_key: Option<String>,
    pub created_at: Datetime,
}

pub struct ChatsQuery {
    pub db: Arc<Surreal<Client>>,
}

impl ChatsQuery {
    pub async fn get_all(&self) -> Result<Vec<Chat>, DatabaseError> {
        let mut response: surrealdb::Response = self
            .db
            .query(GET_ALL_CHATS)
            .await?
            .try_into()
            .map_err(|_| DatabaseError::QueryError)?;

        let result: Vec<Chat> = response.take(0)?;

        Ok(result)
    }
}
