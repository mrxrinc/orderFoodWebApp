export const API_URL_ROOT = process.env.APP_URL;
const APP_BASE_CANONICAL_URL = process.env.APP_BASE_CANONICAL_URL;

export const websiteUrl = (relativePath = '') => {
  if (relativePath === '/') {
    relativePath = '';
  }

  return APP_BASE_CANONICAL_URL + relativePath;
};

export const globalHeader = () => {
  console.log("!!!!!",localStorage);
  if (localStorage.authToken) {
    return {            
      'Authorization': `Bearer ${  localStorage.getItem('authToken')}`,
    };
  } 
  return {
    token: 'A8A8FFD0-FF3E-4A20-847C-28CA5CE8A652',
    'Content-Type': 'application/json',
  };
    
};
