import React from 'react';
import { render } from 'react-dom';

import configureStore, { history } from '@/store';
import App from '@Compo/App';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Provider } from 'react-redux';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    const callback = () => {
      document.location.reload();
    };

    module.hot.accept('./components/App', callback);
    module.hot.accept('./store/index.ts', callback);
  }
}
