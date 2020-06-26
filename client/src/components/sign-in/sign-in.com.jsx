import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.com";
import CustomButton from "../custom-button/custom-button.com";
import { emailSignInStart } from "../../redux/user/user.actions";
import "./sign-in.sty.scss";
import { createStructuredSelector } from "reselect";
import { selectErrorMessage } from "../../redux/user/user.selector";

const SignIn = ({ emailSignInStart, errorMessage }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "qaskhan021@gmail.com",
    password: "qweqweq",
  });
  const { email, password } = userCredentials;

  const handleSubmit = (event) => {
    event.preventDefault();
    emailSignInStart(userCredentials);
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h1>SIGNIN</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          required
          value={email}
          handleChange={handleChange}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          required
          value={password}
          handleChange={handleChange}
        />

        <CustomButton type="submit" value="Signin">
          Sign in
        </CustomButton>
      </form>
      <span
        style={{
          color: "red",
          marginTop: "10px",
        }}
      >
        {errorMessage ? "Please check your email and password" : ""}
      </span>
    </div>
  );
};

const mapStatetoProps = createStructuredSelector({
  errorMessage: selectErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  emailSignInStart: (userCredentials) =>
    dispatch(emailSignInStart(userCredentials)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(SignIn);
