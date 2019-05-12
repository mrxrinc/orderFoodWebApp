import {app} from '../../constants';
import deRequest from '../../../../app/utils/deRequest';

export const userOrder = () => deRequest(app.user_order(), 'GET');

