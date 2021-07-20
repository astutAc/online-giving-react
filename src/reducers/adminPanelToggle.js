import {
  ADMIN_PANEL_TOGGLE,
  ADMIN_PANEL_OFF,
  ADMIN_PANEL_ON,
  ADMIN_PANEL_ON_CLICK,
  ADMIN_PANEL_FORCE_OFF,
} from "../actions/types";

export default (state = { openPanel: false, headerMenu : false}, action) => {
  switch (action.type) {
    case ADMIN_PANEL_TOGGLE:
      //console.log("adminpanel called for toggle state", state);
      return {
        ...state,
        openPanel: action.payload ? action.payload : !state.openPanel,
      };
    case ADMIN_PANEL_OFF:
      //console.log("admin panel called for off", state);
      //console.log("state", state);
      if (state.headerMenu) {
        return {
          ...state,
          headerMenu: false,
        };
      } else {
        return { ...state, openPanel: false };
      }

    case ADMIN_PANEL_FORCE_OFF:
      //console.log("force off", state);
      return { ...state, openPanel: false, headerMenu:false };

    case ADMIN_PANEL_ON:
      if (state.openPanel == true) {
        action.payload.openPanel = false;
      }
      //action.payload.openPanel = !action.payload.openPanel;
      return { ...state, ...action.payload };
    case ADMIN_PANEL_ON_CLICK:
      //console.log("admin panel on click", state);
      //action.payload.openPanel = !action.payload.openPanel;
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
