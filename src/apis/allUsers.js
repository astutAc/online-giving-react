import { SubmissionError } from 'redux-form'
import { toast } from 'react-toastify';
import users from './users';
import 'react-toastify/dist/ReactToastify.css';
import Toaster from '../components/toaster'; 
import {messageResponse} from '../enums';
import {renderError} from '../lib/utils/errorSwitch';

export function submitPost(formValues,userAdded,loader){

    return users.post('/shareOnePmp',formValues)
     .then(function (response) {
       if(response.data.success && response.data.response){
          Toaster(toast.success,messageResponse.addedShareUser);
          userAdded(response.data.response);
        }
      })
     .catch(function (error) {
      if(error.response===undefined){
        Toaster(toast.error,messageResponse.somethingWentWrong)
       }else{
        renderError(error.response.status,error)
       }
    })  
     .finally(function () {
        loader(false)
      });  
  }


export function fetchUsers(query,limit,offset,sortModel,loader){
  const sortFieldName = (sortModel && sortModel.length > 0)? sortModel[0].colId : '';
  const sortOrder = (sortModel && sortModel.length > 0)? sortModel[0].sort : '';
 
  return users.get('/admin/users'
  ,{
    headers:{
          'limit': limit,
          'offset': offset,
          query:query,
          sortFieldName: sortFieldName,
          sortOrder: sortOrder
      }
    }).then((response) => {
    
    if(response.data.status && response.data.users){
      var data = response.data;
      console.log(data)
      return data;
    }
    
  }).catch((error) => {
    if(error.response===undefined){
      Toaster(toast.error,messageResponse.somethingWentWrong)
     }else{
      renderError(error.response.status,error)
     }
     return [];
  }).finally(() => {
    loader(false);
  })
}


export function putUsers(user,loader){
  return users.put('/admin/users',user).then((response) => {
    if(response.data.success && response.data.response){
      Toaster(toast.success,messageResponse.dataSaved)
      var users = response.data.response;
      return users;
    }
    return null;
  }).catch((error) => {
    // return [];
    if(error.response===undefined){
      Toaster(toast.error,messageResponse.somethingWentWrong)
     }else{
      renderError(error.response.status,error)
     }
     return null;
  }).finally(() => {
    loader(false);
  })
}




