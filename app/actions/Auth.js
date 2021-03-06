import {
  SIGNIN_USER,
  SIGNUP_USER,
  SIGNOUT_USER,
  VERIFY_USER,
  VERIFY_PASS_USER,
  IS_VERIFY_USER,
  SIGNIN_USER_INFO,
  VERIFY_USER_INFO,
  VERIFY_PASS_USER_INFO,
  UPDATE_USER_INFO,
  UPDATE_USER,
  USER_BALANCE,
  USER_GIFT_BALANCE,
  FORGOT_USER,
  UPDATE_USER_BALANCE,
  MAKE_USER_VERIFY,
  SIGNUP_USER_RESPONSE,
  EDIT_USER,
  EDIT_ORGANIZATION,
} from '../constants/actionAuthTypes';

export const getUser = user => ({
  type: SIGNIN_USER,
  payload: user,
});
export const getUserBalance = balance => ({
  type: USER_BALANCE,
  payload: balance,
});
export const getUserGiftBalance = balance => ({
  type: USER_GIFT_BALANCE,
  payload: balance,
});
export const getUserUpdate = user => ({
  type: UPDATE_USER,
  payload: user,
});
export const logOutUser = user => ({
  type: SIGNOUT_USER,
  payload: user,
});
export const getUserIsVerifyInfo = user => ({
  type: IS_VERIFY_USER,
  payload: user,
});
export const getUserVerify = verification => ({
  type: VERIFY_USER,
  payload: verification,
});
export const getUserVerifyPass = user => ({
  type: VERIFY_PASS_USER,
  payload: user,
});

export const getUserVerifyInfo = user => ({
  type: VERIFY_USER_INFO,
  payload: user,
});

export const getUserVerifyPassInfo = user => ({
  type: VERIFY_PASS_USER_INFO,
  payload: user,
});

export const signUpUser = user => ({
  type: SIGNUP_USER,
  payload: user,
});
export const signUpUserResponse = user => ({
  type: SIGNUP_USER_RESPONSE,
  payload: user,
});
export const forGotUser = user => ({
  type: FORGOT_USER,
  payload: user,
});

export const getUserInfo = user => ({
  type: SIGNIN_USER_INFO,
  payload: user,
});

export const makeUserVerify = () => ({
  type: MAKE_USER_VERIFY,
  payload: {},
});

export const getUserUpdateInfo = user => ({
  type: UPDATE_USER_INFO,
  payload: user,
});
export const updateUserBalance = () => ({
  type: UPDATE_USER_BALANCE,
  payload: {},
});

export const updateUser = user => ({
  type: EDIT_USER,
  payload: user,
});


export const updateOrganization = organization => ({
  type: EDIT_ORGANIZATION,
  payload: organization,
});
