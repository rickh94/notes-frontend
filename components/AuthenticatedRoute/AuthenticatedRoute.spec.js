import React from 'react';
import { shallow } from 'enzyme';
import AuthenticatedRoute from './AuthenticatedRoute';

describe('<AuthenticatedRoute />', () => {
  test('renders', () => {
    const wrapper = shallow(<AuthenticatedRoute />);
    expect(wrapper).toMatchSnapshot();
  });
});
