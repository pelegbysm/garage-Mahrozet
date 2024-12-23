import React from 'react';
import { hydrate, render } from 'react-dom';
import ReactGA from 'react-ga4';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/main.scss';

ReactGA.initialize('G-XE4JMYXFCL');

const rootElement = document.getElementById('root');
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}