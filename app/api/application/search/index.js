import {app} from '../../constants';
import deRequest from 'src/util/deRequest';

export const searchResultPost = (params) => { // params: { query }
  return deRequest(app.search_result_post(), "POST", params);
}