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
    path: "/sala",
    element: <Sala/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
