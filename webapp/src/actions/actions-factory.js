export function getBeersRequest(beers) {
  return { type: 'GET_BEERS_REQUEST', beers };
}

export function getBeerById(beer) {
  return { type: 'GET_BEER_BY_ID', beer };
}