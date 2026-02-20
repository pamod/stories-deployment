import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from "@asgardeo/auth-react";
import App from './App';
import './index.css';

const authConfig = {
    signInRedirectURL: "http://localhost:5173",
    signOutRedirectURL: "http://localhost:5173",
    clientID: "lf4YMY6Fl4ANf2GQ2urDqqikwX8a",
    baseUrl: "https://localhost:30003",
    scope: ["openid", "groups", "profile"]
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider config={authConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);