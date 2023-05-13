import React, { useState } from "react";
import { Button } from "react-bootstrap";
import profilePic from "../../assets/profile.png";
import "./Profile.scss";
import backgrounImg from "../../assets/backgroundImg.jpg";

import {
  phoneNoAuthentication,
  pincodeAuthentication,
} from "../Authentication/FieldAuthentication";

function Profile() {
  const [edit, setEdit] = useState(true);
  const [data, setData] = useState(true);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNo: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleData = () => {
    if (user.phoneNo !== "" && !phoneNoAuthentication(user.phoneNo)) {
      alert("phone Number format is wrong");
      return;
    }

    if (user.pincode !== "" && !pincodeAuthentication(user.pincode)) {
      alert("pincode should be of 6 digits");
    }
    setEdit(true);
    //Update Data using API
  };

  const handleCredentials = (key, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [key]: value,
    }));
    console.log(user);
  };
  return (
    <div className="userProfile">
      <div className="backgroundImage">
        <img src={backgrounImg} alt="background" />
      </div>
      <div className="heading">Profile</div>
      <div className="profileContainer">
        <div className="profilePic">
          <img src={profilePic} alt="profile pic" />
        </div>
        <div className="profileDetails">
          <div className="editProfile">
            <Button variant="primary" onClick={() => setEdit(false)}>
              Edit Profile
            </Button>
            <Button variant="primary" onClick={handleData}>
              Save Data
            </Button>
          </div>
          <div className="field">
            <div>NAME</div>
            <div>
              <input
                type="text"
                placeholder="Name"
                disabled={edit}
                onChange={(e) => handleCredentials("name", e.target.value)}
              ></input>
            </div>
          </div>
          <div className="field">
            <div>EMAIL</div>
            <div>
              <input type="text" placeholder="Email" disabled={true}></input>
            </div>
          </div>
          <div className="field">
            <div>Phone Number</div>
            <div>
              <input
                type="text"
                placeholder="Phone Number"
                disabled={edit}
                onChange={(e) => handleCredentials("phoneNo", e.target.value)}
              ></input>
            </div>
          </div>

          <div className="field">
            <div>City</div>
            <div>
              <input
                type="text"
                placeholder="city"
                disabled={edit}
                onChange={(e) => handleCredentials("city", e.target.value)}
              ></input>
            </div>
          </div>

          <div className="field">
            <div>State</div>
            <div>
              <input
                type="text"
                placeholder="state"
                disabled={edit}
                onChange={(e) => handleCredentials("state", e.target.value)}
              ></input>
            </div>
          </div>

          <div className="field">
            <div>PinCode</div>
            <div>
              <input
                type="num"
                placeholder="pincode"
                disabled={edit}
                onChange={(e) => handleCredentials("pincode", e.target.value)}
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="checkItems">
        <Button className="checkButton" variant="primary">Check Items </Button>
      </div>
    </div>
  );
}

export default Profile;
