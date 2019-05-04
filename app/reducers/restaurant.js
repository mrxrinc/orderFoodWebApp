import {
  STORE_RESTAURANT
} from '../constants/restaurant';

const restaurant = (state = null, action) => {
    switch (action.type) {
        case STORE_RESTAURANT:
            return action.payload;
        default:
            return state;
    }
}

export default restaurant;
