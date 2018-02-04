import React, { Component } from 'react';

import './scss/search-beer-input.scss';

import RadioButton from '../shared/RadioButton';

export default class SearchBeerInput extends Component {

  constructor() {
    super();
    this.state = {
      searchPlaceholderText: '',
    }
    this.searchfilterParam = '';
    this.onChangeBeerFilter = this.onChangeBeerFilter.bind(this);
  }

  componentWillMount() {
    this.setSearchPlaceholderText('all')
  }


  onChangeBeerFilter(event) {
    this.setSearchPlaceholderText(event.target.value)
  }

  onSearchBeers(event) {
    event.preventDefault();
    this.sendSeachBeers();
  }


  setSearchPlaceholderText(param) {
    this.searchfilterParam = param;
    this.setState({
      searchPlaceholderText: `${this.getBeerFilterPlaceholder(param)}`
    });
    this.restoreForm();
  }

  /**
   * If user knowledge has performed searches 
   * and clicks on the 'Todos' filter, it is automatically reloaded
   */
  restoreForm() {
    if (this.isSearchAllFilterActive() && this.filterInputHasValue()) {
      this.filterInpuValue.value = '';
      this.sendSeachBeers();
    }
  }

  isSearchAllFilterActive() {
    return this.searchfilterParam === 'all'
  }

  filterInputHasValue() {
    return this.filterInpuValue && this.filterInpuValue.value;
  }

  sendSeachBeers() {
    this.props.onSearchBeers({
      param: this.searchfilterParam,
      paramValue: this.filterInpuValue.value
    });
  }

  getBeerFilterPlaceholder(parameterValue) {
    const beerFilterParameterObject = {
      all: 'Selecione um filtro acima e melhore sua busca',
      beer_name: 'Qual marca você está buscando? Ex:Buzz',
      food: 'Que prato você deseja armonizar? Ex:Fresh crab with lemon',
      abv_gt: 'Que teor alcoólico você desejas?',
      ebc_gt: 'Quanto maior o número, mais escura a cerveja.'
    }
    return beerFilterParameterObject[parameterValue];
  }


  render() {
    return (
      <form className="beers__search container" onSubmit={this.onSearchBeers.bind(this)}>
        <div className="beers__search__items container left">
          <RadioButton
            id="all"
            name={'filterParam'}
            label={'Todas'}
            value={'all'}
            className={'beers__search__item'}
            onChange={this.onChangeBeerFilter}
          />
          <RadioButton id="beer_name" 
            name={'filterParam'}
            label={'Marca'}
            value={'beer_name'}
            className={'beers__search__item'}
            onChange={this.onChangeBeerFilter} />
          <RadioButton
            id="food"
            name={'filterParam'}
            label={'Armonização'}
            value={'food'}
            className={'beers__search__item'}
            onChange={this.onChangeBeerFilter} />
          <RadioButton
            id="abv_gt"
            name={'filterParam'}
            label={'Teor Alcoólico'}
            value={'abv_gt'}
            className={'beers__search__item'}
            onChange={this.onChangeBeerFilter} />
          <RadioButton
            id="ebc_gt"
            name={'filterParam'}
            label={'Grau de Tonalidade'}
            value={'ebc_gt'}
            className={'beers__search__item'}
            onChange={this.onChangeBeerFilter} />
        </div>
        <div className="container left">
          <input ref={input => this.filterInpuValue = input} autoFocus={true} type="text" name="search" placeholder={this.state.searchPlaceholderText} className="beers__search__input" />
          <input id="beer-search-submit" type="submit" className="btn-primary" value="Buscar" />
        </div>
      </form>
    );
  }
}