import {
  NEIGHBORHOOD,
} from '../constants/userPosition';

export const addNeighborhood = neighborhood => ({
  type: NEIGHBORHOOD,
  payload: neighborhood,
});
