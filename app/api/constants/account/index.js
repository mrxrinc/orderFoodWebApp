import {API_URL_ROOT} from '../global';


//Account
// export const login_post= () => API_URL_ROOT+'/user/login';
export const login_post= () => API_URL_ROOT+'/user/login';
export const signUp_post= () => API_URL_ROOT+'/user/register';
export const sendVerifyCode_post= () => API_URL_ROOT+'/user/sendVerifyCode';
export const verify_post= () => API_URL_ROOT+'/user/verifyCode';
export const verifyPass_post= () => API_URL_ROOT+'/api/user/checkExistToken';
export const isVerify_post= () => API_URL_ROOT+'/user/sendVerification';
export const resend_verify_post= () => API_URL_ROOT+'/api/user/resendVerification';
export const logout_get= () => API_URL_ROOT+'/user/logout';
export const user_update= (id) => API_URL_ROOT+'/api/user/update/' + id;
export const forgot_post= () => API_URL_ROOT+'/api/user/forgotPassword/';
export const resetPass_post= () => API_URL_ROOT+'/api/user/resetPassword/';
export const bank_getways_get = () => API_URL_ROOT+'/user/bankGetways';


export const profileChangePass_post= () => API_URL_ROOT+'/user/changePassword';

export const city_get= () => API_URL_ROOT+'/business/api/city/list';
export const balance_get= () => API_URL_ROOT+'/user/current';
export const walletIncreace_post= () => API_URL_ROOT+'/payment/increasePay';
export const walletIncreaceGift_post= () => API_URL_ROOT+'/payment/increaseByGift';
export const endIncrease_get= (token) => API_URL_ROOT+'/payment/api/wallet/endIncrease/' + token;
export const listWithTransactions_get= () => API_URL_ROOT+'/payment/api/order/listWithTransactions/';

export const refund_ticket = () => API_URL_ROOT+'/payment/api/order/cancelByUser';
export const get_guest_phone_number = (guestId) => API_URL_ROOT+'/api/user/showPhoneNumber/'+guestId;
export const getOrderDetail= (orderId) => API_URL_ROOT+'/order/detail/'+orderId;
export const sendGifCode= () => API_URL_ROOT+'/campaign/checkCode';
export const changeBasket= () => API_URL_ROOT+'/order/basket';
export const change_basket_post= () => API_URL_ROOT+'/order/basket';
export const orderitems= (orderId) => API_URL_ROOT+'/order/orderitems/'+orderId;
export const order_review_get= (orderId) => API_URL_ROOT+'/order/toReview?orderId='+orderId;
export const userAddress= () => API_URL_ROOT+'/userAddress';
export const payOrder= () => API_URL_ROOT+'/payment/action';
export const get_profile_details= () => API_URL_ROOT+'/user/current';
export const edit_profile= () => API_URL_ROOT+'/user/update';

