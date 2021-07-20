import { SubmissionError } from 'redux-form'
import history from '../../history';
import {messageResponse} from '../../enums/messageResponse'
import { toast } from 'react-toastify';
// import Toaster from '../../components/toaster'; 
import 'react-toastify/dist/ReactToastify.css';
export const  historyPush=(desc,code)=>{
    return history.push({
        pathname: "/commonError",
        state: { message: desc,errorCode:code },
    });
}
export const  renderError=(code,error)=>{
    switch(code) {
        case 409:
        case 403:
                const apiErrorObj =error.response.data.error;
                console.log('api_error',error.response)
                const objError = apiErrorObj.reduce((errorObj, item) => ({ ...errorObj, [item.fieldName]: item.desc}), {})
                throw new SubmissionError(objError)
            break;
        case 500:
                historyPush(messageResponse.serverError,code)       
            break; 
        case 401:
                history.push('/login');      
            break;     
        case 404:
                historyPush(messageResponse.notFound,code)       
            break;   
        case 405:
                // Toaster(toast.error,messageResponse.notAllowed)
            break;
        default:
                historyPush(messageResponse.somethingWentWrong,code)
      }
}

