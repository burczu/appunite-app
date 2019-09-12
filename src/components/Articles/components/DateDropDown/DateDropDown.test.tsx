import React from 'react';

import DropDown from '@Compo/reusable/DropDown';
import {
  THIS_MONTH,
  THIS_WEEK,
  TODAY,
} from '@Model/filters/constants/constants';
import { IFiltersDates } from '@Model/filters/types';
import { shallow } from 'enzyme';
import DateDropDown from './DateDropDown.component';

describe('DateDropDown', () => {
  const testDates: IFiltersDates[] = [TODAY, THIS_WEEK, THIS_MONTH];
  const testDate = TODAY;
  // tslint:disable-next-line:no-empty
  const testCategorySelect = () => {};

  it('should renders the DropDown component', () => {
    const wrapper = shallow(
      <DateDropDown
        dates={testDates}
        selectDate={testCategorySelect}
        selectedDate={testDate}
      />,
    );

    expect(wrapper.find(DropDown)).toHaveLength(1);
  });
});
