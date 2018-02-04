import React, { Component } from 'react';

import HeaderLogo from '../../components/App/Header/HeaderLogo';

describe('test HeaderLogo', () => {
  let component;
  beforeEach(() => {
    component = shallow(<HeaderLogo />);

  });

  it('should logo component be a figure tag', () => {
    expect(component.type()).to.eql('figure');
  });

  it('should logo have a img as child', () => {
    expect(component.find('img')).to.have.length(1)
  });

  it('should logo a fig caption as child', () => {
    expect(component.find('figcaption')).to.have.length(1);
    expect(component.find('span')).to.have.length(2);
  });


});