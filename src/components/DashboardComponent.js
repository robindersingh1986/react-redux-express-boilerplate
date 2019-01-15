import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/index.scss';
import Text from '../commonComponents/input';

export default class DashboardComponent extends Component {
  handleClick = () => {
    this.props.getData();
  };
  render() {
    const { items, status } = this.props;
    return (
      <div>
        <span className="span"> Ok :: {status} </span>
        <Text />
        <button onClick={this.handleClick}>Get Data</button> <hr />
        {items}
      </div>
    );
  }
}
DashboardComponent.defaultProps = {
  getData: null,
  items: null,
  status: null
};

DashboardComponent.propTypes = {
  getData: PropTypes.func.isRequired,
  items: PropTypes.any,
  status: PropTypes.number
};
