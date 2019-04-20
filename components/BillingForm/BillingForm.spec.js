import React from 'react';
import { shallow } from 'enzyme';
import BillingForm from './BillingForm';

describe('<BillingForm />', () => {
  test('renders', () => {
    const wrapper = shallow(<BillingForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
