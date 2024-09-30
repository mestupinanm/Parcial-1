import React, { useState } from 'react';
import './App.css';
import RobotList from './components/RobotList';
import LoginForm from './components/LoginForm';
import {FormattedMessage} from 'react-intl' ;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // Inicialmente no autenticado

  return (
    <>
      <header className="title-section">
        <h1><FormattedMessage id="Adopt a Robot with Robot Lovers!"/></h1>
        <div className="banner-section">
          <div className="separator"></div>
          <img src="/assets/banner.png" alt="Adopt a Robot with Robot Lovers!" className="banner-image" />
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
        <p><FormattedMessage id="Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers"/></p>
      </footer>
    </>
  );
}

export default App;