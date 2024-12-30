import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    'https://rnhnhcerusoaccmyihiq.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuaG5oY2VydXNvYWNjbXlpaGlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4OTkwMzIsImV4cCI6MjAzMDQ3NTAzMn0.h8CelcZfxNLJr93dTP6stSzfxyIGaTy4HIu1C_SjTeE',
    {
        auth:{
            autoRefreshToken:false,
            persistSession:false
        }
    }
);

const adminAuthClient = supabase.auth.admin;

