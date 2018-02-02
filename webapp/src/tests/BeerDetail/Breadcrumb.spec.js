import React, { Component } from 'react';

import Breadcrumb from '../../components/BeerDetail/Breadcrumb';

describe('Breadcrumb', () => {

  let component;

  beforeEach(() => {
    component = shallow(<Breadcrumb />)
  });


  it('should Breadcrumb component be a figure nav', () => {
    expect(component.type()).to.eql('nav');
  });

  it('should Breadcrumb have a img ul as child', () => {
    expect(component.find('ul')).to.have.length(1)
  });


  it('should Breadcrumb some li an Link as children', () => {
    const totalOfLinks = 3;

    expect(component.find('li')).to.have.length(totalOfLinks);
    
    /**
     * The last link contains the beer id, if it wold be redirectbel, a new request would be done
     * we are avoiding this by no passing this last element as a link, just to prevent a user unecessary requet 
     */
    expect(component.find('Link')).to.have.length(totalOfLinks-1);
  });



});