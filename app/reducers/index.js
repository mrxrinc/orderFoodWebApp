// reducer
import { combineReducers } from 'redux';
// import counter from './counter';
import auth from './Auth';
import Verify from './Verify';
import Modals from './Modals';
import Loading from './Loading';
import Notification from './Notification';
import Validation from './Validation';
import notFound from './notFound';
import { connectRouter } from 'connected-react-router';
const rootReducer = (history) => combineReducers({
  Validation,
  Modals,
  Loading,
  Notification,
  auth,
  Verify,
  notFound,
  router: connectRouter(history)
});
export default rootReducer;