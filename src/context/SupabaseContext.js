import React, { createContext, useContext } from 'react';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://xgsfuoitiipizicrujca.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhnc2Z1b2l0aWlwaXppY3J1amNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5MzM4NDQsImV4cCI6MjA0NzUwOTg0NH0.w45vGXr1gSgz1Qcw4k_-4GjVK-KwIiEMN9qvgfy3zMA'; 

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const SupabaseContext = createContext();

export const SupabaseProvider = ({ children }) => (
  <SupabaseContext.Provider value={supabase}>
    {children}
  </SupabaseContext.Provider>
);

export const useSupabase = () => {
  const context = useContext(SupabaseContext);
  if (!context) {
    throw new Error('useSupabase deve ser usado dentro de um SupabaseProvider.');
  }
  return context;
};
