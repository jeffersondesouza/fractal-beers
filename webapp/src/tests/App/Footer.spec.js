import React, { Component } from 'react';

import App from '../../components/App'
import Header from '../../components/App/Header/index';
import Footer from '../../components/App/Footer/index';


describe('test Footer rendering', () => {

  const wrapper = shallow(<Footer />);

  it('should be a footer tag', () => {
    expect(wrapper.type()).to.eql('footer');
  });

});