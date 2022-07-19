import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { StyledEngineProvider } from '@mui/material';
// import { CacheProvider } from '@emotion/react';
// import createCache from '@emotion/cache';
import ListProvider from './context/ContextsProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const cache = createCache({
//   key: 'css',
//   prepend: true,
// });

root.render(
  // <React.StrictMode>
  // <CacheProvider value={cache}>
    <ListProvider>
    <App />
    </ListProvider>
  // </CacheProvider>

  // </React.StrictMode>
);

