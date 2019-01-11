import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/colors.scss';

export default class AppComponent extends Component {
  _handleClick = () => {
    this.props.addItem('Testing');
  }
  
  render() {
    const { items } = this.props;
    return ( <div>
      <span className="span"> Ok</span>
      <button onClick={ this._handleClick }>Add Item to list</button>
      { items }
    </div>
    );
  }
}
AppComponent.defaultProps = {
  addItem: null,
  items: null,
};

AppComponent.propTypes = {
  addItem: PropTypes.func.isRequired,
  items: PropTypes.any,
};