import { takeLatest, takeEvery, put } from 'redux-saga/effects';

import {
  loginPost,
  signUpPost,
  forGotPost,
  verifyPost,
  verifyPassPost,
  userUpdate,
  balanceGet,
  isVerifyPost,
} from '../api/account';

import {
  SIGNIN_USER,
  SIGNUP_USER,
  FORGOT_USER,
  VERIFY_USER,
  VERIFY_PASS_USER,
  UPDATE_USER,
  IS_VERIFY_USER,
  UPDATE_USER_BALANCE,
  SIGNUP_USER_RESPONSE,
} from '../constants/actionAuthTypes';

import {
  getUserInfo,
  getUserVerifyInfo,
  getUserVerifyPassInfo,
  getUserUpdateInfo,
  getUserBalance,
  signUpUserResponse,
  // getUserIsVerifyInfo,
  // forgotPass,
  // checkExistTokenInfo
} from '../actions/Auth';

import { showModal } from '../actions/Modals';

import { disableLoading, enableLoading } from '../actions/Loading';

import { addToast } from '../actions/Notifications';

import { addValidation, removeValidation } from '../actions/Validations';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* UserLogin() {
  yield takeLatest(SIGNIN_USER, userLogin);
}

// worker saga: makes the api call when watcher saga sees the action
function* userLogin({ payload }) {
  try {
    yield put(enableLoading({ loginLoading: true }));
    const signInUser = yield loginPost(payload.user);
    if (signInUser.status === 'success') {
      // alert(signInUser.message)
      localStorage.setItem('authToken', signInUser.data.token);
      // yield put(showAuthMessage('signOutUser.message'));
      yield put(getUserInfo(signInUser.data));
      const response = yield balanceGet();
      if (response.status === 'success') {
        yield put(getUserBalance(response.data));
      }
      yield put(disableLoading({ loginLoading: false }));

      yield put(
        showModal({
          loginModal: false,
        }),
      );
      yield put(
        addToast({
          text: signInUser.message,
          color: 'success',
          delay: 2000,
        }),
      );
      yield put(
        removeValidation({
          userLogin: {},
        }),
      );
    } else {
      yield put(disableLoading({ loginLoading: false }));

      if (signInUser.data) {
        yield put(
          addToast({
            text: signInUser.message,
            color: 'danger',
            delay: 2000,
          }),
        );
        yield put(getUserInfo(signInUser.data));
        // yield put(getUserIsVerifyInfo(signInUser.data));
        yield put(
          showModal({
            loginModal: false,
            isVerifyModal: true,
          }),
        );
      } else {
        yield put(
          addToast({
            text: signInUser.message,
            color: 'danger',
            delay: 2000,
          }),
        );
      }
    }
  } catch (error) {
    yield put(disableLoading({ loginLoading: false }));

    if (error.status === 422) {
      yield put(
        addValidation({
          userLogin: error.data.errors,
        }),
      );
    } else {
      // yield put(showModal({
      //   loginModal: false
      // }));
      yield put(
        addToast({
          text: error.data.message,
          color: 'danger',
          delay: 2000,
        }),
      );
    }
  }
}

export function* UserSignUP() {
  yield takeLatest(SIGNUP_USER, userSignUp);
}

// worker saga: makes the api call when watcher saga sees the action
function* userSignUp({ payload }) {
  try {
    yield put(enableLoading({ registerLoading: true }));
    const signUpUser = yield signUpPost(payload.user);

    if (signUpUser.status === 'success') {
      yield put(signUpUserResponse(signUpUser.data));

      yield put(disableLoading({ registerLoading: false }));

      yield put(
        showModal({
          signUpModal: false,
          verifyModal: true,
        }),
      );
      yield put(
        removeValidation({
          userSignup: {},
        }),
      );
    } else {
      yield put(disableLoading({ registerLoading: false }));

      yield put(
        addToast({
          text: signUpUser.message,
          color: 'danger',
          delay: 2000,
        }),
      );
    }
  } catch (error) {
    yield put(disableLoading({ registerLoading: false }));

    if (error.status === 422) {
      yield put(
        addValidation({
          userSignup: error.data.errors,
        }),
      );
    } else {
      yield put(
        addToast({
          text: error.data.message,
          color: 'danger',
          delay: 2000,
        }),
      );
    }
  }
}

export function* UserIsVerifyUser() {
  yield takeLatest(IS_VERIFY_USER, userIsVerifyUser);
}

// worker saga: makes the api call when watcher saga sees the action
function* userIsVerifyUser({ payload }) {
  try {
    yield put(enableLoading());
    const userIsVerifyUser = yield isVerifyPost(payload.user);
    if (userIsVerifyUser.status === 'success') {
      yield put(
        showModal({
          isVerifyModal: false,
          verifyModal: true,
        }),
      );
      yield put(disableLoading());
      yield put(
        removeValidation({
          userIsVerify: {},
        }),
      );
    } else {
      yield put(disableLoading());
      yield put(
        addToast({
          text: userIsVerifyUser.message,
          color: 'danger',
          delay: 2000,
        }),
      );
    }
  } catch (error) {
    yield put(disableLoading());
    if (error.status === 422) {
      yield put(
        addValidation({
          userIsVerify: error.data.errors,
        }),
      );
    } else {
      yield put(
        addToast({
          text: error.data.message,
          color: 'danger',
          delay: 2000,
        }),
      );
    }
  }
}

export function* UserUpdate() {
  yield takeLatest(UPDATE_USER, userUpdateInfo);
}

function* userUpdateInfo({ payload }) {
  try {
    yield put(
      enableLoading({
        userProfileLoading: true,
      }),
    );
    const updateUser = yield userUpdate(payload.user);
    if (updateUser.status === 'success') {
      yield put(getUserUpdateInfo(updateUser.data));

      yield put(disableLoading({ userProfileLoading: false }));

      yield put(
        addToast({
          text: updateUser.message,
          color: 'success',
          delay: 2000,
        }),
      );
      yield put(
        removeValidation({
          userUpdate: {},
        }),
      );
    } else {
      yield put(disableLoading({ userProfileLoading: false }));

      yield put(
        addToast({
          text: updateUser.message,
          color: 'danger',
          delay: 2000,
        }),
      );
    }
  } catch (error) {
    yield put(disableLoading({ userProfileLoading: false }));

    if (error.status === 422) {
      yield put(
        addValidation({
          userUpdate: error.data.errors,
        }),
      );
    } else {
      yield put(
        addToast({
          text: error.data.message,
          color: 'danger',
          delay: 2000,
        }),
      );
    }
  }
}

export function* UserVerify() {
  yield takeLatest(VERIFY_USER, userVerify);
}

function* userVerify({ payload }) {
  try {
    yield put(enableLoading({ verifyLoading: true }));
    const verifyUserSignUp = yield verifyPost(payload.user);
    if (verifyUserSignUp.status === 'success') {
      localStorage.setItem('authToken', verifyUserSignUp.data.token);
      yield put(getUserVerifyInfo(verifyUserSignUp.data));

      yield put(disableLoading({ verifyLoading: false }));

      yield put(
        showModal({
          verifyModal: false,
        }),
      );
      yield put(
        addToast({
          text: verifyUserSignUp.message,
          color: 'success',
          delay: 2000,
        }),
      );
      yield put(
        removeValidation({
          userVerify: {},
        }),
      );
    } else {
      yield put(disableLoading({ verifyLoading: false }));

      yield put(
        addToast({
          text: verifyUserSignUp.message,
          color: 'danger',
          delay: 2000,
        }),
      );
    }
  } catch (error) {
    yield put(disableLoading({ verifyLoading: false }));

    if (error.status === 422) {
      yield put(
        addValidation({
          userVerify: error.data.errors,
        }),
      );
    } else {
      yield put(
        addToast({
          text: error.data.message,
          color: 'danger',
          delay: 2000,
        }),
      );
    }
  }
}

export function* UserVerifyPass() {
  yield takeLatest(VERIFY_PASS_USER, userVerifyPass);
}

function* userVerifyPass({ payload }) {
  try {
    yield put(enableLoading({ verifyPassLoading: true }));
    const verifyUserPassWord = yield verifyPassPost(payload.user);
    if (verifyUserPassWord.status === 'success') {
      // localStorage.setItem('authToken', verifyUserPassWord.data.token);
      yield put(getUserVerifyPassInfo(verifyUserPassWord.data));

      yield put(disableLoading({ verifyPassLoading: false }));

      yield put(
        showModal({
          verifyPassModal: false,
          resetPassModal: true,
        }),
      );
      // yield put(addToast({
      //   text: verifyUserPassWord.message,
      //   color: "success",
      //   delay: 2000
      // }))
      yield put(
        removeValidation({
          userVerifyPass: {},
        }),
      );
    } else {
      yield put(disableLoading({ verifyPassLoading: false }));

      yield put(
        addToast({
          text: verifyUserPassWord.message,
          color: 'danger',
          delay: 2000,
        }),
      );
    }
  } catch (error) {
    yield put(disableLoading({ verifyPassLoading: false }));

    if (error.status === 422) {
      yield put(
        addValidation({
          userVerifyPass: error.data.errors,
        }),
      );
    } else {
      yield put(
        addToast({
          text: error.data.message,
          color: 'danger',
          delay: 2000,
        }),
      );
    }
  }
}

export function* UserForGot() {
  yield takeLatest(FORGOT_USER, userForGot);
}

// worker saga: makes the api call when watcher saga sees the action
function* userForGot({ payload }) {
  try {
    yield put(enableLoading({ forGotLoading: true }));
    const forGotUser = yield forGotPost(payload.user);
    if (forGotUser.status === 'success') {
      yield put(disableLoading({ forGotLoading: false }));

      yield put(
        showModal({
          forGotModal: false,
          verifyPassModal: true,
        }),
      );
      yield put(
        removeValidation({
          userForgotPass: {},
        }),
      );
    } else {
      yield put(disableLoading({ forGotLoading: false }));

      yield put(
        addToast({
          text: forGotUser.message,
          color: 'danger',
          delay: 2000,
        }),
      );
    }
  } catch (error) {
    yield put(disableLoading({ forGotLoading: false }));

    if (error.status === 422) {
      yield put(
        addValidation({
          userForgotPass: error.data.errors,
        }),
      );
    } else {
      yield put(
        addToast({
          text: error.data.message,
          color: 'danger',
          delay: 2000,
        }),
      );
    }
  }
}
export function* updateUserBalance() {
  yield takeEvery(UPDATE_USER_BALANCE, updateUserBalanceHandler);
}
function* updateUserBalanceHandler() {
  const response = yield balanceGet();
  if (response.status === 'success') {
    yield put(getUserBalance(response.data));
  }
}
// export function* CheckExistToken() {
//   yield takeLatest(IS_VERIFY_USER, checkExistTokenMain);
// }

// // worker saga: makes the api call when watcher saga sees the action
// function* checkExistTokenMain({
//   payload
// }) {
//   try {
//     const checkExistTokenMain = yield checkExistToken(payload.user);
//     if (checkExistTokenMain.status === 'success') {
//       yield put(showModal({
//         checkExistModal: false,
//         resetPassModal: true,
//       }));
//     } else {
//       yield put(addToast({
//         text: checkExistTokenMain.message,
//         color: "danger",
//         delay: 2000
//       }));
//     }
//   } catch (error) {
//     yield put(addToast({
//       text: error.data.message,
//       color: "danger",
//       delay: 2000
//     }));
//   }
// }
