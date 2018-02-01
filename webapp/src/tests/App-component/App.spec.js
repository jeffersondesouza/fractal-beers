import React, { Component } from 'react';

import App from '../../components/App'


describe('a passing test', () => {

  const wrapper = shallow(<App />);

  it('should pass', () => {
    expect(true).to.be.true;
  });

  it('should sdd 2 + 2', () => {
    expect(2+2).to.be.equal(4)
  });


  it('should sdd 2 + 2', () => {
    
    expect(wrapper.type()).to.eql('div');
  });

});