import React, {Component} from 'react';
import "./App.css"
import Button from "./button";
import Cart from "./carthdr";
import CartTotal from "./cartTotal";

export default class DisplayList extends Component{
  constructor(){
    super();
    this.getProductList=this.getProductList.bind(this);
  }
  getProductList(){
    console.log("=====props======", this.props)
    return this.props.productDetails.map((list, index)=>{
      return(
          <div className="Prodlist" key={index}>
            <div className="prodImage">
              <br />
                <img src={process.env.PUBLIC_URL + list.url} height="100" width="100" alt="Product Image"/>
              <br />
              <span>{list.product +"  "+ list.quantity}</span>
              <br />
              <Button productId={list.id} addedtoCart={this.props.addedtoCart}/>
            </div>
            <div className="Right-side-details">
              <div className="price">
               <span>MRP: Rs{list.price}</span>
              </div>
              <div className="offer-price">
               <span>Offer Price: Rs {list.Offer_price}</span>
              </div>
              <div className="quant" key={list.id}>
               <button type="add_button"
                 onClick={()=> this.props.addProducts(list.id)}>+</button>
               <span>{list.quant}</span>
               <button type="subtract_comp"
                 onClick={()=> this.props.subtractProducts(list.id)}>-</button>
              </div>
            </div>
          </div>
      )
    })
  }
  render(){
    return(
      <div className="Main-Cart main-cart-extra">
      <div className="ShoppingCart">
        <Cart totalValue={this.props.cartvalue} />
      </div>
      <div  className="product-details-extra">
       {this.getProductList()}
      </div>
      <div className="TotalAmount">
       <CartTotal totalAmount={this.props.totalprice} />
     </div>
      </div>
    )
  }
}
