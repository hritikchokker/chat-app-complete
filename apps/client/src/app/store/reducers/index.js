import { combineReducers } from 'redux';
import { LoaderReducer } from './loader';
import { registerReducer } from '../../views/register/register.reducer';
import { loginReducer } from '../../views/login/login.reducer';
import { dashboardState } from '../../views/dashboard/state';
const rootReducer = combineReducers({
  loaderState: LoaderReducer,
  registerState: registerReducer,
  authState: loginReducer,
  userState: dashboardState,
  // chat:chatReducer
});
export default rootReducer;
