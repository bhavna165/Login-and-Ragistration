import React, { useState } from "react";
// import Button from "@material-ui/core/Button";
import "./Login.css";

const LoginTest = () => {
  const [name, setFullName] = useState({
    mobileNumber: "",
    otp: "",
  });

  const inputEvent = (event) => {
    const {value, name} = event.target;
    setFullName((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmits = (event) => {
    event.preventDefault();
    // console.log(name.mobileNumber);
    alert("Sending otp...");
  };

  const checkOtp = (event) => {
    event.preventDefault();
    console.log(name.otp);
    alert("Your OTP are checking ......... ");
  };
  return (
    <>
      <h1>Fill the form :</h1>
      {/* <form onSubmit={onSubmits}> */}
      <div className='first_one'>
        <div className='show'>
          <form onSubmit={onSubmits}>
            <input
              type='tel'
              placeholder='Enter your number :'
              name='mobileNumber'
              minLength="10"
              maxLength="13"
              pattern="[789][0-9]{9}"
              onChange={inputEvent}
              value={name.mobileNumber}
              required
            />
            <br />
            <button type="submit">Get OTP</button>

            {/* <Button
              type='submit'
              value='submit'
              variant='contained'
              color='primary'
              href='#contained-buttons'
              onClick={onSubmits}
              autoComplete='off'>
              Get otp
            </Button> */}
          </form>

          <form onSubmit={checkOtp}>
            <br />
            <input
              type='tel'
              placeholder='Enter your OTP :'
              name='otp'
              onChange={inputEvent}
              value={name.otp}
              minLength="6"
              maxLength="6"
              required
            />
            <br />
            <button type="submit">Submit HERE</button>

            {/* <Button
              type='submit'
              variant='contained'
              color='primary'
              href='#contained-buttons'
              onClick={checkOtp}>
              Login
            </Button> */}
            <br />
          </form>
        </div>
      </div>
      {/* </form> */}
    </>
  );
};

export default LoginTest;