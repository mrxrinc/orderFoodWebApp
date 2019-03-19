import {app} from '../../constants';
import deRequest from 'src/util/deRequest';

export const artistList = (take,skip) => {
  return deRequest(app.artist_list(take,skip), "GET" );
}

export const artistDetail = (id) => {
  return deRequest(app.artist_detail(id), "GET" );
}