import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://luboefaestpczewpucsz.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1Ym9lZmFlc3RwY3pld3B1Y3N6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUzODI0MDUsImV4cCI6MTk2MDk1ODQwNX0.L3VTVadlpVPOUflYh3veVsMS7c2IZjNmMG3TP5vyn6k"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)