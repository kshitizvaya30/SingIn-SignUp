import React, { useContext, useState } from "react";
import "./SignIn.scss";
import LogoImg from "../../assets/logoipsum-291.svg";
import Button from "react-bootstrap/Button";
import {
  EmailAuthentication,
  PasswordAuthentication,
  phoneNoAuthentication,
} from "../Authentication/FieldAuthentication";
import { Context } from "../../context/AppContext";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [signInId, setSignInId] = useState("k@K.com");
  const [password, setPassword] = useState("Kshitiz@30");
  const { userLogin } = useContext(Context);
  const navigate = useNavigate();

  const [validSignInId, setValidSignInId] = useState(false);
  const [validPass, setValidPass] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSignInIdChange = (e) => {
    const value = e.target.value;
    setSignInId(value);
    setValidSignInId(true);

    if (EmailAuthentication(value)) {
      console.log("Valid email format");
    } else if (phoneNoAuthentication(value)) {
      console.log("Valid phone number format");
    } else {
      console.log("Invalid Sign In ID format");
      setValidSignInId(false);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setValidPass(PasswordAuthentication(password));
  };

  const handleSignIn = () => {
    if (!validSignInId) {
      alert("Login In Id Format is not correct");
    } else if (!validPass) {
      alert(
        "Password should be of minimum 7 length and should contain one capital letter and also one special character"
      );
    } else {
      setLoading(true);
      userLogin(signInId, password, true, setLoading);
    }
  };

  return (
    <div className="signInContainer">
      <div className="logo">
        <img src={LogoImg} alt="logo" />
      </div>
      <div className="heading">Sign In Page</div>
      <div className="signInForm">
        <div className="signInIdContainer field">
          <label htmlFor="signInId" className="signInId">
            Email/Phone
          </label>
          <input
            type="text"
            placeholder="Email or Phone"
            value={signInId}
            onChange={handleSignInIdChange}
          />
        </div>
        <div className="passContainer field">
          <label htmlFor="password" className="password">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="btnContainer">
          <Button
            variant="primary"
            className="signInBtn"
            onClick={handleSignIn}
          >
            Sign In
          </Button>
        </div>
        <div className="signUp">
          Don't Have an Account {"  "}
          <span className="signInButton" onClick={() => navigate("/sign-up")}>
            Sign Up
          </span>
        </div>
      </div>
      {loading && <Loader />}
    </div>
  );
}

export default SignIn;
