import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.47:3333',
});

export default api;

/* 
baseURL: 'https://localhost:3333' 
o react nao deixa fazer requisicao http.
portanto usar o ip da maquina, em vez do localhost
*/
