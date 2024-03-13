import axios from 'axios';

const apiUrl = process.env.REACT_APP_BBAPI_URL;

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  function (resp) {
    return resp;
  },
  function (error) {
    console.log(error);
  }
);

export { api };
