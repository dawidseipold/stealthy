pub async fn get_all_chats_handler(
    State(state): State<AppState>,
) -> Result<Json<Vec<Chat>>, DatabaseError> {
    let chats_query = state.query_builder.chats().await;
    let chats = chats_query.get_all().await?;

    Ok(Json(chats))
}
