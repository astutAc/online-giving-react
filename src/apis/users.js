import axios from  'axios';
// import {authenticationService} from '../services/authenticationService'
 import {requestInterceptor,responseAuthInterceptor} from './axiosIntercepter';


const axiosRequest = axios.create({
    baseURL:process.env.REACT_APP_BASE_URL
});
requestInterceptor(axiosRequest);
responseAuthInterceptor(axiosRequest);

export default axiosRequest;