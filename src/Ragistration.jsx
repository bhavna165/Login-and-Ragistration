import React, {useState} from "react";

const Ragistration = () => {
        // Take the input at here
    const [fullName, setFullName] = useState({
        //General information
        fname: "",
        lname: "",
        fatherName: "",
        phone:"",
        subject: "",
        address: "",
        district: "",

        //Personal information
        interest: "",
        adharNo: "",
        schoolName: "",
        tenth: "",
        eleventh: "",
        twelth: "",
        category: "",
        income:"",
        otp:"",
    });
  
      const inputEvent = (event) => {
    //   console.log(event.target.value);   Use for testing
    //   console.log(event.target.name);    Use for testing

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
    <form onSubmit={onSubmits}  style = {{ textAlign: "center"}} >
      <div>
        <h1>Ragistration page</h1>
        <input
          type="text"
          placeholder="Enter your first name"
          name="fname"
          onChange={inputEvent} 
          value={fullName.fname}
          />
        <br />
        <input
          type="text"
          placeholder='Enter your last name'
          name="lname"
          onChange={inputEvent}  
          value={fullName.lname}
          />
        <br />
        <input
          type="text"
          placeholder="Enter your Father name :"
          name="fatherName"
          onChange={inputEvent}  
          value={fullName.fatherName}
          />
        <br />
        <input
          type="number"
          placeholder="Enter your mobile number :"
          name="phone"
          onChange={inputEvent}  
          value={fullName.phone}
          />
        <br />
        <input
          type="text"
          placeholder="Enter Subject want to addmission:"
          name="subject"
          onChange={inputEvent}  
          value={fullName.subject}
          />
        <br />
        <input
          type="text"
          placeholder="Enter your address :"
          name="address"
          onChange={inputEvent}  
          value={fullName.address}
          />
        <br />
        <input
          type="text"
          placeholder="Enter your District :"
          name="district"
          onChange={inputEvent}  
          value={fullName.district}
          />
        <br />
    

        <h1>Personal information</h1>
        <input
          type="text"
          placeholder="Interested Graduation stream :"
          name="interest"
          onChange={inputEvent} 
          value={fullName.interest}
          />
        <br />
        <input
          type="number"
          placeholder="Enter your Adhar Number :"
          name="adharNo"
          onChange={inputEvent} 
          value={fullName.adharNo}
          />
        <br />
        <input
          type="text"
          placeholder="Enter your School name :"
          name="schoolName"
          onChange={inputEvent} 
          value={fullName.schoolName}
          />
        <br />
        <input
          type="number" 
          placeholder="Enter your 10th class percentage :"
          name="tenth"
          onChange={inputEvent} 
          value={fullName.tenth}
          />
        <br />
        <input
          type="number"
          placeholder="Enter your 11th class percentage :"
          name="eleventh"
          onChange={inputEvent} 
          value={fullName.eleventh}
          />
        <br />
        <input
          type="number"
          placeholder="Enter your 12th class percentage :"
          name="twelth"
          onChange={inputEvent} 
          value={fullName.twelth}
          />
        <br />
        <input
          type="text"
          placeholder="Enter Category :"
          name="category"
          onChange={inputEvent} 
          value={fullName.category}
          />
        <br />
        <input
          type="number"
          placeholder="Enter father annual income :"
          name="income"
          onChange={inputEvent} 
          value={fullName.income}
          />
        <br />
        <input
          type="number"
          placeholder="Enter the otp :"
          name="otp"
          onChange={inputEvent} 
          value={fullName.otp}
          />
        <br />
        <button>Sign up</button>
      </div>
      </form>
    </>
  );
};

export default Ragistration;
