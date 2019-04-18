import {
  NEIGHBORHOOD,
  NEIGHBORHOOD_PROFILE
} from '../constants/userPosition';

const userPosition = (state = {}, action) => {
  switch (action.type) {

      case NEIGHBORHOOD:
          return Object.assign({}, state, action.payload);

      case NEIGHBORHOOD_PROFILE:
          return Object.assign({}, state, action.payload);
          
      default:
          return state;
  }
}

export default userPosition;