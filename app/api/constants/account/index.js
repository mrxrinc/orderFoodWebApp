import {API_URL_ROOT} from '../global';


//Account
// export const login_post= () => API_URL_ROOT+'/user/login';
export const login_post= () => API_URL_ROOT+'/user/login';
export const signUp_post= () => API_URL_ROOT+'/user/register';
export const sendVerifyCode_post= () => API_URL_ROOT+'/user/sendVerifyCode';
export const verify_post= () => API_URL_ROOT+'/user/verify';
export const verifyPass_post= () => API_URL_ROOT+'/api/user/checkExistToken';
export const isVerify_post= () => API_URL_ROOT+'/user/sendVerification';
export const resend_verify_post= () => API_URL_ROOT+'/api/user/resendVerification';
export const logout_get= () => API_URL_ROOT+'/api/user/logout';
export const user_update= (id) => API_URL_ROOT+'/api/user/update/' + id;
export const profileChangePass_post= () => API_URL_ROOT+'/api/user/changePassword/';
export const forgot_post= () => API_URL_ROOT+'/api/user/forgotPassword/';
export const resetPass_post= () => API_URL_ROOT+'/api/user/resetPassword/';

export const city_get= () => API_URL_ROOT+'/business/api/city/list';
export const balance_get= () => API_URL_ROOT+'/payment/api/wallet/balance';
export const walletIncreace_post= () => API_URL_ROOT+'/payment/api/wallet/increase';
export const walletIncreaceGift_post= () => API_URL_ROOT+'/payment/api/wallet/increaseByGiftCode';
export const endIncrease_get= (token) => API_URL_ROOT+'/payment/api/wallet/endIncrease/' + token;
export const listWithTransactions_get= () => API_URL_ROOT+'/payment/api/order/listWithTransactions/';

export const refund_ticket = () => API_URL_ROOT+'/payment/api/order/cancelByUser';
export const get_guest_phone_number = (guestId) => API_URL_ROOT+'/api/user/showPhoneNumber/'+guestId;