import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://dpdtxmhxyosunfryocqn.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwZHR4bWh4eW9zdW5mcnlvY3FuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyNjUwNDcsImV4cCI6MjA2OTg0MTA0N30.fOfk2ULUtNXzpQFEsMXD4mNZLNc4hSAh12NTJrSe0Vk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Company {
  id: string;
  company_name: string;
  current_phase: number;
  unique_token: string;
  created_at: string;
  updated_at: string;
}