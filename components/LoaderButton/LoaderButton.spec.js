import React from 'react';
import { shallow } from 'enzyme';
import LoaderButton from './LoaderButton';

describe('<LoaderButton />', () => {
  test('renders', () => {
    const wrapper = shallow(<LoaderButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
