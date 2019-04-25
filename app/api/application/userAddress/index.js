import {app} from '../../constants';
import deRequest from '../../../../app/utils/deRequest';

export const addNewAddressPost = (params) => {
  return deRequest(app.add_new_address_post(), "POST", params, false );
}