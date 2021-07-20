import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import authReducer from './authReducer.js';
import toggleReducer from './toggleReducer';
import togglebarReducer from './togglebarReducer';
// import homePageReducer from './homePageReducer';
// import pmpPageReducer from './pmpPageReducer';
// // import popUpReducer from './popUpReducer';
// import errorReducer from './errorReducer';
// import courseUpSellReducer from './courseUpSell';
// import sharePopUpReducer from './sharePopUpReducer';
// import shareReducer from './shareReducer';
import allUserReducer from './allUsers';
// import fetchCommentReducer from './fetchCommentReducer';
// import commentRightSideReducer from './commentRightSide';
// import profileReducer from './profileReducer';
// import historyReducer from './historyReducer';
// import pmpSectionsReducer from './pmpSectionsReducer';
import adminPanelToggleReducer from './adminPanelToggle';
// import  eyetoggleReducer from './eyetoggleReducer';
// import  verificationEmailLink from './loginEmailVerificationNotice';
// import  verificationNotice from './verificationNotice';
// import videoSharedReducer from './sharedVideoReducer'
// import shareformReducer from './formReducer'
export default combineReducers({
  // auth: authReducer,
  form: formReducer,
  toggle:toggleReducer,
  togglebar:togglebarReducer,
  // homeData:homePageReducer,
  // pmpPageData:pmpPageReducer,
  // // popUpData:popUpReducer,
  // error:errorReducer,
  // learnFromAlan:courseUpSellReducer,
  // sharePopUpData: sharePopUpReducer,
  // shareData: shareReducer,
  allUserData: allUserReducer,
  // fetchComment:fetchCommentReducer,
  // commentRightSide:commentRightSideReducer,
  // profileData:profileReducer,
  // historyData: historyReducer,
  // pmpSectionsData: pmpSectionsReducer,
  adminPanelToggle: adminPanelToggleReducer,
  // eyeToggleValue:eyetoggleReducer,
  // verificationEmailLinkValue:verificationEmailLink,
  // verificationNoticeValue:verificationNotice,
  // videoSharedReducerValue:videoSharedReducer
  // shareFormClearReducer:shareformReducer

});
