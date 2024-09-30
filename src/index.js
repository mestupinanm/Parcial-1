import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import {IntlProvider} from 'react-intl';

const getBrowserLocale = () => {
  const language = navigator.language || navigator.languages[0];
  return language.toLowerCase();
};

const determineMessages = (locale) => {
  if (locale.startsWith('es')) {
      return { locale: 'es-ES', messages: localeEsMessages };
  } else {
      return { locale: 'en-US', messages: localeEnMessages };
  }
};

const { locale, messages } = determineMessages(getBrowserLocale());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider locale={locale} messages={messages}>

<React.StrictMode>
    <App />
  </React.StrictMode>

  </IntlProvider>, 
);

reportWebVitals();