import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './Header';
import Footer from './Footer';

import './style/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <App />
    <Footer />
  </>
);

