import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-icon.sty.scss";
import { selectTotalItems } from "../../redux/cart/cart.utils";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemCount: selectTotalItems(state.cart.cartItems),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
