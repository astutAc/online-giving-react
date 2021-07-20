import {
    LOADER,
    TOGGLESHOW,
    TOGGLEHIDE,
    TOGGLEFORCESHOW,
    HEADERSHOW
  } from "../actions/types";
  
  
  export default (state = { loader: false, show: true, header:false }, action) => {
      //console.log(action.payload);
      switch (action.type) {
        case LOADER:
          return { ...state, loader: action.payload };
        case TOGGLESHOW:
            return {
              ...state,
              show:
                action.payload
                  ? action.payload
                  : !state.show,
            };
        case TOGGLEHIDE:
          //console.log("state",state)
          if(state.header){
            return {
              ...state,
              header:false
            };
          }else{
            return { ...state, show: true };
          }
        
        case TOGGLEFORCESHOW:
          return { ...state, show: false };
        case HEADERSHOW:
            return {...state,...action.payload};
        default:
          return state;
      }
    }
  