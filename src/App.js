import React, { useState } from 'react';
import './App.css';
import RobotList from './components/RobotList';
import LoginForm from './components/LoginForm';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // Inicialmente no autenticado

  return (
    <>
      <header className="title-section">
        <h1>Adopta un Robot con Robot Lovers!</h1>
        <div className="banner-section">
          <div className="separator"></div>
          <img src="/assets/banner.png" alt="Adopta un Robot con Robot Lovers" className="banner-image" />
          <div className="separator"></div>
        </div>
      </header>

      <div>
        {!isAuthenticated ? (
          <LoginForm onLogin={setIsAuthenticated} />
        ) : (
          <RobotList />
        )}
      </div>

      <footer className="footer-section">
        <p>Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
      </footer>
    </>
  );
}

export default App;