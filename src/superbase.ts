import { createClient } from '@supabase/supabase-js'
const superbaseUrl =  import.meta.env.VITE_SUPABASE_URL;
const superbaseKEY =  import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(superbaseUrl, superbaseKEY)
  console.log(superbaseUrl);
  export default supabase