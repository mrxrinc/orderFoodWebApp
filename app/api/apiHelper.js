// APIHelper.js
import axios from 'axios';
import {
    API_ALLMOVIES,
    API_GENERAL_HEADERS,
    API_SHOWTIMES_CINEMA_MOVIE,
    API_MOVIE_DETAIL,
    API_ALL_CINEMA_SHOW_A_MOVIE,
    API_ALL_SANSE_OF_A_MOVIE_IN_A_CINEMA,
    API_SIGNIN_USER,
    API_USER_SIGNUP,
    API_USER_AUTH_CHECK
} from '../constants/ApiUrl';

export const apiHelperGet = {

    apiUserAuthCheck: (callback) => {
        axios.get(API_USER_AUTH_CHECK(), {
                headers: API_GENERAL_HEADERS
            })
            .then(response => {
                callback(response);
            }).catch(error => {
                console.log(error);
            });
    },

    apiUserSignup: (callback, {
        email,
        password,
        phone,
        fullname
    }) => {
        axios.post(API_USER_SIGNUP(), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json, text/plain'
                },
                email,
                password,
                phone,
                fullname
            })
            .then(response => {
                callback(response.data);
            }).catch(error => {
                console.log(error);
            });
    },


    
    apiUserLogin: ({
        email,
        password
    }) => {
        return new Promise ((resolve,reject)=>{
            axios.post(API_SIGNIN_USER(), {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json, text/plain'
                    },
                    email,
                    password
                })
                .then(response => {
                    resolve(response.data);
                }).catch(error => {
                    console.log(error);
                    // reject(error);
                });
        })
    },



    apiAllMovies: (callback) => {
        axios.get(API_ALLMOVIES, {
                headers: API_GENERAL_HEADERS
            })
            .then(response => {
                callback(response.data.data);
            }).catch(error => {
                console.log(error);
            });
    },

    apiShowTimeCinemaMovie: (callback) => {
        axios.get(API_SHOWTIMES_CINEMA_MOVIE(1000, 1499), {
                headers: API_GENERAL_HEADERS
            })
            .then(response => {
                callback(response.data.data);
            }).catch(error => {
                console.log(error);
            });
    },

    apiMovieDetail: (callback, params) => {
        axios.get(API_MOVIE_DETAIL(params.id), {
                headers: API_GENERAL_HEADERS
            })
            .then(response => {
                callback(response.data.data);
            }).catch(error => {
                console.log(error);
            });
    },

    apiAllACinemaShowAMovie: (callback, params) => {
        axios.get(API_ALL_CINEMA_SHOW_A_MOVIE(params.id), {
                headers: API_GENERAL_HEADERS
            })
            .then(response => {
                callback(response.data.data);
            }).catch(error => {
                console.log(error);
            });
    },

    apiAllSanseOfAMovieInACinema: (callback, params) => {
        axios.get(API_ALL_SANSE_OF_A_MOVIE_IN_A_CINEMA(params.cinemaId, params.movieId), {
                headers: API_GENERAL_HEADERS
            })
            .then(response => {
                callback(response.data.data);
            }).catch(error => {
                console.log(error);
            });
    },

}