import { useState } from 'react';
import { useSupabase } from '../../context/SupabaseContext';


const ResetPassword = () => {
  const supabase = useSupabase();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      setError(error.message);
    } else {
      setSuccess('Email de recuperação enviado!');
    }
  };

  return (
    <div>
      <h2>Esqueci Minha Senha</h2>
      <form onSubmit={handleResetPassword}>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </div>
  );
};

export default ResetPassword;
