import { createClient } from '@supabase/supabase-js'

// These will be replaced with actual values when connected
const SUPABASE_URL = 'https://your-project-id.supabase.co'
const SUPABASE_ANON_KEY = 'your-anon-key'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  }
})

export default supabase