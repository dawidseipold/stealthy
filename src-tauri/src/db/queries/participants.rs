pub const DEFINE_PARTICIPANT_TABLE: &str = "
    DEFINE TABLE IF NOT EXISTS participant SCHEMAFULL
    PERMISSIONS FOR SELECT, CREATE, UPDATE, DELETE WHERE created_by = $auth;

    DEFINE FIELD IF NOT EXISTS id ON TABLE participant TYPE string ASSERT is::uuid($value);
    DEFINE FIELD IF NOT EXISTS chat_id ON TABLE participant TYPE record(chats);
    DEFINE FIELD IF NOT EXISTS user_id ON TABLE participant TYPE string ASSERT is::uuid($value);
    DEFINE FIELD IF NOT EXISTS join_date ON TABLE participant TYPE datetime VALUE time::now();
    DEFINE FIELD IF NOT EXISTS can_see_all ON TABLE participant TYPE bool DEFAULT false;
    DEFINE FIELD IF NOT EXISTS online_only ON TABLE participant TYPE bool DEFAULT false;
";
