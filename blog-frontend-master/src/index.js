import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './contexts/userContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <UserProvider>
        <App />
    </UserProvider>
  </React.StrictMode>,
);
