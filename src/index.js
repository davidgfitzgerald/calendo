import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './colours.css'
import App from './components/App/App';
import ScrollingColumns from './components/ScrollingColumns/ScrollingColumns';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <ScrollingColumns/>
  </React.StrictMode>
);
