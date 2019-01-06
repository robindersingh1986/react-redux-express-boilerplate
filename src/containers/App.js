import React, { Component } from 'react';
//import './App.css';
import { connect } from 'react-redux';
//import Posts from '../components/posts';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: 'no items'
    };
    console.log('props : ', props);
  }
  componentDidMount(){
    console.log('state', this.state);
  }
  componentWillReceiveProps(nextProps){
    console.log('nxt', nextProps);
  }
  render() {
    const { items } = this.props;
    const itemBlock = Array.isArray(items) && items.map( item => <div key={ item.id }>{ item.title }</div> ) || 'Loading';
    return ( <div>
      <button onClick={ this.props.todoAction }>Add Item to list</button>
      { itemBlock }
    </div>
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
    todoAction: () => dispatch({ type: 'ADD_TODO', result: 'Do something' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
