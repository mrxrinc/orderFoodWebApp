import {app} from '../../constants';
import deRequest from '../../../../app/utils/deRequest';

export const paymentsList = () => deRequest(app.payments_list(), 'GET');

