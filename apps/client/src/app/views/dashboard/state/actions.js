import httpService from '../../../services/http.service';
import { DashboardActions } from './actionTypes';
export const updateUserDetails = (payload) => {
  return (dispatch) => {
    dispatch(updateUserDetail(payload));
  };
};

export const fetchUsersList = () => {
  return async (dispatch) => {
    try {
      const result = await httpService.get('/user/list');
      if (result && result.data.data) {
        dispatch(getUserListSuccess(result.data.data));
      }
    } catch (error) {
      dispatch(getUserListFailed());
    }
  };
};

export const updateUserDetail = (payload) => ({
  type: DashboardActions.UPDATE_USER_STATE,
  payload,
});

export const getUserListSuccess = (payload) => ({
  type: DashboardActions.GET_USERS_LIST_SUCCESS,
  payload,
});
export const getUserListFailed = () => ({
  type: DashboardActions.GET_USERS_LIST_FAILURE,
});
