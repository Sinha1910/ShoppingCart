import React, {Component} from 'react';

export default class CartTotal extends Component{
  render(){
    return(
          <div>
           <h2>
              Total Amount: Rs {this.props.totalAmount}
           </h2>
         </div>
    )
  }
}
