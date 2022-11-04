import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

import Dashboards from './pages/Dashboards';

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyles />
      <Dashboards />
    </div>
  );
}

export default App;