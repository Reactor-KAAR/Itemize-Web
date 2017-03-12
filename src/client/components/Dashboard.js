//==================================================================================================
// Dashboard to display all the product information
//==================================================================================================
import React, { Component, PropTypes } from 'react';

class Dashboard extends Component {
  showProducts(inventory, addToCart) {
    if (inventory.length) {
      return inventory.map((product, index) => {
        return (
          <div 
            className="product push-xxlarge--ends push-xxlarge--sides"
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
  showCart(cartStatus) {
    if (cartStatus) {
      return (
        <div>
          <h1>CART</h1>  
        </div>
      );
    }
  }
  render() {
    const { inventory, cartStatus, addToCart, loading } = this.props;
    let loadingBar = <div></div>;
    if (loading) {
      loadingBar = <div className="loading"></div>;
    }
    return (
      <div className="dashboard">
        {this.showProducts(inventory, addToCart)}
        {this.showCart(cartStatus)}
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
