import React, { useState } from "react";
import "./SignIn.scss";
import LogoImg from "../../assets/logoipsum-291.svg";
import Button from "react-bootstrap/Button";

function SignIn() {
  const [signInId, setSignInId] = useState("");
  const [password, setPassword] = useState("");

  const[validSignInId, setValidSignInId] = useState(true);
  const[validPass, setValidPass] = useState(true);

  const handleSignInIdChange = (e) => {
    const value = e.target.value;
    setSignInId(value);
    setValidSignInId(true);
    const emailRegex = /^\S+@\S+\.\S+$/;
    const phoneRegex = /^[0-9]{10}$/;
  
    if (emailRegex.test(value)) {
      console.log("Valid email format");
    } else if (phoneRegex.test(value)) {
      console.log("Valid phone number format");
    } else {
      console.log("Invalid Sign In ID format");
      setValidSignInId(false);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
      setValidPass(true);
      if (password.length < 7) {
        console.log("Password should be at least 7 characters long");
        setValidPass(false);
        return;
      }
      if (!/[A-Z]/.test(password)) {
        console.log("Password should contain at least one uppercase letter");
        setValidPass(false);
        return;
      }
  
      if (!/[!@#$%^&*]/.test(password)) {
        console.log("Password should contain at least one special character (!@#$%^&*)");
        setValidPass(false);
        return;
      }
  };

  const handleSignIn = () => {
      if(!validSignInId){
        alert('Login In Id Format is not correct')
      } else if (!validPass) {
        alert('Password should be of minimum 7 length and should contain one capital letter and also one special character')
      } else {
        console.log("Sign In succesfull");
      }
  }

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
          <Button variant="primary" className="signInBtn" onClick={handleSignIn}>
            Sign In
          </Button>
          </div>
          <div className="signUp">
            Don't Have an Account  
            <span className="signInButton">
              <a href="/"> Sign In </a>
            </span>
          </div>
        </div>
      </div>
  );
}

export default SignIn;
