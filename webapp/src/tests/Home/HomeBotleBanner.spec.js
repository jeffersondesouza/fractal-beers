import React, { Component } from 'react';

import HomeBotleBanner from '../../components/Home/HomeBotleBanner';

describe('test HomeBotleBanner', () => {
  let component;
  beforeEach(() => {
    component = shallow(<HomeBotleBanner />);

  });

  it('should component be a section tag', () => {
    expect(component.type()).to.eql('section');
  });

  it('should logo have a img as child', () => {
    expect(component.find('img')).to.have.length(1)
  });

});