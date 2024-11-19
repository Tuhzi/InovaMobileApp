import React from 'react';
import ReactDOM from 'react-dom/client';
import { SupabaseProvider } from './context/SupabaseContext';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SupabaseProvider>
      <App />
    </SupabaseProvider>
  </React.StrictMode>
);
