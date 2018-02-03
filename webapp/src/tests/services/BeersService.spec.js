import React, { Component } from 'react';

import sinon from 'sinon';
import axios from 'axios';
import { createMockStore } from 'redux-test-utils';


import { BeersService } from '../../services';




describe('test Footer rendering', () => {



  it('should call get beers and dispatch a new actions to store', async () => {


    const beersPerRequestGroup = 1;
    const params = {
      name: 'duff'
    }

    const axiosGetSpy = sinon.spy(axios, 'get');
 
    const dispatch = BeersService.getBeers(beersPerRequestGroup, params)();


    expect(axiosGetSpy.callCount).to.equal(1);



  });

  after(() => {
    axios.get.restore();
  });


  /* 
  
  
  it('should call BeersService when call get a Beer Details', () => {
    const beer = { id: 1111, name: 'duff' }
    component.instance().getBeerByDetails();
    expect(BeersService.getBeerById.callCount).to.equal(1);
  });


  */

});