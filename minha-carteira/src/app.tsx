import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

import Layout from './components/layout';

const App: React.FC = () => {
  return (
    <>
      <Layout />
      <GlobalStyles />
    </>
  );
}

export default App;