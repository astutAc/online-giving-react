import {
    HOME_DATA,
  } from './types';
import {loader} from './index';
import fetchHomeData from '../apis/users';
import {renderError} from '../lib/utils/errorSwitch'
export const fetchHome = () =>async dispatch => {
    try{
      const response = await fetchHomeData.get('/home');
      dispatch({ type: HOME_DATA, payload: response.data });
    }catch(err){
      //renderError(err.response.status,err)
      loader(false);
   }
  };