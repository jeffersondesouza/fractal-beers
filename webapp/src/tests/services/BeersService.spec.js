import React, { Component } from 'react';

import sinon from 'sinon';
import axios from 'axios';
import webpack from 'webpack';

import { createMockStore } from 'redux-test-utils';


import { BeersService } from '../../services';




describe('test Footer rendering', () => {



  it('should call get beers and dispatch a new actions to store', async () => {
    const API_URL = 's'
    process.env.API_URL = API_URL;

    const beersPerRequestGroup = 1;
    const params = {
      name: 'duff'
    }

 
    const dispatch = BeersService.getBeers(beersPerRequestGroup, params)();





  });

  after(() => {
  });


  /* 
  
  
  it('should call BeersService when call get a Beer Details', () => {
    const beer = { id: 1111, name: 'duff' }
    component.instance().getBeerByDetails();
    expect(BeersService.getBeerById.callCount).to.equal(1);
  });


  */

});