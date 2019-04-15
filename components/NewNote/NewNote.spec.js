import React from 'react';
import { shallow } from 'enzyme';
import NewNote from './NewNote';

describe('<NewNote />', () => {
  test('renders', () => {
    const wrapper = shallow(<NewNote />);
    expect(wrapper).toMatchSnapshot();
  });
});
