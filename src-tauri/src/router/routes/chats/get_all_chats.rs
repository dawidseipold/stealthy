use axum::Extension;

use crate::{
    db::{middleware::DatabaseLayer, queries::chats::GET_ALL_CHATS},
    errors::db::DatabaseError,
};

// NOTE: For now it will return DatabaseError later on it will be changed to router error
pub async fn get_all_chats(
    Extension(database_layer): Extension<DatabaseLayer>,
) -> Result<(), DatabaseError> {
    database_layer
        .db
        .query(GET_ALL_CHATS)
        .await
        .map_err(|_| DatabaseError::QueryError)?;

    Ok(())
}
