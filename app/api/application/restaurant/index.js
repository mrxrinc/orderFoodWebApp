import {app} from '../../constants';
import deRequest from '../../../../app/utils/deRequest';

export const restaurantSearch = (cityId,point,tag) => {
  return deRequest(app.restaurant_search(cityId,point,tag), "GET");
}