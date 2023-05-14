export const PasswordAuthentication = (password) => {
  if (password.length < 7) {
    console.log("Password should be at least 7 characters long");
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    console.log("Password should contain at least one uppercase letter");
    return false;
  }

  if (!/[!@#$%^&*]/.test(password)) {
    console.log(
      "Password should contain at least one special character (!@#$%^&*)"
    );
    return false;
  }
  return true;
};

export const EmailAuthentication = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    
  
    if (emailRegex.test(email)) {
      return true;
    } else {
        return false;
    }
}

export const phoneNoAuthentication = (phoneNumnber) => {
    const phoneRegex = /^[0-9]{10}$/;

    if (phoneRegex.test(phoneNumnber)) {
        return true;
    }
      return false;
}


export const pincodeAuthentication = (pincode) => {
  const numberString = pincode.toString();
  return numberString.length === 6; 
}