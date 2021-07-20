import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Tab from './tab';
import submit from '../apis/register';
import { Container, Row, Col, FormGroup, Button} from 'reactstrap';
import { pass_eye_register,confirm_pass_eye_register,loader} from "../actions";
import { Field, reduxForm } from 'redux-form';

class Register extends React.Component{
    //Redux error rendering
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
      renderError({ error, touched }) {
        if (touched && error) {
          return (
            <div className="ui error message">
              <div className="header">{error}</div>
            </div>
          );
        }
      }
      onSubmit=(formValues)=>{
        this.props.loader(true)
        return submit(formValues,this.props.loader)
      }
    render()
    {
        const {loader,show}= this.props.toggle
        const  regEye = this.props.toggle?this.props.toggle.reg_eye:null;
        const classEye = `fa ${
          regEye ? "fa-eye-slash toggle-password":"fa-eye toggle-password"
        }`;
        const  conRegEye = this.props.toggle?this.props.toggle.con_reg_eye:null;
        const classEyeCon = `fa ${
          conRegEye ? "fa-eye-slash toggle-password":"fa-eye toggle-password"
        }`;
        return(
        <Container>
            <Tab name={"Register"}/>
            <Row>
                <Col md="12">
                    <div className="loginBox">
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                          <FormGroup>
                               <Field 
                                name="firstname"
                                component={this.renderInput}
                                type="text"
                                className="form-control"
                                placeholder="Firstname*"
                                maxLength="40"
                                minLength="5"
                            />
                          </FormGroup>
                          <FormGroup>
                               <Field 
                                name="lastname"
                                component={this.renderInput}
                                type="text"
                                className="form-control"
                                placeholder="Lastname*"
                                maxLength="40"
                                minLength="5"
                            />
                          </FormGroup>
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
                          type={this.props.toggle.reg_eye?'text':'password'}
                          component={this.renderInput}
                          className="form-control"
                          placeholder="Password*"
                          maxLength="28"
                          minLength="2"
                        />
                        <span className={classEye} onClick={() => this.props.pass_eye_register(!regEye)}></span>
                        </FormGroup>
                        <FormGroup>
                        <Field 
                          name="password_confirmation"
                          type={this.props.toggle.con_reg_eye?'text':'password'}
                          component={this.renderInput}
                          className="form-control"
                          placeholder="Confirm Password*"
                          maxLength="28"
                          minLength="2"
                        />
                        <span className={classEyeCon} onClick={() => this.props.confirm_pass_eye_register(!conRegEye)}></span>
                        </FormGroup>
                        <FormGroup>
                            <Button className="ui button primary" disabled={loader?true:false}>Sign Up</Button>
                        </FormGroup>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
        )
    }
}
const validate = formValues => {
    const errors = {};
    if (!formValues.firstname) {
      errors.firstname = "You must enter firtname";
    }
    if (!formValues.lastname) {
      errors.lastname = "You must enter lastname";
    }
    if (!formValues.email) {
      errors.email = "You must enter an email";
    }
    if (!formValues.password) {
      errors.password = 'You must enter password';
    }
    if (!formValues.password_confirmation) {
      errors.password_confirmation = 'You must enter confirm password';
    }
    return errors;
  };
const formWrapped = reduxForm({
    form:'registerForm',
    validate,
})(Register)
function mapStateToProps(state) {
    return  {
      toggle: state.toggle,
    };
  }
export default connect(mapStateToProps,{
    pass_eye_register,
    confirm_pass_eye_register,
    loader,
})(formWrapped);