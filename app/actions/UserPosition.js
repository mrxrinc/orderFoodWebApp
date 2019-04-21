import {
  NEIGHBORHOOD,
  NEIGHBORHOOD_PROFILE,
} from '../constants/userPosition';

export const addNeighborhood = neighborhood => ({
  type: NEIGHBORHOOD,
  payload: neighborhood,
});

export const addNeighborhoodProfile = neighborhood => ({
  type: NEIGHBORHOOD_PROFILE,
  payload: neighborhood,
});
