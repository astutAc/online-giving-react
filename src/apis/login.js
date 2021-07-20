import { toast } from 'react-toastify';
import users from '../apis/users'
import history from '../history';
import { authenticationService } from '../services/authenticationService';
// import 'react-toastify/dist/ReactToastify.css';
import Toaster from '../components/toaster' 
import {messageResponse} from '../enums'
import { roles } from "../enums";
import {renderError} from '../lib/utils/errorSwitch'
function submit(formValues,loader,resendEmailLogin){
  return users.post('/login',formValues)
     .then(function (response) {
       console.log(response);
        if(response.data.status)
        {
          Toaster(toast.success,messageResponse.loginSuccess)
          authenticationService.setCurrentUserSubject(response.data);
          history.push('/admin/dashboard');
        }
        else if(!response.data.status){
          Toaster(toast.error,response.data.error);
          history.push('/login');
        }
      })
     .catch(function (error) {
       console.log("error",error);
      if(error.response===undefined){
        Toaster(toast.error,messageResponse.somethingWentWrong)
       }else{
        renderError(403,error)
       }
    })  
    .finally(function () {
       loader(false)
    });  
}

export default submit;

