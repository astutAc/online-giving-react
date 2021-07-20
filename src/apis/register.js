import { toast } from 'react-toastify';
import users from '../apis/users'
import history from '../history';
import 'react-toastify/dist/ReactToastify.css';
import Toaster from '../components/toaster'
import {messageResponse} from '../enums'
import {renderError} from '../lib/utils/errorSwitch'

function submit(formValues,loader)
{
    return users.post('/signup',formValues)
     .then(function (response) {
       // handle success
       console.log(response);
       return false;
       Toaster(toast.success,messageResponse.accountCreated)
        history.push('/login');
    })
     .catch(function (error) {
       if(error.response===undefined){
          Toaster(toast.error,messageResponse.somethingWentWrong)
       }else{
          renderError(error.response.status,error)
       }
    })  
     .finally(function () {
        // loader(false)
      });  

}
export default submit;