import React from 'react';

import { Route, Switch } from 'react-router';
import routes from './routes';

// Route components
import Article from './../components/pages/Article';
import Main from './../components/pages/Main';
import NotFound from './../components/pages/NotFound';

const Routes = () => (
  <>
    <Switch>
      <Route exact={true} path={routes.index} component={Main} />
      <Route path={routes.articles} component={Article} />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default Routes;
