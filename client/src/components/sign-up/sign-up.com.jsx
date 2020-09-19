import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { Redirect } from "react-router";

import FormInput from "../form-input/form-input.com";
import "./sign-up.sty.scss";
import CustomButton from "../custom-button/custom-button.com";
import { selectErrorSignUp } from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";

import { signUpStart } from "../../redux/user/user.actions";
function SignUp({ signUpStart, errorSignUp }) {
  const [userCredentials, setUserCredetials] = useState({
    displayName: "w",
    email: "waqaskhanws2@gmail.com",
    password: "khankhan",
    confirmPassword: "khankhan",
  });

  const [message, setmessage] = useState("");

  const currentUser = useSelector((state) => state.user.currentUser);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  const { displayName, password, confirmPassword, email } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = userCredentials;

    if (password.length < 7) {
      alert("passowrd length must be greater then 7");
      return;
    }

    if (password !== confirmPassword) {
      alert("passowrd dont match");
      return;
    }

    signUpStart(email, password, displayName);
  };

  const onChange = ({ target }) => {
    const { name, value } = target;
    setUserCredetials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h1>SIGNUP</h1>
      <span>Sign up by providing the following details</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          value={displayName}
          required
          handleChange={onChange}
          label="Display Name"
        />
        <FormInput
          name="email"
          type="email"
          value={email}
          required
          handleChange={onChange}
          label="Email"
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          required
          handleChange={onChange}
          label="Password"
        />
        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          required
          handleChange={onChange}
          label="Confirm Password"
        />
        <CustomButton type="submit" value="Signup">
          Sign Up
        </CustomButton>
      </form>
      {message}
      {/* && errorMessage.error.code === 11000 */}
      {errorSignUp ? "Email address is already in use" : ""}
    </div>
  );
}

const mapStatetoProps = createStructuredSelector({
  errorSignUp: selectErrorSignUp,
});

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (email, password, displayName) =>
    dispatch(signUpStart({ email, password, displayName })),
});
export default connect(mapStatetoProps, mapDispatchToProps)(SignUp);
