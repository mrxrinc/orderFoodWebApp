import {cms} from '../../constants';
import deRequest from 'src/util/deRequest';


export const getMenu = () => {
  return deRequest(cms.get_menu(), "GET");
}
export const commentSearch = (params) => { // params: { type, identifier}
  return deRequest(cms.comment_search(), "POST", params);
}

export const commentCreate = (params) => { // params: { model, user_id, slug, body }
  return deRequest(cms.comment_create(), "POST", params, false);
}