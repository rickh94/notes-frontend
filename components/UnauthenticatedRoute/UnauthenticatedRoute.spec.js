import React from 'react';
import { shallow } from 'enzyme';
import UnauthenticatedRoute from './UnauthenticatedRoute';

describe('<UnauthenticatedRoute />', () => {
  test('renders', () => {
    const wrapper = shallow(<UnauthenticatedRoute />);
    expect(wrapper).toMatchSnapshot();
  });
});
