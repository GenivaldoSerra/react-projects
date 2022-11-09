import React from 'react';
import { Grid } from './styles';
import MainHeader from '../mainHeader';
import Aside from '../aside';
import Content from '../content';

const Layout: React.FC = () => {
  return (
  <div>

    <Grid>
        <Aside />
        <MainHeader />
        <Content />
      </Grid>
  </div>
  );
}

export default Layout;