import React from 'react';

import DropDown from '@Compo/reusable/DropDown';
import {
  POPULARITY,
  PUBLISHED_AT,
  RELEVANCY,
} from '@Model/filters/constants/constants';
import { IFiltersSortBy } from '@Model/filters/types';
import { shallow } from 'enzyme';
import SortByDropDown from './SortByDropDown.component';

describe('SortByDropDown', () => {
  const testSortBys: IFiltersSortBy[] = [RELEVANCY, PUBLISHED_AT, POPULARITY];
  const testSortBy = RELEVANCY;
  // tslint:disable-next-line:no-empty
  const testCategorySelect = () => {};

  it('should renders the DropDown component', () => {
    const wrapper = shallow(
      <SortByDropDown
        selectSortBy={testCategorySelect}
        sortBys={testSortBys}
        selectedSortBy={testSortBy}
      />,
    );

    expect(wrapper.find(DropDown)).toHaveLength(1);
  });
});
