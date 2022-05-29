import { toast } from 'react-toastify';
import httpService from '../../services/http.service';
import { LoginTypes } from './login.actionTypes';
function login(payload, navigate) {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const res = await httpService.post('/user/login', payload);
      if (res && res.data) {
        toast.success(res.data.message);
        localStorage.setItem('token', res.data.token);
        dispatch(loginSuccess(res.data));
        navigate('/dashboard');
      }
    } catch ({response}) {
      toast.error(response.data.message);
      dispatch(loginFailure(response.data));
    }
  };
}
function logout(navigate) {
  return async (dispatch) => {
    dispatch(logoutRequest());
    try {
      const res = await httpService.get('/user/logout');
      if (res && res.data) {
        toast.success(res.data.message);
        localStorage.removeItem('token');
        dispatch(logoutSucess());
        navigate('/');
      }
    } catch ({ response: { data } }) {
      toast.error(data.message);
      dispatch(logoutFailure(data));
      localStorage.removeItem('token');
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };
}
const loginRequest = () => {
  return {
    type: LoginTypes.LOGIN_REQUEST,
  };
};
const loginSuccess = (data) => {
  return {
    type: LoginTypes.LOGIN_SUCCESS,
    payload: data,
  };
};
const loginFailure = (err) => {
  return {
    type: LoginTypes.LOGIN_FAILURE,
    payload: err,
  };
};
const logoutRequest = () => {
  return {
    type: LoginTypes.LOGOUT_REQUEST,
  };
};
const logoutSucess = () => {
  return {
    type: LoginTypes.LOGOUT_SUCCESS,
  };
};
const logoutFailure = (err) => {
  return {
    type: LoginTypes.LOGOUT_FAILURE,
    payload: err,
  };
};
export const loginActions = {
  login,
  logout,
};
