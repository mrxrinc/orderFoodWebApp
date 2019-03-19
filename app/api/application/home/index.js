import {app} from '../../constants';
import deRequest from 'src/util/deRequest';

export const homeGet = () => {
  return deRequest(app.home_get(), "GET");
}