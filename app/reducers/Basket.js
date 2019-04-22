import {
  ACC_CHARGED_CHANGED,
  GETWAY_CHANGED,
  ADD_TO_BASKET
} from '../constants/Basket';

const Basket = (state = {}, action) => {
    switch (action.type) {
        case ACC_CHARGED_CHANGED:
            return Object.assign({}, state, action.payload);
        case GETWAY_CHANGED:
            return Object.assign({}, state, action.payload);
        case ADD_TO_BASKET:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export default Basket;
