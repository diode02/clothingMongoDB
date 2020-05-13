import React from "react";

import { ReactComponent as Logo } from "../../assests/crown.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  OptionLinkContainer,
} from "./header.sty";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionContainer>
        <OptionLinkContainer to="/shop">SHOP</OptionLinkContainer>
        <OptionLinkContainer to="/contact">CONTACT</OptionLinkContainer>
        <OptionLinkContainer to="/signin">SIGNIN</OptionLinkContainer>
      </OptionContainer>
    </HeaderContainer>
  );
};

export default Header;
