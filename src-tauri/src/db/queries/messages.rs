pub const DEFINE_MESSAGE_TABLE: &str = "
    DEFINE TABLE IF NOT EXISTS message SCHEMAFULL
    PERMISSIONS FOR SELECT, CREATE, UPDATE, DELETE WHERE created_by = $auth;

    DEFINE FIELD IF NOT EXISTS id ON TABLE message TYPE string ASSERT is::uuid($value);
    DEFINE FIELD IF NOT EXISTS chat_id ON TABLE message TYPE record(chats);
    DEFINE FIELD IF NOT EXISTS sender_id ON TABLE message TYPE string ASSERT is::uuid($value);
    DEFINE FIELD IF NOT EXISTS encrypted_message ON TABLE message TYPE string;
    DEFINE FIELD IF NOT EXISTS nonce ON TABLE message TYPE string;
    DEFINE FIELD IF NOT EXISTS timestamp ON TABLE message TYPE datetime VALUE time::now();
";
