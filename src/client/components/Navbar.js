//==================================================================================================
// Navbar that shows on the top of the screen
//==================================================================================================
import React, { Component, PropTypes } from 'react';

class Navbar extends Component {
  render() {
    const { showCart, cartAmount } = this.props;
    return (
      <div className="navbar">
      <h1>Itemize</h1>
        <button
          className="cart-button"
          onClick={showCart}
        >
          Cart
        </button>
        <div className="cart-amount-wrapper">
          <div className="cart-amount">{cartAmount}</div>
        </div>
      </div>
    );
  }
}

Navbar.proptypes = {
  showCart: PropTypes.func.isRequired,
}

export default Navbar;