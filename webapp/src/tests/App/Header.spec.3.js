import React, { Component } from 'react';

import Header from '../../components/App/Header/index';
import HeaderNav from '../../components/App/Header/HeaderNav';
import HeaderLogo from '../../components/App/Header/HeaderLogo';

describe('test Header compoennt rendering', () => {

  const wrapper = shallow(<Header />);

  it('should render HeaderLogo and HeaderNav', () => {
    const containsElements = wrapper.containsAllMatchingElements([<HeaderLogo />, <HeaderNav />]);
    expect(containsElements).to.be.true;
  });

});