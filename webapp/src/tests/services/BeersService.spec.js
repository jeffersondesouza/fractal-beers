import React, { Component } from 'react';
import sinon from 'sinon';
import axios from 'axios';
import webpack from 'webpack';
import { Thunk } from 'redux-testkit';


import { createMockStore } from 'redux-test-utils';
import axiosMockAdapter from 'axios-mock-adapter';

import { BeersService } from '../../services/';
import { beersMock } from '../utils';
import { getBeersRequest } from '../../reducers/actions';


describe('test BeersService', () => {
  let axiosMock;

  beforeEach(() => {
    // import and pass custom axios instance to this method
    axiosMock = new axiosMockAdapter(axios);

    axiosMock.onGet('/').reply(200, beersMock());

  });

  it('should call get beers and dispatch a new actions to store', async () => {


    const beersPerRequestGroup = 1;
    const params = { name: 'duff' }

    BeersService.getBeers(beersPerRequestGroup, params)();


    axios.get('/')
      .then(res => expect(res.data.length).to.be.eql(2));

  });


  it('should call get beers and dispatch a new actions to store', async () => {

    axiosMock.onGet('/1').reply(200, beersMock()[0]);

    BeersService.getBeerById(1)();


    axios.get('/1')
      .then(res => expect(res.data.id).to.be.eql(beersMock()[0].id));

  });


});

