import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Container, Row, Col, FormGroup, Button } from "reactstrap";
import _ from "lodash";
import Copyright from "../copyright";
import {
  loader,
  fetchSections,
  updateSections,
  toggleShow,
  toggleHide,
  adminPanelRightSideBar,
  adminPanelRightSideBarOff,
} from "../../actions";
import { putSections } from "../../apis/pmpSections";
import { validation } from "../../enums";
import Header from "../header";
import LearnDirectly from "../learnDirectly";
import Footer from "../footer";
class PmpAdminPanel extends React.Component {
  async componentDidMount() {
    this.props.loader(true);
    this.props.fetchSections(this.props.loader);
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

  renderInput = ({
    input,
    type,
    meta,
    className,
    placeholder,
    maxLength,
    minLength,
  }) => {
    return (
      <div>
        <input
          {...input}
          autoComplete="off"
          type={type}
          className={className}
          placeholder={placeholder}
          maxLength={maxLength}
          minLength={minLength}
        />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.loader(true);
    return putSections(formValues, this.props.loader);
  };
  closeNavbars() {
    this.props.toggleHide();
    this.props.adminPanelRightSideBarOff();
  }

  render() {
    return (
      <div className="rootDivPage" onClick={() => this.closeNavbars()}>
        <div className="contentH">
          <div className="container mt-80 clearfix">
            <Header />
            <div className="row">
              <div className="col-md-12">
                <h1 className="headingInt">1PMP Sections</h1>
                <form
                  onSubmit={this.props.handleSubmit(this.onSubmit)}
                  className="ui form error"
                >
                  <div className="container pmpAdminPanel">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card">
                          <div className="card-header redBg">
                            <Field
                              name="pmpSectionTen"
                              component={this.renderInput}
                              type="text"
                              className="form-control"
                              placeholder="Before Prospect"
                            />
                          </div>
                          <div className="card-body p-0">
                            <ul className="list-group">
                              <li className="list-group-item">
                                <Field
                                  name="pmpSectionOne"
                                  component={this.renderInput}
                                  type="text"
                                  className="form-control"
                                  placeholder="First Row"
                                />
                              </li>
                              <li className="list-group-item">
                                <Field
                                  name="pmpSectionTwo"
                                  component={this.renderInput}
                                  type="text"
                                  className="form-control"
                                  placeholder="Second Row"
                                />
                              </li>
                              <li className="list-group-item">
                                <Field
                                  name="pmpSectionThree"
                                  component={this.renderInput}
                                  type="text"
                                  className="form-control"
                                  placeholder="Third Row"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="card">
                          <div className="card-header yellowBg">
                            <Field
                              name="pmpSectionEleven"
                              component={this.renderInput}
                              type="text"
                              className="form-control"
                              placeholder="During Lead"
                            />
                          </div>
                          <div className="card-body p-0">
                            <ul className="list-group">
                              <li className="list-group-item">
                                <Field
                                  name="pmpSectionFour"
                                  component={this.renderInput}
                                  type="text"
                                  className="form-control"
                                  placeholder="Fourth Row"
                                />
                              </li>
                              <li className="list-group-item">
                                <Field
                                  name="pmpSectionFive"
                                  component={this.renderInput}
                                  type="text"
                                  className="form-control"
                                  placeholder="Fifth Row"
                                />
                              </li>
                              <li className="list-group-item">
                                <Field
                                  name="pmpSectionSix"
                                  component={this.renderInput}
                                  type="text"
                                  className="form-control"
                                  placeholder="Sixth Row"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="card">
                          <div className="card-header greenBg">
                            <Field
                              name="pmpSectionTwelve"
                              component={this.renderInput}
                              type="text"
                              className="form-control"
                              placeholder="After Customer"
                            />
                          </div>
                          <div className="card-body p-0">
                            <ul className="list-group">
                              <li className="list-group-item">
                                <Field
                                  name="pmpSectionSeven"
                                  component={this.renderInput}
                                  type="text"
                                  className="form-control"
                                  placeholder="Seventh Row"
                                />
                              </li>
                              <li className="list-group-item">
                                <Field
                                  name="pmpSectionEight"
                                  component={this.renderInput}
                                  type="text"
                                  className="form-control"
                                  placeholder="Eighth Row"
                                />
                              </li>
                              <li className="list-group-item">
                                <Field
                                  name="pmpSectionNine"
                                  component={this.renderInput}
                                  type="text"
                                  className="form-control"
                                  placeholder="Ninth Row"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Col md="12" className="pmpAdmin">
                    <FormGroup>
                      <Button
                        className="ui button mt-4 greenButton"
                        disabled={this.props.toggle.loader ? true : false}
                      >
                        Submit
                      </Button>
                    </FormGroup>
                  </Col>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.pmpSectionOne) {
    errors.pmpSectionOne = validation.pmpSectionCannotBeEmpty;
  }
  if (!formValues.pmpSectionTwo) {
    errors.pmpSectionTwo = validation.pmpSectionCannotBeEmpty;
  }

  if (!formValues.pmpSectionThree) {
    errors.pmpSectionThree = validation.pmpSectionCannotBeEmpty;
  }

  if (!formValues.pmpSectionFour) {
    errors.pmpSectionFour = validation.pmpSectionCannotBeEmpty;
  }

  if (!formValues.pmpSectionFive) {
    errors.pmpSectionFive = validation.pmpSectionCannotBeEmpty;
  }

  if (!formValues.pmpSectionSix) {
    errors.pmpSectionSix = validation.pmpSectionCannotBeEmpty;
  }

  if (!formValues.pmpSectionSeven) {
    errors.pmpSectionSeven = validation.pmpSectionCannotBeEmpty;
  }

  if (!formValues.pmpSectionEight) {
    errors.pmpSectionEight = validation.pmpSectionCannotBeEmpty;
  }

  if (!formValues.pmpSectionNine) {
    errors.pmpSectionNine = validation.pmpSectionCannotBeEmpty;
  }

  if (!formValues.pmpSectionTen) {
    errors.pmpSectionTen = validation.pmpSectionCannotBeEmpty;
  }

  if (!formValues.pmpSectionEleven) {
    errors.pmpSectionEleven = validation.pmpSectionCannotBeEmpty;
  }

  if (!formValues.pmpSectionTwelve) {
    errors.pmpSectionTwelve = validation.pmpSectionCannotBeEmpty;
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "pmpSectionsForm",
  enableReinitialize: true,
  validate,
})(PmpAdminPanel);

function mapStateToProps(state) {
  return {
    initialValues: _.pick(
      state.pmpSectionsData.response,
      "pmpSectionOne",
      "pmpSectionTwo",
      "pmpSectionThree",
      "pmpSectionFour",
      "pmpSectionFive",
      "pmpSectionSix",
      "pmpSectionSeven",
      "pmpSectionEight",
      "pmpSectionNine",
      "pmpSectionTen",
      "pmpSectionEleven",
      "pmpSectionTwelve"
    ),
    toggle: state.toggle,
  };
}

export default connect(mapStateToProps, {
  loader,
  fetchSections,
  updateSections,
  toggleShow,
  toggleHide,
  adminPanelRightSideBar,
  adminPanelRightSideBarOff,
})(formWrapped);
