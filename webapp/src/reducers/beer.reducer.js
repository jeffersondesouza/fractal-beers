
export default function beersReducer(state = [], action) {

  if (action.type === 'GET_BEERS_REQUEST') {
    // Spred Operator [...array], para gerar um novo Objeto javascript, buscando assim trabalhar com dados imutáveis 
    return [...action.beers];
  }

  if (action.type === 'GET_BEER_BY_ID') {
    return Object.assign({}, action.beer)
  }
  return state;
}