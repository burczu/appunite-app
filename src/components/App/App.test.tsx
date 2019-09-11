import React from 'react';

import { shallow } from 'enzyme';
import App from './App.component';

describe('The App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
