// reducer
import { combineReducers } from 'redux';
// import counter from './counter';
import auth from './Auth';
import Verify from './Verify';
import Modals from './Modals';
import UserPosition from './UserPosition';
import Loading from './Loading';
import Notification from './Notification';
import Validation from './Validation';
import notFound from './notFound';
import Basket from './Basket';
import restaurant from './restaurant';
import { connectRouter } from 'connected-react-router';
const rootReducer = (history) => combineReducers({
  Validation,
  Modals,
  UserPosition,
  Loading,
  Notification,
  auth,
  Basket,
  restaurant,
  Verify,
  notFound,
  router: connectRouter(history)
});
export default rootReducer;
