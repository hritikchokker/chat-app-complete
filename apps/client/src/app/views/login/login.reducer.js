import { LoginTypes } from './login.actionTypes';
const initialState = {
  user: {},
  token: null,
  isloading: false,
};
export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LoginTypes.LOGIN_REQUEST:
      return {
        ...state,
        isloading: true,
      };
    case LoginTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isloading: false,
        user: action.payload.data,
        token: action.payload.token,
      };
    case LoginTypes.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        token: null,
        user: {},
      };
    case LoginTypes.LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LoginTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        ...initialState,
      };
    case LoginTypes.LOGOUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
