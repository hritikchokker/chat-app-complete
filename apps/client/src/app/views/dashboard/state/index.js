import { DashboardActions } from './actionTypes';
const initialState = {
  user: {},
  token: null,
  usersList: [],
  isloading: false,
};
export function dashboardState(state = initialState, action) {
  switch (action.type) {
    case DashboardActions.UPDATE_USER_STATE:
      return {
        ...state,
        user: action.payload,
        token: action.payload.token,
      };
    case DashboardActions.GET_USERS_LIST_SUCCESS:
      return {
        ...state,
        usersList: action.payload,
      };
    default:
      return state;
  }
}
