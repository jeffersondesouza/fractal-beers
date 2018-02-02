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


  setSearchPlaceholderText(param) {
    this.searchfilterParam = param;
    this.setState({
      searchPlaceholderText: `${this.getBeerFilterPlaceholder(param)}`
    });
  }

  getBeerFilterPlaceholder(parameterValue) {
    const beerFilterParameterObject = {
      all: 'Selecione um filtro acima e melhore sua busca',
      name: 'Qual marca você está buscando. Ex:Buzz',
      food_pairing: 'Busque cervejas por Pratos que combinam. Ex:Fresh crab with lemon',
      abv: 'Busque cervejas pelo Teor alcoólico',
      ebc: 'Busque cervejas pela Tonalidade'
    }
    return beerFilterParameterObject[parameterValue];
  }


  onChangeBeerFilter(event) {
    this.setSearchPlaceholderText(event.target.value)
  }

  onSearchBeers(event) {
    event.preventDefault();
    this.props.onSearchBeers({
      param:this.searchfilterParam,
      paramValue: this.filterInpuValue.value
    });
  }


  render() {
    return (
      <form className="beers__search container" onSubmit={this.onSearchBeers.bind(this)}>
        <div className="beers__search__items container left">
          <InputRadioCheckbox type={'radio'} name={'filterParam'} id="all" label={'Todas'} value={'all'} className={'beers__search__item'} onChange={this.onChangeBeerFilter.bind(this)} />
          <InputRadioCheckbox type={'radio'} name={'filterParam'} id="name" label={'Marca'} value={'name'} className={'beers__search__item'} onChange={this.onChangeBeerFilter.bind(this)} />
          <InputRadioCheckbox type={'radio'} name={'filterParam'} id="food_pairing" label={'Armonização'} value={'food_pairing'} className={'beers__search__item'} onChange={this.onChangeBeerFilter.bind(this)} />
          <InputRadioCheckbox type={'radio'} name={'filterParam'} id="abv" label={'Teor Alcoólico'} value={'abv'} className={'beers__search__item'} onChange={this.onChangeBeerFilter.bind(this)} />
          <InputRadioCheckbox type={'radio'} name={'filterParam'} id="ebc" label={'Grau de Tonalidade'} value={'ebc'} className={'beers__search__item'} onChange={this.onChangeBeerFilter.bind(this)} />
        </div>
        <div className="container left">
          <input ref={input => this.filterInpuValue = input} autoFocus={true} type="text" name="search" placeholder={this.state.searchPlaceholderText} className="beers__search__input" />
          <input type="submit" className="btn-primary" value="Buscar" />
        </div>
      </form>
    );
  }
}