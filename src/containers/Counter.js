import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { INCREMENT, DECREMENT } from '../actions/';
import CounterComponent from '../components/CounterComponent';


class Counter extends Component {
    render() {
        console.log('this.props.count : ', this.props.count);
        return (
            <CounterComponent
            inc={ () => this.props.increment() }
            dec={ () => this.props.decrement() }
            count= { this.props.count }
            />
        );
    }
}

Counter.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return { count: state.count };
};


const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);