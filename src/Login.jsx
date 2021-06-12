import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { lightBlue } from "@material-ui/core/colors";
// import Ragistration from "./Ragistration"

const Login = () => {
        // Take the Number at here
    const [fullNo, setFullNo] = useState({phoneNO:"",});
    const [otpField , setotpField] = useState("");


    const getOtp = () =>{
        console.log("Clicked");
        setotpField(
            <>
            <input type="number" 
              placeholder="Enter OTP"
            />
            </>
          )
        };


      const inputEvent = (event) => {
        const {value , name} = event.target;
          setFullNo((preValue) =>{
                console.log(preValue);
                return {
                    ...preValue,
                    [name] : value,
                }
          });
        };
    
              //    After taking input we use to store it
     const onSubmits = (event) =>{
         event.preventDefault();

         alert("form submitted");
      };


  return (
    <>
    <form onSubmit={onSubmits} style = {{ textAlign: "center"}} >
      <div>
        <h1>Enter your number</h1>
        <input
          type="number"
          placeholder="Enter your mobile number :"
          name="phoneNo"
          onChange={inputEvent}  
          value={fullNo.phoneNo}
          minLength={10}
          maxLength={12}
          required
          />
        <br />
        {otpField}
        <br />
        <Button className="btn btn-light" onClick={getOtp} >Sign up</Button>
      </div>
      </form>
    </>
  );
};

export default Login;
