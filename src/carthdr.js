import React, {Component} from 'react';

export default class Cart extends Component{
  render(){
    return(
      <div>
        <h3>Shopping Cart({this.props.totalValue})</h3>
      </div>
    )
  }
}
