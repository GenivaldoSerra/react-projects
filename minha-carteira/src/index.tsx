import React from 'react';
import ReactDOM from 'react-dom/client';

import Dashboards from './pages/Dashboards';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Dashboards />
  </React.StrictMode>
);
