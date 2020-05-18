import React from "react";

import "./cart-item.sty.scss";

const CartItem = ({ item: { imageUrl, price, title, customerQuantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{title}</span>
      <span className="price">
        {customerQuantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
