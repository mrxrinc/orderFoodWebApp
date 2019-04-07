import axios from 'axios';
import { globalHeader } from '../api/constants/global';
import { addToast } from '../actions/Notifications';
import { logOutUser } from '../actions/Auth';
import { show404 } from '../actions/notFound';
import { configureStore } from '../store';
const deRequest = (url, method = 'GET', params = {},handleError=true) => {
    return new Promise((resolve, reject) => {
        let axiosConfig = {
            url: url,
            timeout: 30000,
            headers: globalHeader(), // global authentication headers, required for all requests...
            method: method.toUpperCase(), // HTTP method
        };
        if (axiosConfig.method === 'GET') {
            // params is only for GET requests.
            // we should use `data`  key in other HTTP methods
            axiosConfig['params'] = params;
        } else {
            axiosConfig['data'] = params;
        }

        axios(axiosConfig).then(res => {
            resolve(res.data);
        }).catch(error => {
            if(typeof error.response === "undefined"){
                configureStore.dispatch(addToast({
                    text: "لطفا اتصال اینترنت را بررسی کنید.",
                    color: "danger"
                }));
            }
            if(!handleError){
                reject(error.response);
                return true;
            }
            let errors = [];
            const defaultErrorMessage = 'بروز خطا! لطفا مجددا تلاش کنید';
            if (error.hasOwnProperty('response') && error.response) {
                if (error.response.hasOwnProperty('status')) {
                    switch (error.response.status) {
                        case 422:
                            if (error.response.hasOwnProperty('data')) {
                                let data = error.response.data;
                                if (data.hasOwnProperty('errors')) {
                                    let validationErrors = data.errors;
                                    for (let fieldName in validationErrors) {
                                        validationErrors[fieldName].forEach((m) => {
                                            errors.push(m.trim());
                                        });
                                    }
                                }
                            }
                            break;
                        case 403:
                            errors.push('امکان دسترسی شما به این عملکرد وجود ندارد');
                            break;
                        case 401:
                            configureStore.dispatch(logOutUser());
                            errors.push('لطفا مجددا وارد شوید');
                            break;
                        case 404:
                            configureStore.dispatch(show404());
                            break;
                        default:
                            errors.push(defaultErrorMessage);
                            break;
                    }
                } else {
                    errors.push(defaultErrorMessage);
                }
            } else {
                errors.push(defaultErrorMessage);
            }

            for (let i = 0; i < errors.length; i++) {
                configureStore.dispatch(addToast({
                    text: errors[i],
                    color: "danger"
                }));
            }
            reject(error);
        });
    });
};
export default deRequest;