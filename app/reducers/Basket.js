import {
  ACC_CHARGED_CHANGED,
  GETWAY_CHANGED,
  ADDRESS_ID_CHANGED
} from '../constants/Basket';

const Basket = (state = {}, action) => {
    switch (action.type) {
        case ACC_CHARGED_CHANGED:
            return Object.assign({}, state, action.payload);
        case GETWAY_CHANGED:
            return Object.assign({}, state, action.payload);
        case ADDRESS_ID_CHANGED:
          return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export default Basket;
