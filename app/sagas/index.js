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
        updateUserBalance()
    ]);
}
