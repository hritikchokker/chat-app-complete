import { Loader } from '../actionTypes';
const initialState = {
  isLoading: false,
};

export function LoaderReducer(state = initialState, action) {
  switch (action.type) {
    case Loader.SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case Loader.HIDE_LOADER:
      return {
        ...state,
        isLoading: false,
      };
    default:
        return state;
  }
}
