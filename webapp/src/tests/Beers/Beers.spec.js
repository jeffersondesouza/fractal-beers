import React, { Component } from 'react';
import { createMockStore } from 'redux-test-utils';

import Beers from '../../../src/components/Beers'

import shallowWithStore from '../utils/shallowWithStore';

describe('test Beers', () => {

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
    const component = shallowWithStore(<Beers {...props} />, store);

    expect(component).to.be.a('object');
  });
});