import {API_URL_ROOT} from '../global';

//HOME
export const home_get= () => API_URL_ROOT+'/application/home/get';

//NEWS LIST
export const news_list= (take,skip) => API_URL_ROOT+`/application/news/list?take=${take}&skip=${skip}`;
export const news_detail = (id) => API_URL_ROOT + '/application/news/detail/' + id;

//LOCATION LIST
export const location_list= (take,skip) => API_URL_ROOT+`/application/location/list?take=${take}&skip=${skip}`;
export const location_detail = (id) => API_URL_ROOT + '/application/location/detail/' + id;


//ARTIST
export const artist_list= (take,skip) => API_URL_ROOT+`/application/artist/list?take=${take}&skip=${skip}`;
export const artist_detail = (id) => API_URL_ROOT + '/application/artist/detail/' + id;

// EVENT
export const event_detail= (slug) => API_URL_ROOT+'/application/event/detail/'+ slug;
export const event_show= (id) => API_URL_ROOT+'/business/api/event/show/'+ id;
export const event_list_conferences= () => API_URL_ROOT+'/application/event/list/conferences';
export const event_list_kids= () => API_URL_ROOT+'/application/event/list/kids';
export const event_list_funs= () => API_URL_ROOT+'/application/event/list/funs';
export const event_list_concerts= () => API_URL_ROOT+'/application/event/list/concerts';
export const event_list_theaters= () => API_URL_ROOT+'/application/event/list/theaters';
export const event_list= (id) => API_URL_ROOT+'/application/event/list/'+ id;
export const event_archive_list= (take,skip) => API_URL_ROOT+`/application/event/archive?take=${take}&skip=${skip}`;

//Search
export const search_result_post = () => API_URL_ROOT+'/application/elastic/search';



//VENUE CHECKOUT
export const ticket_reserve = (id) => API_URL_ROOT+`/business/api/ticket/reserve/${id}`;
export const ticket_cancel = (id) => API_URL_ROOT+`/business/api/ticket/cancel/${id}`;
export const ticket_show_tickets_reserved_for_user = (user_id) => API_URL_ROOT+`/business/api/ticket/showTicketsReservedForUser/${user_id}`;
export const ticket_show_tickets_by_showtime = (showtime_id,zone_id) => API_URL_ROOT+`/business/api/ticket/showByShowtime/${showtime_id}/${zone_id}`;
export const zone_show = (id) => API_URL_ROOT + '/business/api/zone/show/' + id;
//ORDER
export const order_begin = () => API_URL_ROOT+`/payment/api/order/begin`;
export const order_end = (id) => API_URL_ROOT+`/payment/api/order/end/${id}`;
export const showtime_show_details= (id) => API_URL_ROOT+`/business/api/showtime/showDetails/${id}`;
export const get_user_ticket = (showtime_id, reserve_token) => API_URL_ROOT + `/business/api/ticket/showtime/${showtime_id}/reserveToken/${reserve_token}`;
export const find_tracking_code_post = () => API_URL_ROOT+'/payment/api/order/findByTrackingCode';
export const order_get_pdf = (id) => API_URL_ROOT+'/payment/api/order/getPdf/'+ id;


export const init_reserve_token = () => API_URL_ROOT+`/business/api/ticket/initReserveToken`;
export const capacity_ticket_reserve = () => API_URL_ROOT+`/business/api/ticket/reserveCapacity`;
export const capacity_ticket_cancel = () => API_URL_ROOT+`/business/api/ticket/cancelCapacity`;
export const get_wallet_amount = () => API_URL_ROOT+`/payment/api/wallet/balance`;
export const gateway_list= () => API_URL_ROOT+`/payment/api/gateway/list`;