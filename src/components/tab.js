import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col} from 'reactstrap';

const Tab = (props) => {
  return (
    <div className="ui secondary pointing menu">
      <Container>
        <Row>
          <Col md="12">
            <div className="loginSignup">
              {/* <img src="../assets/images/logo.png" alt="" /> */}
              <div className="tabLinks">
                <div className="loginLink">
                  <Link to="/login" className={(props.name === 'Login')?'item active':'item'}>
                    Login
                  </Link>
                </div>
                <div className="registerLink">
                  <Link to="/register" className={(props.name === 'Register')?'item active':'item'}>
                    Registration
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Tab;