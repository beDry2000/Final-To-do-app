import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import ListProvider from './context/ContextsProvider';
import { LoadProvider } from './context/ContextsProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <LoadProvider>
    <ListProvider>
      <App />
    </ListProvider>
  </LoadProvider>
);

