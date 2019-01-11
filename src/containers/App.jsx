import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppComponent from '../components/AppComponent.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: 'no items'
    };
    this.fnAddItem = this.fnAddItem.bind(this);
    console.log('props : ', props);
  }
  componentDidMount(){
    console.log('state', this.state);
  }
  componentWillReceiveProps(nextProps){
    console.log('nxt', nextProps);
  }
  fnAddItem(data) {
    //data && this.props.todoAction(data);
    console.log("fnAddItem called ", data);
    this.props.todoAction(data);
  }
  render() {
    const { items } = this.props;
    const itemBlock = Array.isArray(items) && items.map( item => <div key={ item.id }>{ item.title }</div> ) || 'Loading';
    return ( 
      <AppComponent 
        items={ itemBlock }
        addItem={ this.fnAddItem }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    todoAction: (data) => dispatch({ type: 'ADD_TODO', result: data })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
