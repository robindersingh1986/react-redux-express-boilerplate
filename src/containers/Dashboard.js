import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { createSelector } from 'reselect';
import DashboardComponent from '../components/DashboardComponent';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: props.items || 'no items',
      status: props.status || '-',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      items: nextProps.items,
      status: nextProps.status,
    });
 }

  render() {
    const { items, status } = this.state;
    const itemBlock = Array.isArray(items) && items.map( item => <div key={ item.id }>{ item.title }</div> ) || 'Loading';
    return (
      <DashboardComponent
        items={ itemBlock }
        getData={ () => this.props.getData() }
        status= { status }
      />
    );
  }
}

const mapStateToProps = state => {
  const { Dashboard } = state;
  return {
    items: Dashboard.items,
    status: Dashboard.status,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch({ type: 'GET_DATA' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
