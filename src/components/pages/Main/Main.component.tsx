import React from 'react';

import Articles from '@Compo/Articles';
import Grid from '@Compo/layout/Grid';
import PageWrapper from '@Compo/layout/PageWrapper';

const Main = () => (
  <Grid>
    <PageWrapper>
      <Articles />
    </PageWrapper>
  </Grid>
);

export default Main;
