// LoginForm.js
import React, { useState } from 'react';
import '../App.css';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "admin" && password === "admin") {
      onLogin(true);
    } else {
      setError('Error de autenticación. Revise sus credenciales');
      onLogin(false);
    }
  };

  return (
    <div className="login-form">
      <img src="../imagenes/portada.png" alt="Robot Lovers" className="login-header" />
      <h1>Inicio de sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre de usuario</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="buttons">
          <button type="submit">Ingresar</button>
          <button type="button" onClick={() => { setUsername(''); setPassword(''); setError(''); }}>Cancelar</button>
        </div>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default LoginForm;