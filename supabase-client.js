// ============================================================
// TravelInspo.com — Supabase client
// ============================================================
// 1. Go to your Supabase project → Settings (gear icon) → API
// 2. Copy "Project URL" and paste it below as SUPABASE_URL
// 3. Copy the "anon public" key and paste it below as SUPABASE_ANON_KEY
//    (never use the "service_role" key here — that one is secret
//    and must never appear in a browser-facing file like this one)
// 4. Save this file, upload it alongside your other HTML files
// ============================================================

const SUPABASE_URL = 'https://pakdslkvwlshjkahmuvs.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_Kos9KXLdTNpGKIkcZghrmA__JJ5W6M6';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
