import React, { Component } from 'react';
//import PropTypes from 'prop-types';


class Text extends Component {
  constructor ( props ) {
    super( props );
    this.state = {
      name: this.props.name || 'input',
      value: '',
      type: this.props.type || 'text',
      placeholder: this.props.placeholder || ',Place your name here ^-^',
      required: true,
    };
  }

  validateField = () => {
    if( this.state.required ) {
      console.log('validate logic here');
    }
  };

  render() {
    return (
      <input
        tabIndex='1' // Optional.[String or Number].Default: -1.
        id={ this.state.name } // Optional.[String].Default: ''.  Input ID.
        name={ this.state.name } // Optional.[String].Default: ''. Input name.
        type={ this.state.type } // Optional.[String].Default: 'text'. Input type [text, password, number].
        value={ this.state.value } // Optional.[String].Default: ''.
        placeholder={ this.state.placeholder } // Optional.[String].Default: ''.
        required= { this.state.required }
        onChange={ (value, e) => {
          this.setState({ value });
          console.log(this.state.value);
        } } // Required.[Func].Default: () => {}. Will return the value.
        onBlur={ e => {
          console.log(e);
          this.validateField();
        } } // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
      />
    );
  }
}

export default Text;
