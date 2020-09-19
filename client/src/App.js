import React from "react";
import "./App.css";

//components
import Header from "./components/header/header.com";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.com";
import CheckOutPage from "./pages/checkOutItem/check-out-page.com";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.com";
import HomePageRedirectCom from "./pages/homepage/homePageRedirect-com";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePageRedirectCom} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={CheckOutPage} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
