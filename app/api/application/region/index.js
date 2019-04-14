import {app} from '../../constants';
import deRequest from '../../../../app/utils/deRequest';

export const getCityList = () => {
  return deRequest(app.get_city_list(), "GET");
}
export const getRegionByCity = (id) => {
  return deRequest(app.get_region_by_city(id), "GET");
}
export const getRegionBySlug = (slug) => {
  return deRequest(app.get_region_by_slug(slug), "GET");
}