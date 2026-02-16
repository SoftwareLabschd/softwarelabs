import { createClient } from '@supabase/supabase-js'

// These are safe to hardcode (anon key is public by design)
const supabaseUrl = 'https://ouqypmfkbnzpjdhrfdis.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91cXlwbWZrYm56cGpkaHJmZGlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyMTQ0NjUsImV4cCI6MjA3Mzc5MDQ2NX0.hcE9-7RD-UtOKEGrHvVAeFGjGCbpDrJiLizcP20Eh8Y'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)