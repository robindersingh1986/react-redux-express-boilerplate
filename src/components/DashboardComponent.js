import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/index.scss';

export default class DashboardComponent extends Component {
  handleClick = () => {
    this.props.getData();
  }
  render() {
    const { items, status } = this.props;
    return ( <div>
      <span className="span"> Ok :: { status } </span>
      <button onClick={ this.handleClick }>Add Item to list</button> <hr />
      { items }
    </div>
    );
  }
}
DashboardComponent.defaultProps = {
  getData: null,
  items: null,
  status: null,
};

DashboardComponent.propTypes = {
  getData: PropTypes.func.isRequired,
  items: PropTypes.any,
  status: PropTypes.string,
};
