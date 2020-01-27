import React, {Component} from 'react';

export default class Button extends Component{
  render(){
    // console.log("====prps======", this)

    return(
          <div>
            <button type="button_comp" className="button-div" onClick={()=> this.props.addedtoCart(this.props.productId)}>Add to Cart</button>
         </div>
    )
  }
}
