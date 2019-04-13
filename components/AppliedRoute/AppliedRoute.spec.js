import React from 'react';
import { shallow } from 'enzyme';
import AppliedRoute from './AppliedRoute';

describe('<AppliedRoute />', () => {
  test('renders', () => {
    const wrapper = shallow(<AppliedRoute />);
    expect(wrapper).toMatchSnapshot();
  });
});
