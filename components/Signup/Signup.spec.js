import React from 'react';
import { shallow } from 'enzyme';
import Signup from './Signup';

describe('<Signup />', () => {
  test('renders', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper).toMatchSnapshot();
  });
});
