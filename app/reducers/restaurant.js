import {
  STORE_RESTAURANT
} from '../constants/restaurant';

const restaurant = (state = {}, action) => {
    switch (action.type) {
        case STORE_RESTAURANT:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export default restaurant;
