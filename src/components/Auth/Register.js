import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../../utils/auth';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const data = await registerUser(email, password);

    if (data) {
      console.log('Cadastro realizado com sucesso:', data);
      alert('Usuário cadastrado! Você pode fazer login agora.');
    } else {
      alert('Erro ao registrar usuário. Tente novamente.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Cadastre-se</h2>
      <input
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Cadastrar</button>
      <p>
        Já tem uma conta? <Link to="/">Faça login</Link>
      </p>
    </div>
  );
};

export default Register;
