export const API_URL_ROOT = process.env.APP_URL;
const APP_BASE_CANONICAL_URL = process.env.APP_BASE_CANONICAL_URL;

export const websiteUrl = (relativePath = '') => {
  if (relativePath === '/') {
    relativePath = '';
  }

  return APP_BASE_CANONICAL_URL + relativePath;
};


export const get_app_init = () => `${API_URL_ROOT}/general/appInit`

export const globalHeader = () => {
  return {
    token: localStorage.getItem('token')?localStorage.getItem('token'):null,
    'Content-Type': 'application/json',
  };
};
