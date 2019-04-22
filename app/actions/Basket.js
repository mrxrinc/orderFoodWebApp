import {
  ACC_CHARGED_CHANGED,
  GETWAY_CHANGED,
  ADD_TO_BASKET
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

