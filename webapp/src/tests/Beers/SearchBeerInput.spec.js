import React, { Component } from 'react';
import sinon from 'sinon';

import SearchBeerInput from '../../components/Beers/SearchBeerInput';

describe('test SearchBeerInput', () => {

  let wrapper;

  beforeEach(() => {
    const props = {
      onSearchBeers() { }
    }
    wrapper = shallow(<SearchBeerInput {...props} />);

  });

  it('should render correct componet tag type', () => {
    expect(wrapper.type()).to.eql('form');
  });

  it('should set search input placeholder correctly', () => {
    const lastRadio = wrapper.find('RadioButton').last();
    const searchInput = wrapper.instance().getBeerFilterPlaceholder(lastRadio.props().value);

    wrapper.instance().onChangeBeerFilter({ target: lastRadio.props() });

    expect(wrapper.instance().state.searchPlaceholderText).to.be.eql(searchInput);

  });


  it('fires form submit', () => {

    sinon.stub(wrapper.instance(), 'onSearchBeers')

    const form = wrapper.find('form');
    const inputText = wrapper.find('input').first();
    const event = {
      preventDefault() { }
    }

    inputText.simulate('change', { target: { value: 'Duff' } });

    wrapper.instance().filterInpuValue = inputText;

    form.simulate('submit', event);

    expect(wrapper.instance().onSearchBeers.callCount).to.equal(0);
  });


  describe('test restore Form', () => {

    it('should call restoreForm and restore it', () => {
      const form = wrapper.find('form');
      const inputText = wrapper.find('input').first();
      const event = {
        preventDefault() { }
      }
      
      wrapper.instance().searchfilterParam = 'all';
      wrapper.instance().filterInpuValue = { value: 'all' };
      
      wrapper.instance().restoreForm();

      expect(wrapper.instance().filterInpuValue.value).to.be.eql('');

    });

  });


});