import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App';
import Header from './components/header/header'
import Footer from './components/footer/footer'

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);
