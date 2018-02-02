import axios from 'axios';

import { getBeersRequest, getBeerById } from '../actions/actions-factory';


export class BeersService {

  /**
  * API_URL - foi definido no arquivo de configurção do webpack, assim 
  * caso a API seja modificada, ou o amiente de execução mude, a app não sofrerá efeitos  
  */


  /**
   * getAllBeers() dispatch an action to beers reducer
   * and returns a promise containg a list of beers,
   * 
   * 
   * @param null
   * @return <Promise> elements
   */
  static getAllBeers(beersPerRequestGroup) {
    
    return dispatch => {
      axios.get(API_URL, {
        params: {
          page: beersPerRequestGroup,
          per_page: 12,

        }
      })
        .then(res => res.data)
        .then(beers => {
          dispatch(getBeersRequest(beers, beersPerRequestGroup));
          return beers;
        });
    }
  }

  /**
 * getBeerById() dispatch an action to beers reducer
 * and returns a promise containg an beer
 * @param <number> id
 * @return <Promise> element
 */
  static getBeerById(id) {
    return dispatch => {
      axios.get(`${API_URL}/${id}`)
        .then(response => response.data[0])
        .then(beer => {
          dispatch(getBeerById(beer));
          return beer;
        });
    }
  }

}

