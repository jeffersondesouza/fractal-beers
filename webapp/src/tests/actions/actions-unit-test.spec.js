import { getBeerById, getBeersRequest } from '../../actions/actions-factory';

describe('test redux actions class isolated', () => {


  describe('test getBeersRequest', () => {
    it("should return a object that contains GET_BEERS_REQUEST type", () => {
      const beers = [{ id: 1 }];
      const beersPerRequestGroup = 1;
      const getBeersRequestAction = getBeersRequest(beers, beersPerRequestGroup);

      expect(getBeersRequestAction.type).to.be.eql('GET_BEERS_REQUEST');
      expect(getBeersRequestAction.beers).to.be.eql(beers);
      expect(getBeersRequestAction.beersPerRequestGroup).to.be.eql(beersPerRequestGroup);
    });
  });

  describe('test getBeerById', () => {
    it("should return a object that contains GET_BEER_BY_ID type", () => {
      const beer = { id: 1 };
      const beersPerRequestGroup = 1;
      const getBeersRequestAction = getBeerById(beer);

      expect(getBeersRequestAction.type).to.be.eql('GET_BEER_BY_ID');
      expect(getBeersRequestAction.beer).to.be.eql(beer);
    });
  });


});

/* 

export function getBeerById(beer) {
  return { type: 'GET_BEER_BY_ID', beer };
}

*/