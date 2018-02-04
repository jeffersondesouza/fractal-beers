export function getBeersRequest(beers, beersPerRequestGroup) {
  return { type: 'GET_BEERS_REQUEST', beers,  beersPerRequestGroup };
}

export function getBeerById(beer) {
  return { type: 'GET_BEER_BY_ID', beer };
}