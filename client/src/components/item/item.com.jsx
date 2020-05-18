import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import {
  ItemContainer,
  BackgroundImage,
  ItemFooterContainer,
  NameContainer,
  PriceContainer,
  AddButton,
} from "./item.sty.jsx";

const Item = ({ item, addItem }) => {
  const { title, price, imageUrl } = item;
  return (
    <ItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <ItemFooterContainer>
        <NameContainer>{title}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </ItemFooterContainer>
      <AddButton onClick={() => addItem(item)}>Add to cart</AddButton>
    </ItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Item);
