import * as axiosInstance from 'axios';

export const axios = axiosInstance.create({
  baseURL: 'http://localhost:3333/api/v1',
  timeout: 10000,
});
axios.interceptors.request.use(
  function (config) {
    // debugger;
    if (localStorage.getItem('token')) {
      // config.headers.Authorization = JSON.parse(localStorage.getItem("token"));
      config.headers.Authorization = localStorage.getItem('token');
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response && response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
