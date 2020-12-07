import axios from 'axios';

const API_KEY = 'a85da31ed72f87705f3ab33ddbce06e7e20a56d6e8b874884dd41a986b39f6a8'
const cryptoHTTP = axios.create({
  baseURL: 'https://min-api.cryptocompare.com/data',
  headers: {
    authorization: `Apikey ${API_KEY}`
  }
});

export default cryptoHTTP;
