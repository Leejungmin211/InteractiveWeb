import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Bubble from './components/Bubble';
import OilPainting from './components/OilPainting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OilPainting />
  </React.StrictMode>
);
