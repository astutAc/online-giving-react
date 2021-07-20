import {
  PassEye,
  LOADER,
  PassEyeRegister,
  ConfirmPassEyeRegister,
} from "../actions/types";


export default (state = { eye: false }, action) => {
    //console.log(action.payload);
    switch (action.type) {
      case PassEye:
        return { ...state, eye: action.payload };
        case LOADER:
          return { ...state, loader: action.payload }; 
        case PassEyeRegister: 
          return { ...state, reg_eye: action.payload };
        case ConfirmPassEyeRegister: 
          return { ...state, con_reg_eye: action.payload }; 
          
        default:
        return state;
    }
  }
