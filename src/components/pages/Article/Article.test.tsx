import React from 'react';

import Article from '@Compo/Article';
import { shallow } from 'enzyme';
import ArticlePage from './Article.component';

describe('Article component', () => {
  it('should render Articles component', () => {
    const wrapper = shallow(<ArticlePage />);

    expect(wrapper.find(Article)).toHaveLength(1);
  });
});
