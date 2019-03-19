import {app} from '../../constants';
import deRequest from 'src/util/deRequest';

export const locationList = (take,skip) => {
  return deRequest(app.location_list(take,skip), "GET");
}
export const locationDetail = (id) => {
  return deRequest(app.location_detail(id), "GET");
}