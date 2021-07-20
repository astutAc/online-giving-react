import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleShow, toggleHide } from '../../actions';


class AdminPanelLeft extends React.Component {
 
    onSubmit = formValues => {
    };
    render() {
      const {show}=this.props.togglebar;
      const classBars=`sidebar ${!show ? '' :'sidebarhidden'}`
    return (
      <aside className={classBars}>
        <div className="sidebar-in">
          <header>
            <div className="logo">
              {/* <Link to="/">
                <img src="../assets/images/logo.png" alt="Successwise" />
              </Link> */}
            </div>
            <a className="togglemenu" onClick={() => this.props.toggleShow()}>
              <i className="fa fa-bars"></i>
            </a>
          </header>
          <nav className="navigation">
            <ul className="navi-acc">
              <li>
                <Link to="/admin/cms" onClick={() => this.props.toggleHide()}>
                  <i className="fa fa-home mr-2"></i> <span>Homepage CMS</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/allusers"
                  onClick={() => this.props.toggleHide()}
                >
                  <i className="fa fa-users mr-2"></i> <span>Users</span>
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/admin/pmpAdminpanel"
                  onClick={() => this.props.toggleHide()}
                >
                  <i className="fa fa-newspaper-o mr-2"></i>
                  <span>PMP Sections</span>
                </Link>
              </li> */}
              {/* <li><a href=""><i className="fa fa-pencil mr-2"></i> <span>Menu 1</span></a></li>
              <li><a href=""><i className="fa fa-pencil mr-2"></i> <span>Menu 1</span></a></li>
              <li><a href=""><i className="fa fa-pencil mr-2"></i> <span>Menu 1</span></a></li>
              <li><a href=""><i className="fa fa-pencil mr-2"></i> <span>Menu 1</span></a></li>
              <li><a href=""><i className="fa fa-pencil mr-2"></i> <span>Menu 1</span></a></li>
              <li><a href=""><i className="fa fa-pencil mr-2"></i> <span>Menu 1</span></a></li> */}
            </ul>
          </nav>
          <span className="shadows"></span>
        </div>
      </aside>
    );
  }
}

function mapStateToProps(state) {
  return  {
    togglebar: state.togglebar,
  };
}
export default connect(mapStateToProps, { toggleShow, toggleHide })(
  AdminPanelLeft
);