/**beersPageJustLoad() 
 * The endpoint has a param 'page' that controls 
 * the group of beers Per Request (beersPerRequestGroup)
 * we check beersPerRequestGroup === 1 to avoid a state that is not the 
 * beers list state
 * 
 * @param <Number>value
 * @return <Boolea> value
 */
function hasBeersPageJustLoad(beersPerRequestGroup) {
  return beersPerRequestGroup === 1;
}

export default function beersReducer(state = [], action) {

  if (action.type === 'GET_BEERS_REQUEST') {
    
    let actualBeersList;
    
    if (hasBeersPageJustLoad(action.beersPerRequestGroup)) {
      actualBeersList = [];
    } else {
      // copy a new Object reference  of state array
      actualBeersList = state.slice();
    }
    
    // Spred Operator [...array], para gerar um novo Objeto javascript, buscando assim trabalhar com dados imutáveis 
    return [...actualBeersList, ...action.beers];
  }

  if (action.type === 'GET_BEER_BY_ID') {
    return Object.assign({}, action.beer)
  }
  return state;
}