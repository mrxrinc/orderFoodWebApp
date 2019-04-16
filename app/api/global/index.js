import {global} from '../constants';
import deRequest from '../../../app/utils/deRequest';

export const getAppInit = () => {
  return deRequest(global.get_app_init(),
   "POST",
   {
    "platform":"android",
    "build":1,
    "device_id":"android",
    "device": "iTesty",
    "c_version": 1
   
   },
   false);
}
