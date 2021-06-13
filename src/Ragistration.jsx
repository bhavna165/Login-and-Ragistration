import React, { useState } from "react";
// import Button from "@material-ui/core/Button";
import "./Ragistration.css";

const Ragistration = () => {
  // Take the input at here
  const [fullName, setFullName] = useState({
    //General information
    firstName: "",
    lastName: "",
    fatherFirstName: "",
    mobileNumber: "",
    schoolStream: "",
    villageName: "",
    district: "",

    //Personal information
    interest: "",
    adharNo: "",
    schoolName: "",
    tenth: "",
    eleventh: "",
    twelth: "",
    category: "",
    income: "",
    otp: "",
  });

  const inputEvent = (event) => {
    //   console.log(event.target.value);   Use for testing
    //   console.log(event.target.name);    Use for testing

    const { value, name } = event.target;

    setFullName((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  //    After taking input we use to store it
  const onSubmits = (event) => {
    event.preventDefault();
    alert("form submitted");
  };

  return (
    <>
      <h1>Ragistration page</h1>
      <form onSubmit={onSubmits} style={{ textAlign: "center" }}>
        {/* <div> */}
          <input
            type='text'
            placeholder='Enter your first name'
            name='firstName'
            onChange={inputEvent}
            value={fullName.firstName}
            minLength="4"
            required
          />
          <br />
          <input
            type='text'
            placeholder='Enter your last name'
            name='lastName'
            onChange={inputEvent}
            value={fullName.lastName}
            required
          />
          <br />
          <input
            type='text'
            placeholder='Enter your Father name :'
            name='fatherFirstName'
            onChange={inputEvent}
            value={fullName.fatherFirstName}
            required
          />
          <br />
          <input
            type='tel'
            placeholder='Enter your mobile number :'
            name='mobileNumber'
            minLength="10"
            maxLength="13"
            pattern="[789][0-9]{9}"
            onChange={inputEvent}
            value={fullName.mobileNumber}
            required
          />
          <br />
          <input
            type='text'
            placeholder='Enter Subject want to addmission:'
            name='schoolStream'
            onChange={inputEvent}
            value={fullName.schoolStream}
          />
          <br />
          <input
            type='text'
            placeholder='Enter your villageName :'
            name='villageName'
            onChange={inputEvent}
            value={fullName.villageName}
          />
          <br />
          <input
            type='text'
            placeholder='Enter your District :'
            name='district'
            onChange={inputEvent}
            value={fullName.district}
          />
          <br />

          <h1>Personal information</h1>
          <input
            type='text'
            placeholder='Interested Graduation stream :'
            name='interest'
            onChange={inputEvent}
            value={fullName.interest}
          />
          <br />
          <input
            type='tel'
            placeholder='Enter your Adhar Number :'
            name='adharNo'
            minLength="12"
            maxLength="12"
            onChange={inputEvent}
            value={fullName.adharNo}
          />
          <br />
          <input
            type='text'
            placeholder='Enter your School name :'
            name='schoolName'
            minLength= "10"
            onChange={inputEvent}
            value={fullName.schoolName}
          />
          <br />
          <input
            type='tel'
            placeholder='Enter your 10th class percentage :'
            name='tenth'
            minLength="2"
            onChange={inputEvent}
            value={fullName.tenth}
          />
          <br />
          <input
            type='tel'
            placeholder='Enter your 11th class percentage :'
            name='eleventh'
            minLength="2"
            onChange={inputEvent}
            value={fullName.eleventh}
          />
          <br />
          <input
            type='tel'
            placeholder='Enter your 12th class percentage :'
            name='twelth'
            onChange={inputEvent}
            value={fullName.twelth}
            minLength="2"
          />
          <br />
          <input
            type='text'
            placeholder='Enter Category :'
            name='category'
            onChange={inputEvent}
            value={fullName.category}
          />
          <br />
          <input
            type='tel'
            placeholder='Enter father annual income :'
            name='income'
            onChange={inputEvent}
            value={fullName.income}
          />
          <br />
          <input
            type='tel'
            placeholder='Enter the otp :'
            name='otp'
            onChange={inputEvent}
            value={fullName.otp}
            minLength="6"
            maxLength="6"
            required
          />
          <br />
          <br />
          <br />
          <button>
            Submit form
          </button>
        {/* </div> */}
      </form>
    </>
  );
};

export default Ragistration;
