import React, { Component } from 'react';
import { createMockStore } from 'redux-test-utils';

import sinon from 'sinon';

import Beers from '../../../src/components/Beers'

import { shallowWithStore } from '../utils';

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

  describe('test internal methods of Beers', () => {
    let testState;
    let props;
    let store;
    let component;

    beforeEach(() => {
      testState = {
        beer: { id: 1, }
      };

      props = {
        params: {
          id: 1
        }
      }

      store = createMockStore(testState)
      component = shallowWithStore(<Beers {...props} />, store);

    });


    it('should set beers state', () => {
      const beersDumbArray = [{ id: 1 }, { id: 2 }];
      component.instance().setBeers(beersDumbArray);
      expect(component.state().beers.length).to.be.eql(beersDumbArray.length);
    });


    it('should load Beers With params', () => {
      const beerParams = {
        name: 'Duff'
      }
      component.instance().loadBeersWith(beerParams);
      const beersDumbArray = [{ id: 1 }, { id: 2 }];
      expect(component.state().isWaitingDataFromServer).to.be.true;
    });


    it('should call show more beers, and the increase the berrs group that will load from server', () => {

      sinon.stub(component.instance(), 'loadBeers');

      const initialBeersGrup = component.instance().beersPerRequestGroup;


      component.instance().showMoreBeers();

      expect(component.instance().beersPerRequestGroup).to.be.eql(initialBeersGrup + 1);
      expect(component.instance().loadBeers.callCount).to.be.eql(1);

    });


    it('should call loadBeersWith, when onSearchBeers is triggered', () => {
      sinon.stub(component.instance(), 'loadBeersWith');

      const beerParams = {
        name: 'Duff'
      }

      component.instance().onSearchBeers(beerParams);

      expect(component.instance().loadBeersWith.calledWith(beerParams)).to.be.true;

    });



    it('should rendering beer componet includes the spinner when isWaitingDataFromServer is true', () => {

      component.setState({ isWaitingDataFromServer: true });


      const sprinnerRender = component.instance().renderWaitingBeersLoadding();

      const componentContaisSpinner = sprinnerRender.props.children.type === 'img';

      expect(componentContaisSpinner).to.be.true;

    });

    it('should not rendering componet includes the spinner when isWaitingDataFromServer is true', () => {

      component.setState({ isWaitingDataFromServer: false });

      const sprinnerRender = component.instance().renderWaitingBeersLoadding();

      const componentNotContaisSpinner = sprinnerRender === '';

      expect(componentNotContaisSpinner).to.be.true;

    });

  });

});