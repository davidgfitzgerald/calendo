import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './colours.css'
import NavBar from './components/NavBar/NavBar';
import ScrollingColumns from './components/ScrollingColumns/ScrollingColumns';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    {/* <NavBar/> */}
    {/* <ScrollingColumns/> */}
    <App items={["Item1", "Item2", "Item3"]}/>
  </React.StrictMode>
);
