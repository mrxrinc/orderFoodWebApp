import { takeLatest, takeEvery, put, take } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { history } from '../store';
import { createBasket } from '../api/application/restaurant';


import {
  BASKET_CHANGED,
  GET_BASKET_ITEMS
} from '../constants/Basket';

import {
  addToBasket,
} from '../actions/Basket';


import { putChangeBasket } from '../api/account';
import { getUserInfo } from '../actions/Auth';

export function* ChangeBasket() {
  yield takeLatest(BASKET_CHANGED, basketChange);
}

function* basketChange({ payload }) {
  try {
    console.log("payload",payload.data);
    const res = yield putChangeBasket(payload.data);
    if(res.status && !payload.preventRedirect) {
      yield put(push("/" + payload.nextPage));
    }
  } catch (e) {

  }
}

export function* GetBasketItems() {
  // const getToken = (state) => state.Basket
  // debugger
  yield take(GET_BASKET_ITEMS, getBasket);
}

function* getBasket({ payload }) {
  try {
    console.log("payload",payload);
    const res = yield createBasket(payload.restaurantId);
    if (res.status) {
      yield put(addToBasket(res.result));
    }
  }catch (e) {
    console.log(e);
  }
}
