import {all} from 'redux-saga/effects';
import {
    UserLogin,
    UserSignUP,
    UserForGot,
    UserVerify,
    UserVerifyPass,
    UserUpdate,
    UserIsVerifyUser,
    updateUserBalance
} from './Auth';

import {
  ChangeBasket
} from  './Basket'

export default function* rootSaga(getState) {
    yield all([
        //authSagas(),
        // checkExistTokenInfo(),
        UserIsVerifyUser(),
        UserLogin(),
        UserSignUP(),
        UserForGot(),
        UserVerify(),
        UserVerifyPass(),
        UserUpdate(),
        updateUserBalance(),
        ChangeBasket()
    ]);
}
