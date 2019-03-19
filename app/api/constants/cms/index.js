import {API_URL_ROOT} from '../global';

// USER COMMENTS
export const comment_create= () => API_URL_ROOT+'/cms/api/comment/create';
export const comment_search= () => API_URL_ROOT+'/cms/api/comment/search';
export const get_menu= () => API_URL_ROOT+'/cms/api/category/list';