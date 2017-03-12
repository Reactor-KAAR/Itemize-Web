//==================================================================================================
// Holds the entire application logic
//==================================================================================================
import React, { Component } from 'react';
import Dashboard from '../components/Dashboard';
import Navbar from '../components/Navbar';
import { inventory } from '../helpers/InventoryData';
import fetch from 'isomorphic-fetch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      inventory: [],
      cartShowing: false,
      cart: [],
      cartAmount: 0,
    };
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.showCart = this.showCart.bind(this);
  }
  componentDidMount() {
    // Set to loading
    this.setState({
      isLoading: false,
      inventory: inventory
    });
  }
  addToCart(itemNumber) {
    this.setState({
      isLoading: true,
    });
    const product = this.state.inventory[itemNumber];
    const leftInv = this.state.inventory.slice(0, itemNumber);
    const rightInv = this.state.inventory.slice(itemNumber+1);
    const currInv = leftInv.concat(rightInv);
    const addedCart = this.state.cart.concat(product);
    console.log('left', leftInv);
    console.log('right', rightInv);
    this.setState({
      isLoading: false,
      inventory: currInv,
      cart: addedCart,
      cartAmount: addedCart.length,
    });
  }
  changeSet() {

  }
  removeFromCart() {

  }
  showCart() {
    const cartShowing = this.state.cart;
    this.setState({
      cart: !cartShowing
    });
  }
  render() {
    return (
      <div>
        <Navbar
          showCart={this.showCart}
          cartAmount={this.state.cartAmount}
        />
        <Dashboard
          loading={this.state.isLoading}
          inventory={this.state.inventory}
          cartStatus={this.state.cartShowing}
          addToCart={this.addToCart}
          removeFromCart={this.removeFromCart}
        />
      </div>
    );
  }
}

export default App;
