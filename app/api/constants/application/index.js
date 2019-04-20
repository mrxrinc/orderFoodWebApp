import {API_URL_ROOT} from '../global';

//HOME
// export const home_get= () => API_URL_ROOT+'/application/home/get';

//NEWS LIST
// export const news_list= (take,skip) => API_URL_ROOT+`/application/news/list?take=${take}&skip=${skip}`;
// export const news_detail = (id) => API_URL_ROOT + '/application/news/detail/' + id;

//LOCATION LIST
// export const location_list= (take,skip) => API_URL_ROOT+`/application/location/list?take=${take}&skip=${skip}`;
// export const location_detail = (id) => API_URL_ROOT + '/application/location/detail/' + id;

//Region
export const get_city_list = () => `${API_URL_ROOT}/region/cityList`;
export const get_region_by_city = (id) => `${API_URL_ROOT}/region/byCity?cityId=${id}`;
export const get_region_by_slug = (slug) => `${API_URL_ROOT}/region/bySlug?region_slug=${slug}`;

//RESTAURANT 
export const restaurant_search= (cityId,point,tag) => `${API_URL_ROOT}/restaurant/search?cityId=${cityId}&point=${point}`;
export const restaurant_detail= id => `${API_URL_ROOT}/restaurant/detail?restaurantId=${id}`;
