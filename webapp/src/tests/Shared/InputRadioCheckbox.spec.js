import React, { Component } from 'react';

import InputRadioCheckbox from '../../components/shared/InputRadioCheckbox';


describe('test Footer rendering', () => {

  const wrapper = shallow(<InputRadioCheckbox />);

  it('should be a footer tag', () => {
    expect(wrapper.type()).to.eql('label');
  });

});