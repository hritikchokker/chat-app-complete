import { toast } from 'react-toastify';
import httpService from '../../services/http.service';
import { Register } from './register.actionTypes';
function register(payload, navigate) {
  return async (dispatch) => {
    dispatch(registerRequest());
    try {
      const res = await httpService.post('/user/register', payload);
      if (res && res.data) {
        toast.success(res.data.message);
        localStorage.setItem('token', res.data.token);
        dispatch(registerSuccess(res.data));
        navigate('/dashboard');
      }
    } catch ({ response }) {
      toast.error(response.data.message);
      dispatch(registerFailure(response.data));
    }
  };
}
function logout() {
  return async (dispatch) => {
    dispatch(logoutRequest());
    try {
      const res = await httpService.get('/user/logout');
      if (res && res.data) {
        localStorage.removeItem('token');
        dispatch(logoutSucess());
      }
    } catch (error) {
      dispatch(logoutFailure(error));
    }
  };
}
const registerRequest = () => {
  return {
    type: Register.REGISTER_REQUEST,
  };
};
const registerSuccess = (data) => {
  return {
    type: Register.REGISTER_SUCCESS,
    payload: data,
  };
};
const registerFailure = (err) => {
  return {
    type: Register.REGISTER_FAILURE,
    payload: err,
  };
};
const logoutRequest = () => {
  return {
    type: Register.LOGOUT_REQUEST,
  };
};
const logoutSucess = () => {
  return {
    type: Register.LOGOUT_SUCCESS,
  };
};
const logoutFailure = (err) => {
  return {
    type: Register.LOGOUT_FAILURE,
    payload: err,
  };
};
export const registerActions = {
  register,
};
