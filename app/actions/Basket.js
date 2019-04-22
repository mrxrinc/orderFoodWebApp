import {
  ACC_CHARGED_CHANGED,
  GETWAY_CHANGED,
  ADDRESS_ID_CHANGED
} from '../constants/Basket';

export const accChargedChanged = value => ({
  type: ACC_CHARGED_CHANGED,
  payload: value,
});

export const gatewayChanged = value => ({
  type: GETWAY_CHANGED,
  payload: value,
});

export const addressIdChanged = value => ({
  type: ADDRESS_ID_CHANGED,
  payload: value,
});

