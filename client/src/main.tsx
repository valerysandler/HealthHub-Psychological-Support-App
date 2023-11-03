import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './pages/Layout/Layout';
import './input.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </React.StrictMode>,
)