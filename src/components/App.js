import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './privateRoute';
import  AdminPanel  from './admin/admin';
import Login from './login';
import {roles} from '../enums';
import Register from './register';
import AllUsers from './admin/allUsers';
import history from '../history';
const App = () => {
  return (
    <div className="ui container-fluid p-0 heightFull">
      <Router history={history}>
        <div className="heightFull">
        <AdminPanel exact component={AdminPanel} role={[roles.admin]} />
        <ToastContainer />
        {/* <Loader/> */}
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            {/* <PrivateRoute path="/admin/dashboard" exact component={AdminDashboard} role={[roles.admin]} /> */}
            <PrivateRoute path="/admin/allusers" exact component={AllUsers} role={[roles.admin]} />
         </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
