import axios from 'axios';

function configAxios(){
  /**
   * In webpack files (dev, prod) we define an env variable called API_URL(https://api.punkapi.com/v2), 
   * Now we define it as a default to Axios base url, so if the base api change, the project
   * will not break
   * 
   * 
   * We are setting a Base API url to Axios, 
    */
  axios.defaults.baseURL = API_URL;
}

export function configApplication() {
  configAxios();
} 