import React, { Component } from 'react';

import { createMockStore } from 'redux-test-utils';

import Home from '../../../src/components/Home'
import HomeBotleBanner from '../../components/Home/HomeBotleBanner';
import HomePresentation from '../../components/Home/HomePresentation';
import shallowWithStore from '../utils/shallowWithStore';

describe('test Home', () => {

  const component = shallow(<Home/>, );

  it("should render successfully ", () => {
    expect(component).to.be.a('object');
  });

  it('should render HomeBotleBanner and HomePresentation', () => {
    const containsElements = component.containsAllMatchingElements([<HomeBotleBanner />, <HomePresentation />]);
    expect(containsElements).to.be.true;
  });

});
