import React from 'react';

import DropDown from '@Compo/reusable/DropDown';
import { shallow } from 'enzyme';
import TopicDropDown from './TopicDropDown.component';

describe('TopicDropDow', () => {
  const testCategories = ['test1', 'test2', 'test3'];
  const testCategory = '';
  // tslint:disable-next-line:no-empty
  const testCategorySelect = () => {};

  it('should renders the DropDown component', () => {
    const wrapper = shallow(
      <TopicDropDown
        selectCategory={testCategorySelect}
        categories={testCategories}
        selectedCategory={testCategory}
      />,
    );

    expect(wrapper.find(DropDown)).toHaveLength(1);
  });
});
