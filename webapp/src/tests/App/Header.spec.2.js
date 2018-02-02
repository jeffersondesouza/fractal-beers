import React, { Component } from 'react';

import HeaderNav from './HeaderNav';
import HeaderCart from './HeaderCart';

describe('test Header compoennt rendering', () => {

  const wrapper = shallow(<Header />);

  it('should render HeaderLogo and HeaderNav', () => {
    const containsElements = wrapper.containsAllMatchingElements([<HeaderLogo />, <HeaderNav />]);
    expect(containsElements).to.be.true;
  });

});