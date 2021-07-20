import axios from "axios";
import history from '../history';
import {authenticationService} from '../services/authenticationService'
import {urls} from './urls';
import users from './users'


// Add a request interceptor
export const 
requestInterceptor = (instance) =>{
    instance.interceptors.request.use(
        config => {
            const token = authenticationService.getAuthToken();
            if (token) {
                config.headers['Authorization'] = "Bearer " + token
                
            }
            return config;
        },
        error => {
            Promise.reject(error)
    });
        
} 



//Add a response interceptor

export const responseAuthInterceptor = (instance) => {
    instance.interceptors.response.use((response) => {
        return response
     }, function (error) {
        const originalRequest = error.config;
        if (error.response.status === 401 && originalRequest.url.endsWith('/login')) {
            history.push('/login');
            return Promise.reject(error);
        }
     
        if (error.response.status === 401 && !originalRequest._retry) {
     
            originalRequest._retry = true;
            const refreshToken = authenticationService.getRefreshToken();
            return axios.post(urls.base + urls.refreshToken,
                {
                    
                },{
                    headers: {
                        'Content-Type': 'application/json',
                        'refreshToken': refreshToken
                    }
                })
                .then(res => {
                    console.log("refres", res);

                    if (res.status === 200) {

                        //console.log("yaya");
                        authenticationService.setCurrentUserSubject(res.data);
                        //console.log("moveing from yaya");
                        //console.log("new req old", authenticationService.getAccessToken());
                        axios.defaults.headers.common['Authorization'] = authenticationService.getAccessToken();
                        //console.log("new req old", authenticationService.getAccessToken());
                        const retryOrig = new Promise((resolve,reject) => {
                            resolve(users(originalRequest));
                        });
                        return retryOrig;

                        //return axios(originalRequest);
                    } else {
                        authenticationService.logout();
                        const retryOrig = new Promise((resolve,reject) => {
                            resolve(users(originalRequest));
                        });
                        return retryOrig;
                    }
                })
        }
        return Promise.reject(error);
     });
}

