import {
    SIGN_IN,
    PassEye,
    PassEyeRegister,
    ConfirmPassEyeRegister,
    // SIGN_OUT,
     LOADER,
    TOGGLESHOW,
    // MODAL,
    // DATASYNC,
    // ShareModal,
    // COMMENT_PANEL,
     ADMIN_PANEL_TOGGLE,
     ADMIN_PANEL_OFF,
     TOGGLEHIDE,
     TOGGLEFORCESHOW,
    HEADERSHOW,
    ADMIN_PANEL_ON,
    ADMIN_PANEL_ON_CLICK,
    ADMIN_PANEL_FORCE_OFF,
    // CHANGE_PASSWORD_TOGGLE,
    // LOGIN_TOGGLE,
    // UPDATE_PASSWORD_TOGGLE,
    // REGISTRATION_TOGGLE,
    // RESEND_EMAIL_LINK,
    // MESSAGE_EMAIL_VERIFICATION
  } from "./types";

//   export {fetchPmp} from './fetchPmp';
//   export {fetchPmpPublic} from './fetchPmp';
//   export {fetchProfile} from './fetchProfile';
//   export {fetchComment,pushComment,deleteComment,updateComment} from './fetchComment';
   export {fetchHome} from './fetchHome';
//   export {errorHandling} from './errorHandling';
//   export {courseUpSell,toolTutorialPublic} from './learnFromAlanPopup';
//   export {ravingFansVideo} from './ravingFansVideo';
//   export {fetchShareUsers, deleteShareUser, userAdded} from './share';
    export { fetchAllUsers, putAllUsers } from './allUsers';
//   export { publicLinkToggle, publicLinkCreate, publicLinkCopy } from './publicShare';
//   export { fetchSections, updateSections } from './pmpSections';
//   export { controlInput } from './controlInput';  
//   export {permissionChange} from './permissionChange';
//   export {sharedFansVideo,sharedFansVideoClose} from './sharedFansVideo'
  export const signIn = userId => {
    return {
      type: SIGN_IN,
      payload: userId
    };
  };
  export const pass_eye = (value) => {
    return { type:PassEye,payload:value }; 
  };
  export const pass_eye_register = (value) => {
    return { type:PassEyeRegister,payload:value }; 
  };
  export const confirm_pass_eye_register = (value) => {
    return { type:ConfirmPassEyeRegister,payload:value }; 
  };
//   export const signOut = () => {
//     return {
//       type: SIGN_OUT
//     };
//   };
  
  export const loader = (value) => {
    return { type:LOADER,payload:value }; 
  };
  
  export const toggleShow = (value) => {
    return { type:TOGGLESHOW,payload:value }; 
  };
  
  
//   export const changePasswordToggle = (value) => {
//     console.log("value",value)
//     return { type:CHANGE_PASSWORD_TOGGLE,payload:value }; 
//   };
  
//   export const loginToggle = (value) => {
//     return { type:LOGIN_TOGGLE,payload:value }; 
//   };
//   export const updatePasswordToggle = (value) => {
//     return { type:UPDATE_PASSWORD_TOGGLE,payload:value }; 
//   };
//   export const registrationToggle = (value) => {
//     return { type:REGISTRATION_TOGGLE,payload:value }; 
//   };
  export const headerShow = (value) => {
    console.log("headerShow",headerShow);
    return { type:HEADERSHOW,payload:value }; 
  };
  
  export const toggleHide = (value) => {
    return { type: TOGGLEHIDE, payload: value };
  };
  
  export const toggleForceShow = (value) => {
    return { type: TOGGLEFORCESHOW, payload: value };
  };
//   // export const popUp = (value) => {
//   //   return { type:MODAL,payload:value }; 
//   // };
  
//   export const syncModalData = (value) => {
//     return { type:DATASYNC,payload:value }; 
//   };
  
//   export const sharePopUp = (value) => {
//     return { type:ShareModal,payload:value }; 
//   };
  
//   export const commentRightSideBar = (value) => {
//     return { type:COMMENT_PANEL,payload:value }; 
//   };
  
  export const adminPanelRightSideBar = (value) => {
    return { type: ADMIN_PANEL_TOGGLE, payload: value };
  };
  
  
  export const adminPanelRightSideBarOff = (value) => {
    return { type: ADMIN_PANEL_OFF, payload: value };
  };
  
  export const adminPanelRightSideBarForceOff = (value) => {
    return { type: ADMIN_PANEL_FORCE_OFF, payload: value };
  };
  
  export const adminPanelRightSideBarON = (value) => {
    return { type: ADMIN_PANEL_ON, payload: value };
  };
  
  export const adminPanelRightSideBarONClick = (value) => {
    return { type: ADMIN_PANEL_ON_CLICK, payload: value };
  };
  
//   export const resendEmailLogin = (value) => {
//     return { type: RESEND_EMAIL_LINK, payload: value };
//   };
  
//   export const messageEmailVerification = (value) => {
//     return { type: MESSAGE_EMAIL_VERIFICATION, payload: value };
//   };
  