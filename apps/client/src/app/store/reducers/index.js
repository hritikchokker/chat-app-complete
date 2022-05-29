import { combineReducers } from 'redux';
import { LoaderReducer } from './loader';
import { registerReducer } from '../../views/register/register.reducer';
import { loginReducer } from '../../views/login/login.reducer';
const rootReducer = combineReducers({
  loaderState: LoaderReducer,
  registerState: registerReducer,
  authState: loginReducer,
  // chat:chatReducer
});
export default rootReducer;
