import React, { Component } from 'react';
import { connect } from 'react-redux';
//import * as action from '../actions';
import { Redirect } from 'react-router';

class EnsureLoggedIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: localStorage.getItem('authToken') || false,
    };
  }
  componentDidMount() {
    //const { dispatch, currentURL } = this.props;
    if ( !this.state.loggedIn ) {
      //const { history } = this.props;
      //history.pushState(null, '/login');
      //history.replaceState(null, '/login');
      // set the current url/path for future redirection (we use a Redux action)
      // then redirect (we use a React Router method)
      // dispatch( setRedirectUrl(currentURL) );
    }
  }

  render() {
    if ( this.state.loggedIn ) {
      return this.props.children;
    } else {
      return <Redirect to='/login' />;
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.loggedIn,
    //currentURL: ownProps.location.pathname
  };
}

export default connect(mapStateToProps)(EnsureLoggedIn);
