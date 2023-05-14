import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import LogoImg from "../../assets/logoipsum-291.svg";
import { Context } from "../../context/AppContext";
import {
  EmailAuthentication,
  PasswordAuthentication,
  phoneNoAuthentication,
} from "../Authentication/FieldAuthentication";
import Loader from "../Loader/Loader";
import "./SignUp.scss";

function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
  });

  
  const { userSignUp } = useContext(Context);
  const[loading, setLoading] = useState(false);

  const handleCredentials = (key, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [key]: value,
    }));
  };

  const handleSignUp = () => {
    if (!EmailAuthentication(user.email)) {
      alert("Email Format Incorrect");
      return;
    }

    if (!phoneNoAuthentication(user.phone_number)) {
      alert("Phone Number Format Incorrect");
      return;
    }

    if (!PasswordAuthentication(user.password)) {
      alert("Password Format Incorrect");
      return;
    }

    setLoading(true);
    userSignUp(user, setLoading);
  };

  return (
    <div className="signUpContainer">
      {loading && <Loader />}
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
          <label htmlFor="phone_number" className="phoneNumber">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Phone Number"
            value={user.phone_number}
            onChange={(e) => handleCredentials("phone_number", e.target.value)}
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
