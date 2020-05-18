import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.com";
import CustomButton from "../custom-button/custom-button.com";

const SignIn = ({}) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = (event) => {
    event.preventDefault();
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
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(null, mapDispatchToProps)(SignIn);
