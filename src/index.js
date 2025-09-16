// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // This App component is now the one above

import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'remixicon/fonts/remixicon.css';

import { AuthProvider } from '../src/Context/AuthContext'; // Make sure this path is correct

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App /> {/* Your App component, now containing the session timeout logic */}
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);