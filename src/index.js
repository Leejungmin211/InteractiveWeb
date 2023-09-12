import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BubblePointer from './components/BubblePointer';
import OilPainting from './components/OilPainting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OilPainting />
  </React.StrictMode>
);
