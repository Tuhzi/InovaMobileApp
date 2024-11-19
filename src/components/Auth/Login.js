import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../utils/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const data = await loginUser(email, password);

    if (data) {
      console.log('Login bem-sucedido:', data);
      navigate('/grupos'); // Redireciona para a página de grupos
    } else {
      alert('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  return (
    <div className="auth-container">
      <h2>inovaweek</h2>
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
      <button onClick={handleLogin}>Entrar</button>
      <p>
        Não tem uma conta? <Link to="/register">Cadastre-se</Link>
      </p>
      <p>
        Esqueceu sua senha? <Link to="/reset-password">Recupere aqui</Link>
      </p>
    </div>
  );
};

export default Login;
