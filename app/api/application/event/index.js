import {app} from '../../constants';
import deRequest from 'src/util/deRequest';

export const eventList = (id) => {
  return deRequest(app.event_list(id), "GET");
}

export const eventArchiveList = (take,skip) => {
  return deRequest(app.event_archive_list(take,skip), "GET");
}

export const eventDetail = (slug) => {
  return deRequest(app.event_detail(slug), "GET");
}

export const eventShow = (id) => {
  return deRequest(app.event_show(id), "GET");
}

export const findTrackingCode = (params) => { //params: { phone_number, tracking_code }
  return deRequest(app.find_tracking_code_post(), "POST", params, false);
}

export const orderGetPdf = (id) => {//useless
  return deRequest(app.order_get_pdf(id), "GET");
}