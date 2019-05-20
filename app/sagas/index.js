import {all} from 'redux-saga/effects';
import {
    UserLogin,
    UserSignUP,
    UserForGot,
    UserVerify,
    UserVerifyPass,
    UserUpdate,
    UserIsVerifyUser,
    updateUserBalance,
    watchUserLogin,
    watchUserSignup
} from './Auth';

import {
  ChangeBasket,
  GetBasketItems
} from  './Basket'

export default function* rootSaga(getState) {
    yield all([
        //authSagas(),
        // checkExistTokenInfo(),
        UserIsVerifyUser(),
        watchUserLogin(),
        watchUserSignup(),
        UserForGot(),
        UserVerify(),
        UserVerifyPass(),
        UserUpdate(),
        updateUserBalance(),
        ChangeBasket(),
        GetBasketItems()
    ]);
}
