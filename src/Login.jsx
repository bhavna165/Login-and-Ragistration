import React, { useState } from "react";

const Login = () => {
        // Take the Number at here
        const [fullName, setFullName] = useState({
        phoneNO:"",
      });
  
      const inputEvent = (event) => {
        const {value , name} = event.target;
          setFullName((preValue) =>{
                console.log(preValue);
                return {
                    ...preValue,
                    [name] : value,
                }
          });
        };
    
              //    After taking input we use to store it
     const onSubmits = (event) =>{
      event.preventDefault()
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
          value={fullName.phoneNo}
          />
        <br />
        <button>Sign up</button>
      </div>
      </form>
    </>
  );
};

export default Login;
