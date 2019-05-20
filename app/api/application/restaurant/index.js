import {app} from '../../constants';
import deRequest from '../../../../app/utils/deRequest';

export const restaurantSearch = (cityId, point, tag) => {
  return deRequest(app.restaurant_search(cityId, point, tag), 'GET');
}

export const restaurantSearchChain = (slug,tag) => {
  return deRequest(app.restaurant_search_chian(slug,tag), 'GET');
}

export const restaurantDetail = id => deRequest(app.restaurant_detail(id), 'GET');

export const restaurantDetailBySlug = (citySlug,restaurantSlug) => deRequest(app.restaurant_detail_by_slug(citySlug,restaurantSlug), 'GET');

export const createBasket = id => deRequest(app.create_basket(id), 'GET');

export const restaurantListTag = () => deRequest(app.restaurant_list_tag(), 'GET');
