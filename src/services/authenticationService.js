import { BehaviorSubject } from 'rxjs';
import jwtDecode  from 'jwt-decode';
import jsrsasign from 'jsrsasign';
import history from '../history';
const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('userData')));
export const authenticationService = {
    setCurrentUserSubject,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value },
    isLoggedIn,
    getUser,
    isRole,
    getAuthToken,
    getRefreshToken,
    getAccessToken
};

function isLoggedIn(){
    return (currentUserSubject.value) ? true : false;
}

function getUser(){
    if(currentUserSubject.value){
        var user = currentUserSubject.value.user;
        return user;
    }
    return null;
}

function getAccessToken() {
    if(currentUserSubject.value){
        var token = currentUserSubject.value.user.api_token;
        return token;
    }
    return null;
}
function getAuthToken() {
    if(currentUserSubject.value){
        var sJWT = currentUserSubject.value.user.api_token;
        return sJWT;
    }
    return null;
}
function getRefreshToken() {
    if (currentUserSubject.value) {
        var sJWT = currentUserSubject.value.response.refreshToken;
        return sJWT;
    }
    return null;
}

function isRole(role) {
    //console.log("role",authenticationService.getUser())
    return (role.includes(authenticationService.getUser().role)) ? true : false;
}


function setCurrentUserSubject(user) {
    const jsonST = JSON.stringify(user);
    //console.log("jso");
    localStorage.setItem("userData", jsonST);
    //console.log("local set");
    currentUserSubject.next(user);
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("userData");
    currentUserSubject.next(null);
    history.push('/login')
    
}