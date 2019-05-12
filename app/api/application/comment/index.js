import {app} from '../../constants';
import deRequest from '../../../../app/utils/deRequest';

export const commentForRestaurant = id => deRequest(app.comment_for_Restaurant(id), 'GET');
export const commentByUser = () => deRequest(app.comment_by_user(), 'GET');
export const addComment = (params) => deRequest(app.add_comment_post(params), 'POST' ,params, false);

export const getUser = () => deRequest(app.get_user(), 'GET');

