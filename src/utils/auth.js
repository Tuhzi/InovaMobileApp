/**
 * Registra um novo usuário no Supabase.
 * @param {object} supabase - Instância do Supabase (obter de `useSupabase()`).
 * @param {string} email - Email do usuário.
 * @param {string} password - Senha do usuário.
 * @returns {object|null} - Dados do usuário registrado ou null em caso de erro.
 */
export const registerUser = async (supabase, email, password) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
  
    if (error) {
      console.error('Erro ao registrar:', error.message);
      return null;
    }
  
    return data;
  };
  
  /**
   * Realiza login de um usuário no Supabase.
   * @param {object} supabase - Instância do Supabase (obter de `useSupabase()`).
   * @param {string} email - Email do usuário.
   * @param {string} senha - Senha do usuário.
   * @returns {object|null} - Dados do usuário autenticado ou null em caso de erro.
   */
  export const loginUser = async (supabase, email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
  
    if (error) {
      console.error('Erro ao fazer login:', error.message);
      return null;
    }
  
    return data;
  };
  