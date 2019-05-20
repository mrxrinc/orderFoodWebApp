import {
  // USER_AUTH_CHECK,
  // SIGNIN_USER,
  SIGNIN_USER_INFO,
  MAKE_USER_VERIFY,
  VERIFY_USER_INFO,
  SIGNOUT_USER,
  UPDATE_USER_INFO,
  USER_BALANCE,
  USER_GIFT_BALANCE,
  EDIT_ORGANIZATION,
} from '../constants/actionAuthTypes';

const user = (state = {}, action) => {
  switch (action.type) {
    case SIGNIN_USER_INFO:
      return Object.assign({}, state, action.payload);

    case VERIFY_USER_INFO:
      return Object.assign({}, state, action.payload);
s
    case MAKE_USER_VERIFY:
      return { ...state, mobileIsVerified: true };
    case EDIT_ORGANIZATION:
      return { ...state, organization: action.payload };
    case UPDATE_USER_INFO:
      return Object.assign({}, state, action.payload);

    case USER_BALANCE:
      return Object.assign({}, state, action.payload);

    case USER_GIFT_BALANCE:
      return Object.assign({}, state, action.payload);

    case SIGNOUT_USER:
      // localStorage.removeItem("token");
      return {};

    default:
      return state;
  }
};

export default user;
