import {
  ACC_CHARGED_CHANGED,
  GETWAY_CHANGED,
  ADD_TO_BASKET,
  ADDRESS_ID_CHANGED,
  DELIVERY_TYPE_CHANGED,
  CAMPAGIN_CODE_CHANGED,
  BASKET_CHANGED,
  GET_BASKET_ITEMS
} from '../constants/Basket';

export const accChargedChanged = value => ({
  type: ACC_CHARGED_CHANGED,
  payload: value,
});

export const gatewayChanged = value => ({
  type: GETWAY_CHANGED,
  payload: value,
});

export const addToBasket = value => ({
  type: ADD_TO_BASKET,
  payload: value,
});

export const getBasketItems = value => ({
  type: GET_BASKET_ITEMS,
  payload: value,
});

export const addressIdChanged = value => ({
  type: ADDRESS_ID_CHANGED,
  payload: value,
});

export const deliveryTypeChanged = value => ({
  type: DELIVERY_TYPE_CHANGED,
  payload: value,
});

export const campaginCodeChanged = value => ({
  type: CAMPAGIN_CODE_CHANGED,
  payload: value,
});


export const putChangeBasket = value => ({
  type: BASKET_CHANGED,
  payload: value,
});
