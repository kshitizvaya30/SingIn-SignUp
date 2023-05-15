import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import profilePic from "../../assets/profile.png";
import "./Profile.scss";
import backgrounImg from "../../assets/backgroundImg.jpg";

import {
  phoneNoAuthentication,
  pincodeAuthentication,
} from "../Authentication/FieldAuthentication";
import { Context } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user, updateUserData } = useContext(Context);
  const navigate = useNavigate();
  const [edit, setEdit] = useState(true);
  const [userDetails, setUserDetails] = useState({
    id: user.id,
    name: "",
    email: "",
    phone_number: "",
    city: "",
    state: "",
    pincode: "",
  });

  useEffect(() => {
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      id: user.id,
      name: user.name,
      email: user.email,
      phone_number: user.phone_number,
      city: user.city,
      state: user.state,
      pincode: user.pincode,
    }));
  }, [user]);

  const handleData = () => {
    if (
      userDetails.phone_number !== "" &&
      !phoneNoAuthentication(userDetails.phone_number)
    ) {
      alert("phone Number format is wrong");
      return;
    }

    if (
      userDetails.pincode !== "" &&
      !pincodeAuthentication(userDetails.pincode)
    ) {
      alert("pincode should be of 6 digits");
    }
    setEdit(true);
    updateUserData(userDetails);
  };

  const handleCredentials = (key, value) => {
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [key]: value,
    }));
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
                // placeholder="Name"
                disabled={edit}
                value={userDetails.name}
                onChange={(e) => handleCredentials("name", e.target.value)}
              ></input>
            </div>
          </div>
          <div className="field">
            <div>EMAIL</div>
            <div>
              <input
                type="text"
                // placeholder="Email"
                value={userDetails.email}
                disabled={true}
              ></input>
            </div>
          </div>
          <div className="field">
            <div>Phone Number</div>
            <div>
              <input
                type="text"
                // placeholder="Phone Number"
                disabled={edit}
                value={userDetails.phone_number}
                onChange={(e) => handleCredentials("phone_number", e.target.value)}
              ></input>
            </div>
          </div>

          <div className="field">
            <div>City</div>
            <div>
              <input
                type="text"
                // placeholder="city"
                disabled={edit}
                value={userDetails.city}
                onChange={(e) => handleCredentials("city", e.target.value)}
              ></input>
            </div>
          </div>

          <div className="field">
            <div>State</div>
            <div>
              <input
                type="text"
                // placeholder="state"
                disabled={edit}
                value={userDetails.state}
                onChange={(e) => handleCredentials("state", e.target.value)}
              ></input>
            </div>
          </div>

          <div className="field">
            <div>PinCode</div>
            <div>
              <input
                type="num"
                // placeholder="pincode"
                disabled={edit}
                value={userDetails.pincode}
                onChange={(e) => handleCredentials("pincode", e.target.value)}
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="checkItems">
        <Button
          className="checkButton"
          variant="primary"
          onClick={() => navigate("/table_data")}
        >
          Check Items{" "}
        </Button>
      </div>
    </div>
  );
}

export default Profile;
