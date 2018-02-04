import React, { Component } from 'react';

import RadioButton from '../../components/shared/RadioButton';


describe('test Footer rendering', () => {

  const component = shallow(<RadioButton />);

  it('should be a footer tag', () => {
    expect(component.type()).to.eql('label');
  });


});