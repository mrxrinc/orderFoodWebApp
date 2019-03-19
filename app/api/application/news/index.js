import {app} from '../../constants';
import deRequest from 'src/util/deRequest';

export const newsList = (take,skip) => {
  return deRequest(app.news_list(take,skip), "GET");
}

export const newsDetail = (id) => {
  return deRequest(app.news_detail(id), "GET");
}