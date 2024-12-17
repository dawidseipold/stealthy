// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod db;
mod errors;
mod router;

#[tokio::main]
async fn main() {
    stealthy_lib::run();

    let database_layer = match db::setup_database().await {
        Ok(layer) => layer,
        Err(err) => {
            eprintln!("Failed to set up the database: {}", err);
            std::process::exit(1);
        }
    };

    if let Err(err) = router::setup_server(database_layer).await {
        eprintln!("Failed to setup the server: {}", err);
        std::process::exit(1);
    }
}
