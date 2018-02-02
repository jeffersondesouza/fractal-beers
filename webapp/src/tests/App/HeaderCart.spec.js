import React, { Component } from 'react';

import HeaderCart from '../../components/App/Header/HeaderCart';


describe('test HeaderCart', () => {

  let component;

  beforeEach(() => {
    component = shallow(<HeaderCart />)
  });


  it('should HeaderCart component be a div', () => {
    expect(component.type()).to.eql('div');
  });

  it('should HeaderCart have a button to a future shop cart redirecting', () => {
    expect(component.find('button')).to.have.length(1)
  });





});