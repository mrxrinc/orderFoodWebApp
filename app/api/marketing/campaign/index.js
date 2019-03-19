import {marketing} from '../../constants';
import deRequest from 'src/util/deRequest';

export const validateGiftCode = (params={}) =>{
    return deRequest(marketing.validate_gift_code(), "POST", params);
}