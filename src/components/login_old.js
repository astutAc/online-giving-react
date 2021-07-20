import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, FormGroup, Button} from 'reactstrap';
import Tab from './tab';
import { Field, reduxForm } from 'redux-form';
import Copyright from './copyright';
import submit from '../apis/login';
import  {resendEmail} from '../apis/resendEmail';
import { authenticationService } from '../services/authenticationService';
import { loader, toggleShow, adminPanelRightSideBarOff,loginToggle,resendEmailLogin } from "../actions";
import Loader from './loader';
import { validation } from '../enums';

class LoginOld extends React.Component {
   renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input,type, meta, className, placeholder,maxLength,minLength}) => {
    return (
      <div>
        <input {...input} autoComplete="off" type={type} className={className} placeholder={placeholder} maxLength={maxLength} minLength={minLength} />
        {this.renderError(meta)}
        </div>
    );
  };


  onSubmit=(formValues)=>{
    this.props.loader(true)
    return submit(formValues,this.props.loader,this.props.resendEmailLogin)
    
  }

  onResendEmail=(email,fullName)=>{
   const formValues={"email":email,"fullName":fullName}
    this.props.loader(true)
    return resendEmail(formValues,this.props.loader)
    
  }

  render() {

    const {loader,show}=this.props.toggle
    const  loginEye = this.props.eyeToggleValueRender?this.props.eyeToggleValueRender.loginEye:null;
    const classEye = `fa ${
      loginEye ? "fa-eye-slash toggle-password":"fa-eye toggle-password"
    }`;
     const verificationEmailLink=this.props.verificationEmailLink?this.props.verificationEmailLink.verificationData:null;
    return (
      <Container>
        <Tab name={"Login"}/>
        <Row>
          <Col md="12">
            <div className="loginBox">
              <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <FormGroup>
                        <Field 
                          name="email"
                          component={this.renderInput}
                          type="email"
                          className="form-control"
                          placeholder="Email*"
                          maxLength="40"
                          minLength="5"
                        />
                </FormGroup>
                <FormGroup>
                        <Field 
                          name="password"
                          type={loginEye ? "text" : "password"}
                          component={this.renderInput}
                          className="form-control"
                          placeholder="Password*"
                          maxLength="28"
                          minLength="2"
                          
                        />
                <span className={classEye} onClick={() => this.props.loginToggle()}></span>
                         
                </FormGroup>
                <FormGroup>
                  <Link to="/forgotpassword">Forgot Password?</Link>
                </FormGroup>
                <FormGroup>
                  <Button className="ui button primary" disabled={loader?true:false}>Sign In</Button>
               </FormGroup>
              </form>
              {verificationEmailLink.show && <div className="alert alert-warning mt-4 mb-0"><span>We have already sent you email for verification link. please click on resend Link to send link again <Link to="#" onClick={() => this.onResendEmail(verificationEmailLink.email,verificationEmailLink.fullName)} className="text-primary">Resend Link</Link></span></div>}
            </div>
          </Col>
        </Row>
        <Copyright />
      </Container>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.email) {
    errors.email = validation.emailEmptyValidation;
  }

  if (!formValues.fullName) {
    errors.fullName = validation.name;
  }
  if (!formValues.password) {
    errors.password = validation.passwordEmpty;
  }
  if (!formValues.term) {
    errors.term = validation.termPolicy;
  }
  return errors;
};

const formWrapped = reduxForm({
  form: 'loginForm',
  validate
})(LoginOld);
function mapStateToProps(state) {
  return  {
    toggle: state.toggle,
    eyeToggleValueRender:state.eyeToggleValue,
    verificationEmailLink:state.verificationEmailLinkValue 
  };
}

export default connect(mapStateToProps, {
  loader,
  toggleShow,
  adminPanelRightSideBarOff,
  loginToggle,
  resendEmailLogin
})(formWrapped);
