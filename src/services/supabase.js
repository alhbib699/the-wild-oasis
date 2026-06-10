import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://kcmrjsfpdomvofveygmz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjbXJqc2ZwZG9tdm9mdmV5Z216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwODYzMDksImV4cCI6MjA5NjY2MjMwOX0.WRYVvSEvP25giyxrOPtZgiM_UrlsqTxX-3iy9hzCtrM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
