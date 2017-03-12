//==================================================================================================
// Dashboard to display all the product information
//==================================================================================================
import React, { Component, PropTypes } from 'react';
import Modal from 'react-responsive-modal';

class Dashboard extends Component {
  showProducts(inventory, addToCart) {
    if (inventory.length) {
      return inventory.map((product, index) => {
        return (
          <div 
            className="product push-xlarge--ends push-xlarge--sides"
            key={product.QRcode}
          >
            <img className="product-image"
              src={product.url}
              alt=""
            />
            <div className="product-info mask">
              <h2>Category: {product.category}</h2>
              <p className="info">Description: {product.description}</p>
              <p className="info">Price: ${product.price}</p>
              <button
                className="add-to-cart-button"
                onClick={() => addToCart(index)}
              >Add To Cart</button>
            </div>
          </div>
        );
      });
    }
    return <div></div>;
  }
  showCart(cartStatus, closeCart, cartItems, removeItem) {
    let cart = cartItems;
    if (!cart.length) {
      cart = (
        <h1>Your Cart is Empty!</h1>
      );
    } else {
      cart = cartItems.map((item, index) => {
        return (
          <div className="cart-entry"
            key={item.QRcode}
          >
            <img className="cart-product-image"
              src={item.url}
              alt=""
            />
            <div className="cart-entry-info">
              <div>Category: {item.category}</div>
              <div>Name: {item.description}</div>
              <div>${item.price}</div>
            </div>
            <button
              className="remove-cart"
              onClick={() => removeItem(index)}
            >
              X
            </button>
          </div>
        );
      });
    }
    return (
      <Modal
        modalClassName="cart-modal"
        open={cartStatus}
        onClose={closeCart}
        little={false}
      >
        <h3>Your Current Items</h3>
        {cart}
        <div className="checkout-button-wrapper">
          <button
            className="checkout-button"
            onClick={() => console.log('CHKECING OUT CART')}
          >
            Checkout
          </button>
        </div>
      </Modal>
    )
  }
  render() {
    const { inventory, cartStatus, addToCart, loading, closeCart, cartItems, removeItem } = this.props;
    let loadingBar = <div></div>;
    if (loading) {
      loadingBar = <div className="loading"></div>;
    }
    return (
      <div className="dashboard">
        {this.showProducts(inventory, addToCart)}
        {this.showCart(cartStatus, closeCart, cartItems, removeItem)}
        {loadingBar}
      </div>
    );
  }
}

Dashboard.propTypes = {
  inventory: PropTypes.array.isRequired,
  cartStatus: PropTypes.bool.isRequired,
};

export default Dashboard;
