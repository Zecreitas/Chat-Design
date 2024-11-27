import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/login/App';
import Sobre from './pages/sobre/sobre';
import Salas from './pages/salas/salas';
import Sala from './pages/sala/sala';
import Logo from './pages/logo/logo';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Logo/>
  },
  {
    path: "/login",
    element: <App/>
  },
  {
    path: "/sobre",
    element: <Sobre/>
  },
  {
    path: "/salas",
    element: <Salas/>
  },
  {
    path: "/sala/:idSala",
    element: <Sala/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
