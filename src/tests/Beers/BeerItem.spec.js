import React, { Component } from 'react';
import { createMockStore } from 'redux-test-utils';

import BeerItem from '../../../src/components/Beers/BeerItem'

describe('test BeerItem', () => {


  it("should render BeerItem ", () => {

    const props = {
      beer: {
        id: 1,
        name: 'duff'
      }
    }
    const component = shallow(<BeerItem {...props} />);
    const imgTag = component.find('img').html();

    expect(component.type()).to.be.eql('div');
    expect(imgTag.includes(`${props.beer.name}`)).to.be.true;

  });


});