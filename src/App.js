import React, {Component} from 'react';
import listofProducts from './productDetails.json';
import DisplayList from './displaypage';
import Button from "./button";


class App extends Component{
  constructor(){
    super();
    this.addProducts=this.addProducts.bind(this);
    this.subtractProducts=this.subtractProducts.bind(this);
    this.addedtoCart=this.addedtoCart.bind(this);
    this.checkoutPrice=this.checkoutPrice.bind(this);
    this.state = {
      productList: listofProducts,
      prodQuan:"",
      checkoutCount: 0,
      totalprice: 0
    };
  }

addProducts(id){
  let newState = this.state.productList.map((item) => {
    if(item.id === id){
      item.quant++;
    }
    return item;
  });
  this.setState({productList:newState})
}

subtractProducts(id){
  let newState = this.state.productList.map((item) => {
    if(item.id === id && item.quant > 0){
      item.quant--;
    }
    return item;
  });
  this.setState({productList:newState})
}

addedtoCart(id){
let cartValue = 0;
this.state.productList.map((list) => {
  cartValue += list.quant;
});
this.checkoutPrice();
this.setState({checkoutCount: cartValue});
}

checkoutPrice(){
  let totalPrice = 0;
  this.state.productList.map((list) => {
    let amount = list.quant * list.Offer_price;
    console.log("===product====", list.product)
    console.log("====off price===", amount );
    totalPrice = totalPrice + amount;
    console.log("-----totalPrice----", totalPrice);
  });
  this.setState({totalprice: totalPrice});
  }


render() {
  console.log("======render=========")
  return(
     <div className="App">
       <div className="productDetails product-details-extra">
        <DisplayList productDetails={this.state.productList} addProducts={this.addProducts} subtractProducts={this.subtractProducts} cartvalue={this.state.checkoutCount} addedtoCart={this.addedtoCart} totalprice={this.state.totalprice}/>
       </div>
    </div>
  );
 }
}

export default App;
