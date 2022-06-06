import { DashboardActions } from './actionTypes';
const initialState = {
  user: {},
  token: null,
  usersList: [],
  userDetails: {},
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
    case DashboardActions.GET_USERS_DETAILS:
      return {
        ...state,
        userDetails: state.usersList.find((el) => el.uid === action.payload),
      };
    case DashboardActions.GET_USERS_DETAILS_SUCCESS:
      return {
        ...state,
        userDetails: action.payload,
      };
    case DashboardActions.GET_USERS_DETAILS_FAILURE:
      return {
        ...state,
        userDetails: {},
      };
    default:
      return state;
  }
}
