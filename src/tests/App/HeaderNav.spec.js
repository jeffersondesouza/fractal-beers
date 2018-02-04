import React, { Component } from 'react';
import { Link } from 'react-router';

import HeaderNav from '../../components/App/Header/HeaderNav';

describe('test HeaderNav', () => {

  let component;

  beforeEach(() => {
    component = shallow(<HeaderNav />)
  });


  it('should HeaderNav component be a figure nav', () => {
    expect(component.type()).to.eql('nav');
  });

  it('should HeaderNav have a img ul as child', () => {
    expect(component.find('ul')).to.have.length(1)
  });


  it('should HeaderNav some li an Link as children', () => {
    const totalOfLinks = 2;

    expect(component.find('li')).to.have.length(totalOfLinks);
    expect(component.find('Link')).to.have.length(totalOfLinks);
  });

});