import { Register } from './register.actionTypes';
const initialState = {
  user: {},
  token: null,
  isloading: false,
};
export function registerReducer(state = initialState, action) {
  switch (action.type) {
    case Register.REGISTER_REQUEST:
      return {
        ...state,
        isloading: true,
      };
    case Register.REGISTER_SUCCESS:
      return {
        ...state,
        isloading: false,
        user: action.payload.data,
        token: action.payload.token,
      };
    case Register.REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        token: null,
        user: {},
      };
    case Register.LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case Register.LOGOUT_SUCCESS:
      return {
        ...state,
        ...initialState,
      };
    case Register.LOGOUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
