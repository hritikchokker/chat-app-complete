import axiosInstance from '../utils/axiosInstance/axiosInstance';
class HttpService {
  get(url, configs) {
    return axiosInstance.get(url);
  }

  post(url, payload, configs = null) {
    return axiosInstance.post(url, payload);
  }
  put(url, payload, configs = null) {
    return axiosInstance.put(url, payload);
  }
  patch(url, payload, configs = null) {
    return axiosInstance.patch(url, payload);
  }

  delete(url, configs = null) {
    return axiosInstance.delete(url);
  }
}

export default new HttpService();
