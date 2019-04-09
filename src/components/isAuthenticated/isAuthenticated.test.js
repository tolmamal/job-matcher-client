import React from 'react';
import { shallow } from 'enzyme';
import IsAuthenticated from './isAuthenticated';

describe('<IsAuthenticated />', () => {
  test('renders', () => {
    const wrapper = shallow(<IsAuthenticated />);
    expect(wrapper).toMatchSnapshot();
  });
});
