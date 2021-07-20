import React, { useState } from 'react';
import { connect } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';
import _ from "lodash";
import { Link } from 'react-router-dom';
import history from '../history';
import { authenticationService } from '../services/authenticationService';
import ButtonCreatePmp from './buttonCreatePmp';
import {
  fetchHome,
  adminPanelRightSideBar,
  toggleShow,
  toggleForceShow,
  toggleHide,
  headerShow,
  adminPanelRightSideBarON,
  adminPanelRightSideBarONClick,
  adminPanelRightSideBarForceOff
} from "../actions";
import { roles } from "../enums";

// import Loader from './loader';

  
class Header extends React.Component {
  toggleOpen() {
    //this.props.adminPanelRightSideBar();
    this.props.adminPanelRightSideBarON({ openPanel: true, headerMenu: true });
  }

  closeNavbar() {
    console.log("close called");
    this.props.adminPanelRightSideBarForceOff();
  }

  toggleAdminPanel() {
    this.closeNavbar();
    this.props.toggleHide();
   
  }

  componentDidMount() {
    //this.props.fetchHome();
  }

  completeLogout() {
    this.closeNavbar();
    authenticationService.logout();
  }

  keepAdminOpen() {
    this.props.adminPanelRightSideBarONClick({
      //openPanel: true,
      headerMenu: true,
    });
  }

  render() {
    const imageUrlContact = authenticationService.isLoggedIn()
      ? "../assets/images/email.png"
      : "../assets/images/email-white.png";

    return (
      <div className="navBar">
        <Navbar color="transparent" light expand="lg" className="navbar-dark">
          <NavbarBrand className="pointer" onClick={() => history.push("/")}>
            {/* <img src="../assets/images/logo.png" alt="Successwise" /> */}
          </NavbarBrand>
          <NavbarToggler onClick={() => this.toggleOpen()} />
          <Collapse isOpen={this.props.adminPanelToggleVal} navbar>
            <Nav
              className={`ml-auto ${
                this.props.headerTextColor ? "homeheader" : "notHome"
              }`}
              navbar
            >
              {authenticationService.isLoggedIn() && (
                <NavItem>
                  <NavLink>
                    <Link onClick={() => this.closeNavbar()} to="/" title="Home" className="item">
                      <i className="fa fa-home"></i>
                      <span>Home</span>
                    </Link>
                  </NavLink>
                </NavItem>
              )}
              {!authenticationService.isLoggedIn() && (
                <NavItem>
                  <NavLink>
                    <Link
                      onClick={() => this.closeNavbar()}
                      to="/login"
                      className="item"
                    >
                      <img
                        src="../assets/images/login-white.png"
                        alt="Login"
                        title="Login"
                      />
                      <span>Login</span>
                    </Link>
                  </NavLink>
                </NavItem>
              )}
              {!authenticationService.isLoggedIn() && (
                <NavItem>
                  <NavLink>
                    <Link
                      onClick={() => this.closeNavbar()}
                      to="/register"
                      className="item"
                    >
                      <img
                        src="../assets/images/register-white.png"
                        alt="Register"
                        title="Register"
                      />
                      <span>Register</span>
                    </Link>
                  </NavLink>
                </NavItem>
              )}
              {/* {authenticationService.isLoggedIn() && (
                <NavItem>
                  <NavLink>
                    <Link
                      onClick={() => this.closeNavbar()}
                      to="/"
                      className="item"
                    >
                      <img
                        src="../assets/images/history.png"
                        alt="History"
                        title="History"
                      />
                      <span>History</span>
                    </Link>
                  </NavLink>
                </NavItem>
              )} */}
              <NavItem>
                {authenticationService.isLoggedIn()  &&(
                  <ButtonCreatePmp ></ButtonCreatePmp>
                )}
                {!authenticationService.isLoggedIn() && (
                  <Button
                    onClick={() => history.push("/login")}
                    outline
                    color="success"
                    className="borderGreen colorGreen"
                  >
                    CREATE 1PMP FOR FREE
                  </Button>
                )}
                
              </NavItem>
             {authenticationService.isLoggedIn() &&
                authenticationService.isRole(roles.admin) && (
                  <NavItem className="admin-link">
                    <NavLink>
                      <Link
                        to="#"
                        onClick={() =>
                          this.props.headerShow({
                            loader: false,
                            show: false,
                            header: true,
                          })
                        }
                        className="togglemenu">
                        <i className="fa fa-drivers-license-o"></i>
                        <span>Admin Panel</span>
                      </Link>
                    </NavLink>
                  </NavItem>
                )}

              {authenticationService.getUser() && (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret onClick={() => this.keepAdminOpen()} title="Profile">
                    <i className="fa fa-user"></i>{" "}
                    {authenticationService.getUser().email}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <Nav>
                      <NavItem>
                        <NavLink>
                          <Link onClick={() => this.closeNavbar()} to="/profile" className="item">
                            Profile
                          </Link>
                        </NavLink>
                        <NavLink>
                          <Link
                            onClick={() => this.closeNavbar()}
                            to="/changePassword"
                            className="item"
                          >
                            Change Password
                          </Link>
                        </NavLink>
                        <NavLink>
                          {authenticationService.isLoggedIn() && (
                            <a
                              className="item pointer"
                              onClick={() => this.completeLogout()}
                            >
                              Logout
                            </a>
                          )}
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    homeData: _.pick(
     // state.homeData.response,
      "title",
      "email",
      "youtubeLink",
      "linkedinLink",
      "twitterLink",
      "instagramLink",
      "facebookLink",
      "markDownText"
    ),
    adminPanelToggleVal: state.adminPanelToggle.openPanel,
  };
}

export default connect(mapStateToProps, {
  fetchHome,
  adminPanelRightSideBar,
  toggleShow,
  toggleForceShow,
  toggleHide,
  headerShow,
  adminPanelRightSideBarON,
  adminPanelRightSideBarONClick,
  adminPanelRightSideBarForceOff,
})(Header);
//export default Header;