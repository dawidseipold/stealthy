use axum::http::StatusCode;
use axum::response::IntoResponse;
use axum::response::Response;
use axum::Json;
use thiserror::Error;

#[derive(Error, Debug)]
pub enum DatabaseError {
    #[error("database connection error")]
    ConnectionError,
    #[error("database query failed")]
    QueryError,
}

impl IntoResponse for DatabaseError {
    fn into_response(self) -> Response {
        let status = match self {
            DatabaseError::ConnectionError => StatusCode::INTERNAL_SERVER_ERROR,
            DatabaseError::QueryError => StatusCode::BAD_REQUEST,
        };

        (status, Json(self.to_string())).into_response()
    }
}

impl From<surrealdb::Error> for DatabaseError {
    fn from(error: surrealdb::Error) -> Self {
        eprintln!("{error}");
        DatabaseError::QueryError
    }
}
