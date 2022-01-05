import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://192.168.0.109:5000',
  baseURL:'https://stormy-island-55490.herokuapp.com/',
});

export default instance;
