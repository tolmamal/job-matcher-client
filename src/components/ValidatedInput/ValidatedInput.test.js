import React from 'react';
import { shallow } from 'enzyme';
import ValidatedInput from './ValidatedInput';

describe('<ValidatedInput />', () => {
  test('renders', () => {
    const wrapper = shallow(<ValidatedInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
