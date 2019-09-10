import React from 'react';
import { render } from 'react-dom';

import configureStore from '@/store';
import App from '@Compo/App';
import { Provider } from 'react-redux';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
