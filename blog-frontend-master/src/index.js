import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/App.css';
import './css/Login.css'
import './css/Post.css'
import './css/AboutUs.css'
import './css/Footer.css'
import './css/Admin.css'
import App from './App';
import { UserProvider } from './contexts/userContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <UserProvider>
        <App />
    </UserProvider>
  </React.StrictMode>,
);
