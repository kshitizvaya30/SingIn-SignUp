import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Context = createContext();
const AppContext = ({ children }) => {
  const navigate = useNavigate();
  const [rowData, setRowData] = useState([]);
  const [user, setUser] = useState({
    id: "",
    signInId: "",
    password: "",
    phone_number: "",
    isLoggedIn: false,
    name: "",
    email: "",
    city: "",
    state: "",
    pincode: "",
  });

  ///Login Function
  const userLogin = (LoginId, pass, loggedIn, setLoading) => {
    let data = JSON.stringify({
      loginId: LoginId,
      password: pass,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8080/api/signIn",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        const data = response.data;

        if (response.status === 200) {
          setUser((prevUser) => ({
            ...prevUser,
            signInId: LoginId,
            isLoggedIn: loggedIn,
            id: data[0].id,
            email: data[0].email !== undefined ? data[0].email : "",
            name: data[0].name !== undefined ? data[0].name : "",
            phone_number:
              data[0].phone_number !== undefined ? data[0].phone_number : "",
            city: data[0].city !== undefined ? data[0].city : "",
            state: data[0].state !== undefined ? data[0].state : "",
            pincode: data[0].pincode !== undefined ? data[0].pincode : "",
          }));
          navigate("/profile");
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          setTimeout(() => {
            setLoading(false);
            alert("Invalid Credentials");
          }, 1000);
        } else {
          console.log("Other error occurred");
          console.log(error);
        }
      });
  };

  // SignUp function
  const userSignUp = (user, setLoading) => {
    let data = JSON.stringify(user);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8080/api/signUp",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        if (response.status === 200) {
          setUser((prevUser) => ({
            ...prevUser,
            id: response.data.id,
            signInId: user.email,
            phone_number: user.phone_number,
            name: user.name,
            email: user.email,
            isLoggedIn: true,
          }));

          setTimeout(() => {
            setLoading(false);
            navigate("/profile");
          }, 1000);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          setTimeout(() => {
            setLoading(false);
            alert("User Already Exists");
          }, 1000);
        } else {
          setTimeout(() => {
            setLoading(false);
            alert("Other error occurred");
            console.log(error);
          }, 1000);
        }
      });
  };

  const updateUserData = (userDetails) => {
    let data = JSON.stringify(userDetails);
    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: "http://localhost:8080/api/updateUserData",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        if (response.status === 200) {
          setUser((prevUser) => ({
            ...prevUser,
            signInId: userDetails.email,
            phone_number: userDetails.phone_number,
            password: userDetails.password,
            city: userDetails.city,
            state: userDetails.state,
            pincode: userDetails.pincode,
            isLoggedIn: true,
          }));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getItems = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:8080/api/items/${user.id}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        setRowData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addNewRow = async (newRow, showModal) => {
    axios
      .post("http://localhost:8080/api/items", newRow)
      .then((response) => {
        console.log("Item added successfully:", response.data);
        showModal(false);
        alert("Item Added SuccessFully");
      })
      .catch((error) => {
        console.error("Failed to add item:", error);
        alert("Failed to Add Item");
      });
  };


  const updateNewRow = async (newRow, updateModal) => {
    axios
      .put("http://localhost:8080/api/items", newRow)
      .then((response) => {
        console.log("Item Updated successfully:", response.data);
        updateModal(false);
        alert("Item Updated SuccessFully");
      })
      .catch((error) => {
        console.error("Failed to Update item:", error);
        alert("Failed to Update Item");
      });
  };


    const handleDelete = async (itemId, userId) => {
      try {
        await axios.delete(`http://localhost:8080/api/items/${itemId}/${userId}`);
        console.log('Item deleted successfully');
        alert("Item Deleted SuccessFully");
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    };

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        userLogin,
        userSignUp,
        updateUserData,
        getItems,
        rowData,
        setRowData,
        addNewRow,
        updateNewRow,
        handleDelete
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
