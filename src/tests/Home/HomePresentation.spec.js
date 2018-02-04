import React, { Component } from 'react';

import HomePresentation from '../../components/Home/HomePresentation';

describe('test HomePresentation', () => {
  let component;
  beforeEach(() => {
    component = shallow(<HomePresentation />);

  });

  it('should component be a section tag', () => {
    expect(component.type()).to.eql('section');
  });

  it('should component have a p element child', () => {
    const paragraph = component.find('p');

    expect(paragraph).to.have.length(1)
    expect(paragraph.first().html().includes('Bons momentos combinam com boas Cervejas')).to.have.true;
  });

  it('should component has a Link as child', () => {
    expect(component.find('Link')).to.have.length(1);
  });


});