import {
  ACC_CHARGED_CHANGED,
  GETWAY_CHANGED,
  ADD_TO_BASKET,
  ADDRESS_ID_CHANGED,
  DELIVERY_TYPE_CHANGED,
  CAMPAGIN_CODE_CHANGED
} from '../constants/Basket';

const Basket = (state = {}, action) => {
    switch (action.type) {
        case ACC_CHARGED_CHANGED:
            return Object.assign({}, state, action.payload);
        case GETWAY_CHANGED:
            return Object.assign({}, state, action.payload);
        case ADD_TO_BASKET:
            return Object.assign({}, state, action.payload);
        case ADDRESS_ID_CHANGED:
          return Object.assign({}, state, action.payload);
        case DELIVERY_TYPE_CHANGED:
          return Object.assign({}, state, action.payload);
        case CAMPAGIN_CODE_CHANGED:
          return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export default Basket;
