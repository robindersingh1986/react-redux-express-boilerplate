import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import '../css/colors.scss';

export default class AppComponent extends Component {
  // constructor(props){
  //   super(props);
  // }
  handleClick = () => {
    this.props.addItem('Testing');
  }
  render() {
    const { items } = this.props;
    return ( <div>
      <span className="span"> Ok</span>
      <button onClick={ this.handleClick }>Add Item to list</button>
      { items }
    </div>
    );
  }
}
AppComponent.defaultProps = {
  addItem: null,
  items: null
};

AppComponent.propTypes = {
  addItem: PropTypes.func.isRequired,
  items: PropTypes.any
};
