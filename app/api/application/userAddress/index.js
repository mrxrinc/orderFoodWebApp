import {app} from '../../constants';
import deRequest from '../../../../app/utils/deRequest';

export const addNewAddressPost = (params) => {
  return deRequest(app.add_new_address_post(), "POST", params, false );
}

export const userAddressList = (id) => {
  return deRequest(app.user_address_list(id), "get");
}

export const userUpdateAddressPost = (params) => {
  return deRequest(app.user_update_address_post(params), "PUT", params, false);
}
export const userOrgUpdateAddressPost = (params) => {
  return deRequest(app.user_org_update_address_post(params), "PUT", params, false);
}

export const userDeleteAddressPost = (params) => {
  return deRequest(app.user_delete_address_post(params), "POST", params, false);
}