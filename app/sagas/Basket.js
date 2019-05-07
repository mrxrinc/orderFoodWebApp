import { takeLatest, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import {
  BASKET_CHANGED
} from '../constants/Basket';

import { putChangeBasket } from '../api/account';

export function* ChangeBasket() {
  yield takeLatest(BASKET_CHANGED, basketChange);
}

function* basketChange({ payload }) {
  try {
    console.log("payload",payload);
    const res = yield putChangeBasket(payload);
    console.log("res-------------",res);
  } catch (e) {

  }
}
// putChangeBasket(
//   {
//     "id":basket.id,
//     "deliveryType":basket.deliveryType ? basket.deliveryType:false,
//     "restaurantId":basket.restaurantId,
//     "items":items
//   }
// ).then(response => {
//   if(response.status) {
//     // history.push("/checkout");
//     this.setState({
//     })
//   } else {
//     return;
//   }
// });
