pub mod handlers;
pub mod middleware;
pub mod queries;

use crate::errors::db::DatabaseError;
use middleware::DatabaseLayer;

pub async fn setup_database() -> Result<DatabaseLayer, DatabaseError> {
    let db_layer = DatabaseLayer::new().await?;

    db_layer.initialize_tables().await?;

    Ok(db_layer)
}
