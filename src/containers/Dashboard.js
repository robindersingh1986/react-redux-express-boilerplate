import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import DashboardComponent from '../components/DashboardComponent.jsx';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: props.items || 'no items',
      status: props.status || '-',
    };
    // this.fnAddItem = this.fnAddItem.bind(this);
    // console.log('props : ', props);
  }
/*   fnAddItem(data) {
    //data && this.props.todoAction(data);
    console.log('fnAddItem called ', data);
    this.props.getData();
  } */

  componentWillReceiveProps(nextProps) {
    console.log('nextProps....', nextProps);
    this.setState({
      items: nextProps.items,
    });
 }

//  componentDidUpdate(prevProps) {
//    console.log('componentDidUpdate....', prevProps);
//  }

  render() {
    console.log('this.props :::: ', this.props);
    const { items } = this.state;
    const itemBlock = Array.isArray(items) && items.map( item => <div key={ item.id }>{ item.title }</div> ); // || 'Loading';
    console.log('itemBlock : ', itemBlock);
    return (
      <DashboardComponent
        items={ itemBlock }
        getData={ () => this.props.getData() }
        status= { this.props.status }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    status: state.status,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: (data) => dispatch({ type: 'GET_DATA', result: data })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
