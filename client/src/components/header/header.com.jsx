import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import { selectCurrentUser } from "../../redux/user/user.selector";
import CartIcon from "../cartIcon/cart-icon.com";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { signOutStart } from "../../redux/user/user.actions";
import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  OptionLinkContainer,
} from "./header.sty";
import CartDropDown from "../cartDropDown/cart-drop-down.com";

const Header = ({ hidden, currentUser, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionContainer>
        <OptionLinkContainer to="/shop">SHOP</OptionLinkContainer>
        <OptionLinkContainer to="/contact">CONTACT</OptionLinkContainer>

        {!currentUser ? (
          <OptionLinkContainer to="/signin">SIGNIN</OptionLinkContainer>
        ) : (
          <OptionLinkContainer
            to="/"
            onClick={() => signOutStart(currentUser.token)}
          >
            SIGNOUT
          </OptionLinkContainer>
        )}
        <CartIcon />
      </OptionContainer>
      {hidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: (token) => dispatch(signOutStart(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
