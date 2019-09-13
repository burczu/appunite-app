import React from 'react';

import Article from '@Compo/Article';
import Grid from '@Compo/layout/Grid';
import PageWrapper from '@Compo/layout/PageWrapper';

const ArticlePage = () => (
  <Grid>
    <PageWrapper>
      <Article />
    </PageWrapper>
  </Grid>
);

export default ArticlePage;
