import React from "react";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assests/crown.svg";

import CartIcon from "../cartIcon/cart-icon.com";

import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  OptionLinkContainer,
} from "./header.sty";
import CartDropDown from "../cartDropDown/cart-drop-down.com";

const Header = ({ hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionContainer>
        <OptionLinkContainer to="/shop">SHOP</OptionLinkContainer>
        <OptionLinkContainer to="/contact">CONTACT</OptionLinkContainer>
        <OptionLinkContainer to="/signin">SIGNIN</OptionLinkContainer>
        <CartIcon />
      </OptionContainer>
      {hidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
};

const mapStateToProps = (state) => ({
  hidden: state.cart.hidden,
});

export default connect(mapStateToProps)(Header);
