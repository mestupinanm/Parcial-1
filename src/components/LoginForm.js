import React, { useState } from 'react';
import './LoginForm.css';  
import {FormattedMessage} from 'react-intl' ;

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "admin" && password === "pass") {
      fetch('http://localhost:3001/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login: username, password: password })
      })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          onLogin(true);
          setError('');
        } else {
          setError('Error de autenticación. Revise sus credenciales');
        }
      })
      .catch(() => {
        setError('Error de autenticación. Revise sus credenciales');
      });
    } else {
      setError('Error de autenticación. Revise sus credenciales');
    }
  };

  return (
    <main className="login-form">
      <h2><FormattedMessage id="Login"/></h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label><FormattedMessage id="Username"/></label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            style={error ? { border: '2px solid #CD3232' }  : {}}
          />
        </div>
        <div className="form-group">
          <label><FormattedMessage id="Password"/></label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            style={error ? { border: '2px solid #CD3232' }  : {}}
          />
        </div>
        <div className="buttons">
          <button 
            type="submit" 
            style={{ 
              backgroundColor: '#003B93', color: 'white', width: '120%', fontWeight: 'bold'
            }}
          >
            <FormattedMessage id="Join"/>
          </button>
          <button 
            type="button" 
            style={{ 
              backgroundColor: '#E75D5D', color: 'white', width: '120%', fontWeight: 'bold'
            }} 
            onClick={() => { 
              setUsername(''); 
              setPassword(''); 
              setError(''); 
            }}
          >
            <FormattedMessage id="Cancel"/>
          </button>
        </div>
        {error && <p className="error"><FormattedMessage id="Authentication error. Please check your credentials"/></p>}
      </form>
    </main>
  );
}

export default LoginForm;