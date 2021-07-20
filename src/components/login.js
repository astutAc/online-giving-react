import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, FormGroup, Button} from 'reactstrap';
import submit from '../apis/login';
import Tab from './tab';
import { pass_eye,loader} from "../actions";
import { Field, reduxForm } from 'redux-form';

class Login extends React.Component {
    onSubmit=(formValues)=>{
        this.props.loader(true)
        return submit(formValues,this.props.loader)
        
      }
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
    
    render(){
        const {loader,show}= this.props.toggle
        const  loginEye = this.props.toggle?this.props.toggle.eye:null;
        const classEye = `fa ${
      loginEye ? "fa-eye-slash toggle-password":"fa-eye toggle-password"
    }`;
    
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
                                component={this.renderInput}
                                type={this.props.toggle.eye?'text':'password'}
                                className="form-control"
                                placeholder="Password*"
                                maxLength="40"
                                minLength="5"
                              />
                              <span className={classEye} onClick={() => this.props.pass_eye(!loginEye)}></span>
                            </FormGroup>
                       <FormGroup>
                          <Button className="ui button primary" disabled={loader?true:false}>Sign In</Button>
                        </FormGroup>    
                    </form>
                  </div>
                 </Col>
               </Row>
             </Container>
          );
    }
 }
const validate = formValues => {
  const errors = {};

  if (!formValues.email) {
    errors.email = "You must enter an email";
  }

  if (!formValues.password) {
    errors.password ='You must enter an password';
  }
  return errors;
};
const formWrapped = reduxForm({
    form: 'loginForm',
    validate,
  })(Login);
  function mapStateToProps(state) {
    return  {
      toggle: state.toggle,
    };
  }
  
  export default connect(mapStateToProps, {
      pass_eye,
      loader,
  })(formWrapped);
  