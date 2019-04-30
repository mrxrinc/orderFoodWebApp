import { account } from '../constants';
import deRequest from '../../utils/deRequest';
import axios from 'axios';

export const loginPost = (params) => { //params: { identifier, password }
  return deRequest(account.login_post(), 'POST', params);
}

export const signUpPost = (params) => { //params: { fullname, phone_number, email, password }
  return deRequest(account.signUp_post(), "POST", params, false );
}

export const sendVerifyCodePost = (params) => {
  //params: { fullname, mobileNumber, email }
  return deRequest(account.sendVerifyCode_post(), "POST", params, false );
}

export const getDataAfterPayment = (params) => {
  return deRequest(account.getOrderDetail(), "GET", params, false );
}

export const getSendGifCode = (params) => {
  return deRequest(account.sendGifCode(), "GET", params, false );
}

export const putChangeBasket = (params) => {
  return deRequest(account.changeBasket(), "PUT", params, false );
}

export const getOrderitems = (params) => {
  return deRequest(account.orderitems(params.orderId), "GET");
}

export const profileChangePass = (params) => { //params: { password }
  return deRequest(account.profileChangePass_post(), "POST", params, false );
}

export const resetPass = (params) => { //params: { password, token }
  return deRequest(account.resetPass_post(), "POST", params, false );
}

export const walletIncreace = (params) => { //params: { amount, gateway_id, redirect_url }
  return deRequest(account.walletIncreace_post(), "POST", params, false );
}

export const walletIncreaceGift = (params) => { //params: { gift_code }
  return deRequest(account.walletIncreaceGift_post(), "POST", params, false );
}


export const forGotPost = (params) => { //params: { identifier }
  return deRequest(account.forgot_post(), "POST", params, false );
}

export const verifyPassPost = (params) => { //params: {  token,token_user,user_id }
  return deRequest(account.verifyPass_post(), "POST", params, false );
}

export const verifyPost = (params) => { //params: {  phone_number,token_user,user_id }
  return deRequest(account.verify_post(), "POST", params, false );
}

export const isVerifyPost = (params) => { //params: {   phone_number,user_id, }
  return deRequest(account.isVerify_post(), "POST", params, false );
}

export const resendVerifyPost = (params) => { //params: { phone_number,user_id }
  return deRequest(account.resend_verify_post(), "POST", params, false );
}

export const logOutGet = () => {
  return deRequest(account.logout_get(), "GET", {}, false );
}

export const endIncrease = (token) => {
  return deRequest(account.endIncrease_get(token), "GET", {}, false );
}

export const cityGet = () => {
  return deRequest(account.city_get(), "GET");
}

export const balanceGet = () => {
  return deRequest(account.balance_get(), "GET" );
}

export const listWithTransactions = () => {
  return deRequest(account.listWithTransactions_get(), "GET" );
}


export const userUpdate = ({
  _id,
  fullname,
  email,
  phone_number,
  city_id,
  gender,
  sheba_number
}) => {
  return deRequest(account.user_update(_id), "POST", {
    fullname,
    email,
    phone_number,
    city_id,
    gender,
    sheba_number
  }, false );
}

export const refundTicket = (params) => {
  return deRequest(account.refund_ticket(), "POST", params );
}

export const getGuestPhoneNumber = (params) => {
  return deRequest(account.get_guest_phone_number(params.guestId), "GET")
}
