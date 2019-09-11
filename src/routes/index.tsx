import React from 'react';

import { Route, Switch } from 'react-router';
import routes from './routes';

// Route components
import Main from './../components/pages/Main';
import NotFound from './../components/pages/NotFound';

const Routes = () => (
  <>
    <Switch>
      <Route exact={true} path={routes.index} component={Main} />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default Routes;
