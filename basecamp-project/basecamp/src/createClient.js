import {createClient} from '@supabase/supabase-js'
const supabaseUrl = 'https://vfgslfnpccrbqsafoxff.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmZ3NsZm5wY2NyYnFzYWZveGZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY3OTMzMTEsImV4cCI6MjAzMjM2OTMxMX0.a-q44lh9PJsbxTDFoN42k749t3-dA61r_-o_VDFPyZI';


export const supabase = createClient(supabaseUrl,supabaseKey);
