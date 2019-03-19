import {app} from '../../constants';
import deRequest from 'src/util/deRequest';

export const orderBegin= (params={}) => {
    return deRequest(app.order_begin(), "POST", params);
}
export const orderEnd= (params={}) => {
    return deRequest(app.order_end(params.token), "GET");
}
export const showtimeDetails= (params={}) =>{
    return deRequest(app.showtime_show_details(params.id), "GET", params.reserve_token?{ reserve_token: params.reserve_token }:{});
}
export const getUserTicket= (params={}) =>{
    return deRequest(app.get_user_ticket(params.showtime_id, params.reserve_token), "GET");
}
export const initReserveToken= (params={}) => {
    return deRequest(app.init_reserve_token(params.reserve_token), "POST", params);
}
export const capacityTicketReserve= (params={}) => {
    return deRequest(app.capacity_ticket_reserve(), "POST", params);
}
export const capacityTicketCancel= (params={}) => {
    return deRequest(app.capacity_ticket_cancel(), "POST", params);
}
export const getWalletAmount= () => {
    return deRequest(app.get_wallet_amount(), "GET");
}
export const getGatewayList= () =>{
    return deRequest(app.gateway_list(), "GET");
}