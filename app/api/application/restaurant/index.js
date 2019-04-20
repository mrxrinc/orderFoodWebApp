import {app} from '../../constants';
import deRequest from '../../../../app/utils/deRequest';

export const restaurantSearch = (point,tag) => {
  return deRequest(app.restaurant_search(point,tag), "GET");
}