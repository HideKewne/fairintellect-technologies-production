import { useState, useEffect } from 'react';
import { supabase, Company } from '../lib/supabase';

export const useCompany = (token: string | null) => {
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    setLoading(true);

    if (!token) {
      setError('No token provided');
      setLoading(false);
      return;
    }

    const fetchCompany = async () => {
      try {
        const { data, error } = await supabase
          .from('companies')
          .select('*')
          .eq('unique_token', token)
          .single();

        if (error) {
          console.error('Error fetching company:', error);
          setError('Company not found');
          return;
        }

        setCompany(data);
      } catch (err) {
        console.error('Error:', err);
        setError('Failed to load company data');
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();

    // Set up real-time subscription
    const subscription = supabase
      .channel('companies_changes')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'companies',
          filter: `unique_token=eq.${token}`,
        },
        (payload) => {
          setCompany(payload.new as Company);
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [token]);

  return { company, loading, error };
};