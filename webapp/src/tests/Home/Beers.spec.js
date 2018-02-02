import React, { Component } from 'react';
import { createMockStore } from 'redux-test-utils';

import Home from '../../../src/components/Home'

import shallowWithStore from '../utils/shallowWithStore';

describe('test Home', () => {

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
    const component = shallowWithStore(<Home {...props} />, store);

    expect(component).to.be.a('object');
  });
});