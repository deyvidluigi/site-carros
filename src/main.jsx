// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// ATUALIZAÇÃO: Os caminhos de importação agora são mais simples
import Home from './pages/home/home.jsx'; 
import Contato from './pages/contato/contato.jsx';
import App from './App.jsx'; 

import './index.css';

// 1. Cria o objeto de rotas
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      {
        path: '/',
        element: <Home />, // Rota raiz
      },
      {
        path: '/contato',
        element: <Contato />, // Rota de contato
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);