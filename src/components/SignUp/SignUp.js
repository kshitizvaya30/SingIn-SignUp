import React, { useState } from "react";
import { Button } from "react-bootstrap";
import LogoImg from "../../assets/logoipsum-291.svg";
import {
  EmailAuthentication,
  PasswordAuthentication,
  phoneNoAuthentication,
} from "../Authentication/FieldAuthentication";
import "./SignUp.scss";

function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNo: "",
    password: "",
  });

  const handleCredentials = (key, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [key]: value,
    }));
    console.log(user);
  };

  const handleSignUp = () => {
    if (!EmailAuthentication(user.password)) {
      alert("Email Format Incorrect");
      return;
    }

    if (!phoneNoAuthentication(user.phoneNo)) {
      alert("Phone Number Format Incorrect");
      return;
    }

    if (!PasswordAuthentication(user.password)) {
      alert("Password Format Incorrect");
      return;
    }

    
  };

  return (
    <div className="signUpContainer">
      <div className="logo">
        <img src={LogoImg} alt="logo" />
      </div>
      <div className="heading">Sign Up Page</div>
      <div className="signUpForm">
        <div className="nameContainer field">
          <label htmlFor="Name" className="name">
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            value={user.name}
            onChange={(e) => handleCredentials("name", e.target.value)}
          />
        </div>
        <div className="emailContainer field">
          <label htmlFor="signUpId" className="signUpId">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => handleCredentials("email", e.target.value)}
          />
        </div>
        <div className="phoneContainer field">
          <label htmlFor="phoneNo" className="phoneNumber">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Phone Number"
            value={user.phoneNo}
            onChange={(e) => handleCredentials("phoneNo", e.target.value)}
          />
        </div>
        <div className="passContainer field">
          <label htmlFor="password" className="password">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => handleCredentials("password", e.target.value)}
          />
        </div>
        <div className="BtnContainer">
          <Button
            variant="primary"
            className="signUpBtn"
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
        </div>
        <div className="signUp">
          Already have an account{" "}
          <span className="signUpButton">
            <a href="/">Sign In</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
