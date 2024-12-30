import { supabase } from "../../CreateClient";


export const posts = supabase.from('post')
.select('*');