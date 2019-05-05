import {
  STORE_RESTAURANT
} from '../constants/restaurant';

export const storeRestaurant = value => ({
  type: STORE_RESTAURANT,
  payload: value,
});