import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga4';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/main.scss';
ReactGA.initialize('G-XE4JMYXFCL');
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);