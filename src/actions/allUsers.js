import {
    ALL_USERS_FETCH,
    ALL_USERS_PUT
  } from './types';
import {fetchUsers,putUsers} from '../apis/allUsers';

export const fetchAllUsers = (query,limit,offset,sortModel,loader) =>async dispatch => {
    const response = await fetchUsers(query,limit,offset,sortModel,loader);
    dispatch({ type: ALL_USERS_FETCH, payload: response });
    
};


export const putAllUsers = (user,loader) => async dispatch => {
  const response = await putUsers(user,loader);
  dispatch({type: ALL_USERS_PUT, payload: response});
}

// export const deleteShareUser = (userId,masterId,loader) => async dispatch => {
//   const response = await deleteUser(userId,masterId,loader);
//   dispatch({ type: ShareUserDelete, payload: userId});
// }

// export const userAdded = (user) => async dispatch => {
//   dispatch({type: ShareUserAdded, payload: user});
// }