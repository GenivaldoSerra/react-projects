import React from 'react';
import { Grid } from './styles';
import MainHeader from '../mainHeader';
import Aside from '../aside';
import Content from '../content';

const Layout: React.FC = () => {
  return (
      <Grid>
        <Aside />
        <MainHeader />
        <Content />
      </Grid>
  );
}

export default Layout;