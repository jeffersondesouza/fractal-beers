import React, { Component } from 'react';
import { createMockStore } from 'redux-test-utils';

import BeerDetail from '../../../src/components/BeerDetail'

import shallowWithStore from '../utils/shallowWithStore';
import Breadcrumb from '../../components/BeerDetail/Breadcrumb';


describe('BeerDetail', () => {

  it("should render successfully ", () => {
    const testState = {
      beer: { id: 1, }
    };

    const props = {
      params: {
        id: 1
      }
    }

    const store = createMockStore(testState)
    const component = shallowWithStore(<BeerDetail {...props} />, store);

    expect(component).to.be.a('object');
  });
});