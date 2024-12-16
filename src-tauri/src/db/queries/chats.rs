pub const DEFINE_CHAT_TABLE: &str = "
    DEFINE TABLE IF NOT EXISTS chat SCHEMAFULL
    PERMISSIONS FOR SELECT, CREATE, UPDATE, DELETE WHERE created_by = $auth;

    DEFINE FIELD IF NOT EXISTS id ON TABLE chat TYPE thing<chat> ASSERT is::uuid($value);
    DEFINE FIELD IF NOT EXISTS chat_type ON TABLE chat TYPE string ASSERT $value IN ['group', 'direct'];
    DEFINE FIELD IF NOT EXISTS creator_id ON TABLE chat TYPE thing<user> ASSERT is::uuid($value);
    DEFINE FIELD IF NOT EXISTS room_key ON TABLE chat TYPE string NULL;
    DEFINE FIELD IF NOT EXISTS created_at ON TABLE chat TYPE datetime VALUE time::now();
";

pub const GET_ALL_CHATS: &str = "
    SELECT * FROM chat;
";
