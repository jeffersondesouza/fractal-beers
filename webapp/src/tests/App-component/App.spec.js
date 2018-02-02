import React, { Component } from 'react';

import App from '../../components/App'
import Header from '../../components/App/Header/index';
import Footer from '../../components/App/Footer/index';


describe('a passing test', () => {

  const wrapper = shallow(<App />);

  it('should pass', () => {
    expect(true).to.be.true;
  });


  it('should render Header and Footer', () => {
    const containsElements = wrapper.containsAllMatchingElements([<Header />, <Footer />]);
    expect(containsElements).to.be.true;
  });


});