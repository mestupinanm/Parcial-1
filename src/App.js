import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import RobotList from './components/RobotList';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (authStatus) => {
    setIsAuthenticated(authStatus);
  };

  return (
    <div>
      {!isAuthenticated ? 
        <LoginForm onLogin={handleLogin} /> : 
        <RobotList />
      }
    </div>
  );
}

export default App;