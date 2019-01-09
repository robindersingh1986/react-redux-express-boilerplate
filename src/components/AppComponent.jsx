import React, { Component } from 'react';
import '../css/colors.scss';

export default class AppComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: props.itemBlock || 'no items',
    };
    console.log('props : ', props);
  }

  render() {
    const { itemBlock } = this.state;
    return ( <div>
      <span className="span"> Ok</span>
      <button onClick={ this.props.addItem('Testing') }>Add Item to list</button>
      { itemBlock }
    </div>
    );
  }
}
