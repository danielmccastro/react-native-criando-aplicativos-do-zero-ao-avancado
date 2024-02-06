import axios from 'axios';

const api = axios.create({
  baseURL: 'htttps://free.currencyconverterapi.com/api/v5',
});

export default api