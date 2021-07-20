import React from 'react';
import AdminPanelLeft from './adminLeftSide';
import AllUsers from './allUsers';
import { authenticationService } from '../../services/authenticationService';
import { roles } from '../../enums';

class AdminPanel extends React.Component {
    onSubmit = formValues => {
    };
    render() {
    //  let pdfMode=window.location.search;
    return (
    <div className="wrapper">
      { authenticationService.isLoggedIn() && authenticationService.isRole(roles.admin) &&
      
        <AdminPanelLeft />}
      
      {/* <AdminPanelRight /> */}
    </div>
    );
  }
}

export default (AdminPanel);