import React, { Component } from 'react';

import './scss/search-beer-input.scss';

import InputRadioCheckbox from '../shared/InputRadioCheckbox';

export default class SearchBeerInput extends Component {

  constructor() {
    super();
    this.state = {
      searchPlaceholderText: '',
    }
    this.searchfilterParam = '';
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
          <InputRadioCheckbox type={'radio'} name={'filterParam'} id="all" label={'Todas'} value={'all'} className={'beers__search__item'} onChange={this.onChangeBeerFilter.bind(this)} />
          <InputRadioCheckbox type={'radio'} name={'filterParam'} id="beer_name	" label={'Marca'} value={'beer_name'} className={'beers__search__item'} onChange={this.onChangeBeerFilter.bind(this)} />
          <InputRadioCheckbox type={'radio'} name={'filterParam'} id="food" label={'Armonização'} value={'food'} className={'beers__search__item'} onChange={this.onChangeBeerFilter.bind(this)} />
          <InputRadioCheckbox type={'radio'} name={'filterParam'} id="abv_gt" label={'Teor Alcoólico'} value={'abv_gt'} className={'beers__search__item'} onChange={this.onChangeBeerFilter.bind(this)} />
          <InputRadioCheckbox type={'radio'} name={'filterParam'} id="ebc_gt" label={'Grau de Tonalidade'} value={'ebc_gt'} className={'beers__search__item'} onChange={this.onChangeBeerFilter.bind(this)} />
        </div>
        <div className="container left">
          <input ref={input => this.filterInpuValue = input} autoFocus={true} type="text" name="search" placeholder={this.state.searchPlaceholderText} className="beers__search__input" />
          <input type="submit" className="btn-primary" value="Buscar" />
        </div>
      </form>
    );
  }
}