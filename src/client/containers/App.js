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
    this.closeCart = this.closeCart.bind(this);
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
    this.setState({
      isLoading: false,
      inventory: currInv,
      cart: addedCart,
      cartAmount: addedCart.length,
    });
  }
  closeCart() {
    this.setState({
      cartShowing: false,
    });
  }
  removeFromCart(itemNumber) {
    const product = this.state.cart[itemNumber];
    const left = this.state.cart.slice(0, itemNumber);
    const right = this.state.cart.slice(itemNumber+1);
    const currentCart = left.concat(right);
    const currentInventory = this.state.inventory.concat(product);
    this.setState({
      inventory: currentInventory,
      cart: currentCart,
      cartAmount: currentCart.length,
    });
  }
  showCart() {
    this.setState({
      cartShowing: !this.state.cartShowing
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
          closeCart={this.closeCart}
          cartItems={this.state.cart}
          removeItem={this.removeFromCart}
        />
      </div>
    );
  }
}

export default App;
