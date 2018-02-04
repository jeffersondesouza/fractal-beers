import React, { Component } from 'react';

import sinon from 'sinon';
import { createMockStore } from 'redux-test-utils';

import { shallowWithStore } from '../utils';
import Breadcrumb from '../../components/BeerDetail/Breadcrumb';
import BeerDetail from '../../../src/components/BeerDetail'

import { BeersService } from '../../services';


describe('BeerDetail', () => {

  let testState;
  let props;
  let store;
  let component;

  beforeEach(() => {

    testState = {
      beer: {
        id: 1,
        name: 'duff'

      },
      subscribe() { }
    };

    props = {
      params: {
        id: 1
      }
    }

    store = createMockStore(testState);
    component = shallowWithStore(<BeerDetail {...props} />, store);

  });

  it("should render successfully ", () => {
    expect(component).to.be.a('object');
  });

  it("should set a beer ", () => {
    const beer = { id: 1111, name: 'duff' }

    component.instance().setBeer(beer);

    expect(component.state().beer.id).to.be.eql(beer.id);
    expect(component.state().beer.name).to.be.eql(beer.name);

  });

  it('should call BeersService when call get a Beer Details', () => {
    const beer = { id: 1111, name: 'duff' }
    sinon.stub(BeersService, 'getBeerById');
    component.instance().getBeerByDetails();
    expect(BeersService.getBeerById.callCount).to.equal(1);
  });

  after(() => {
    BeersService.getBeerById.restore();
  });

  it("should set a beer ", () => {
    component.instance().componentWillMount();
  });


});