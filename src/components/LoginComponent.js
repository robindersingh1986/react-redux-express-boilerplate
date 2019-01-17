import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/index.scss';

class LoginComponent extends Component {
  render() {
    return (
      <div>
        <h1> Login Page </h1>
      </div>
    );
  }
}
LoginComponent.defaultProps = {
  getData: null,
  items: null,
  status: null
};

LoginComponent.propTypes = {
  getData: PropTypes.func,
  items: PropTypes.any,
  status: PropTypes.number
};

export default LoginComponent;
