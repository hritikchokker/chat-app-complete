import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3333/api/v1/',
  timeout: 6000,
  headers: {
    'content-Type': 'application/json',
    Accept: 'application/json',
  },
});
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (localStorage.getItem('token')) {
      config.headers.Authorization = localStorage.getItem('token');
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // debugger;
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export default axiosInstance;
