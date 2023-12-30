import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <App />
    </div>
  </StrictMode>
);
