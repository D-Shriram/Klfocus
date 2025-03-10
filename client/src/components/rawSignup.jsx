// import React, {useState} from 'react';
// import signpic from '../images/signup.gif';
// import { NavLink, useHistory } from 'react-router-dom';
// import phone from '../images/telephone.png';
// import mail from '../images/email.png';
// import address from '../images/address.png';
// import "./Signup.css";

// const Signup=()=>{
//   const history=useHistory();
//   const [user, setUser] = useState({
//     name:"",email:"",password:"",cpassword:"",phone:"",address:"" 
//   });
//   let name,value;
//   const handleInputs=(event)=>{
//        //console.log(event);
//        name=event.target.name;
//        value=event.target.value;

//        setUser({...user, [name]:value});
//   }
//   //we will use fetch API to post data which returns a promise
//   const PostData=async(event)=>{
//     event.preventDefault();
//     const {name, email, password,cpassword, phone, address}=user;

//     const res= await fetch("/register",{
//       //these key-value pair are similar to data or elements shown on postman while posting the data
//       "method":"POST",
//       headers:{
//         "Content-Type":"application/json",
//         'Accept': 'application/json'
//       },
//       credentials:"same-origin",
//       body:JSON.stringify({
//         name, email, password,cpassword, phone, address
//       })
//     });
//     const data= await res.json();

//     if(data.status===400 || !data){
//         window.alert("Invalid Credentials");
//         console.log("Invalid Credentials");
//     }else{
//       window.alert("Registration Successful");
//       console.log("Registration Successful");

//       history.push("/login");
//     }
//   }
//   return(
//     <>
//       <section className="signup">
//        <div className="container mt-2">
//          <div className="signup-content">
//          <h2 className='text-center'>Sign Up</h2>
//          <hr />
//            <div className="signup-form row">
             
//              <div className="col-md-6">
//              <form method="POST" className="register-form" id="register-form">
//               <div className="form-group">
//                 <label htmlFor="name">
//                 <i className="fa fa-user" aria-hidden="true"></i>
//                 </label>
//                 <input type="text" name="name" id="name" autoComplete="off"
//                 value={user.name}
//                 onChange={handleInputs} 
//                 placeholder="Your name here" className='col-10'></input>
//               </div>
               
//                <br />
//               <div className="form-group">
//                 <label htmlFor="email">
//                 <i className="fa fa-envelope" aria-hidden="true"></i>
//                 </label>
//                 <input type="email" name="email" id="email" autoComplete="off"
//                 value={user.email}
//                 onChange={handleInputs} 
//                 placeholder="Your email ID here" className='col-10'></input>
//               </div>

// <br />
//               <div className="form-group">
//                 <label htmlFor="password">
//                 <i className="fa fa-lock" aria-hidden="true"></i>
//                 </label>
//                 <input type="password" name="password" id="password" autoComplete="off"
//                 value={user.password}
//                 onChange={handleInputs} 
//                 placeholder="Enter your password" className='col-10'></input>
//               </div>

//               <br />
//               <div className="form-group">
//                 <label htmlFor="password">
//                 <i className="fa fa-lock" aria-hidden="true"></i>
//                 </label>
//                 <input type="password" name="cpassword" id="cpassword" autoComplete="off"
//                 value={user.cpassword}
//                 onChange={handleInputs} 
//                 placeholder="Re-enter your password" className='col-10'></input>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="phone">
//                 <i className="fa fa-phone-square" aria-hidden="true"></i>
//                 </label>
//                 <input type="text" name="phone" id="phone" autoComplete="off"
//                 value={user.phone}
//                 onChange={handleInputs} 
//                 placeholder="Your phone number here" className='col-10'></input>
//               </div>

//               <br />
//               <div className="form-group">
//                 <label htmlFor="address">
//                 <i className="fa fa-briefcase" aria-hidden="true"></i>
//                 </label>
//                 <input type="text" name="address" id="address" autoComplete="off"
//                 value={user.address}
//                 onChange={handleInputs} 
//                 placeholder="Your address" className='col-10'></input>
//               </div>

//               <div className="form-group form-button">
//                 <input type="submit" name="register" id="register" onClick={PostData} className="form-submit btn btn-outline-primary" value="Register"/>
//               </div>
//              </form>
//              </div>
//              <div className="signup-image col-md-6">
//               <figure>
//                 <img src={signpic} height="300" width="300" alt="not found"/>
//               </figure>
//               <NavLink to="/login" className="signup-image-link">Already Registered?</NavLink>
//              </div>
//            </div>
//          </div>
//        </div>
//       </section>
      
//     </>
//   )
// }

// export default Signup;



import React, { useState } from 'react';
import signpic from '../images/signup.gif';
import { NavLink, useHistory } from 'react-router-dom';
import phone from '../images/telephone.png';
import mail from '../images/email.png';
import address from '../images/address.png';
import WaterDropGrid from './WaterDropGrid'; 

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "", email: "", password: "", cpassword: "", phone: "", address: "", year: "", program: ""
  });
  const [error, setError] = useState("");

  const handleInputs = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };


  const programOptions = {
    y21: ["Honours", "Regulars"],
    y22: ["Honours", "Regulars"],
    y23: ["Honours1", "Honours2", "Regulars", "HTI", "HTE", "HTR"],
    y24: ["Honours1", "Honours2", "Regulars", "HTI", "HTE", "HTR"]
  };
  // let name, value;
  // const handleInputs = (event) => {
  //   name = event.target.name;
  //   value = event.target.value;
  //   setUser({ ...user, [name]: value });
  // }


  // const handleInputs = (event) => {
  //   const { name, value } = event.target;
  //   setUser({ ...user, [name]: value });
  //   if (name === 'year') {
  //     setUser({ ...user, year: value, program: "" });
  //   }
  // };


  // const PostData = async (event) => {
  //   event.preventDefault();
  //   const { name, email, password, cpassword, phone, address } = user;

  //   const res = await fetch("/register", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       'Accept': 'application/json'
  //     },
  //     credentials: "same-origin",
  //     body: JSON.stringify({
  //       name, email, password, cpassword, phone, address
  //     })
  //   });
  //   const data = await res.json();

  //   if (data.status === 400 || !data) {
  //     window.alert("Invalid Credentials");
  //   } else {
  //     window.alert("Registration Successful");
  //     history.push("/login");
  //   }
  // }

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@kluniversity\.in$/;
    return emailRegex.test(email);
  };

  const PostData = async (event) => {
    event.preventDefault();
    const { name, email, password, cpassword, phone, address, year, program } = user;

    if (!validateEmail(email)) {
      setError("Email must end with @kluniversity.in");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
  
    if (password !== cpassword) {
      setError("Passwords do not match");
      return;
    }

    if (!year || !program) {
      setError("Please select both year and program.");
      return;
    }
    
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      credentials: "same-origin",
      body: JSON.stringify({ name, email, password, cpassword, phone, address, year, program })
    });

    const data = await res.json();
    if (data.status === 400 || !data) {
      // setError("Invalid Credentials");
    window.alert("Invalid Credentials");
    } else {
      window.alert("Registration Successful");
      history.push("/login");
    }
  };

  return (
    <>
      <style>
        {`
          body {
            margin: 0;
            font-family: 'Roboto', sans-serif;
            background-color: #f7f7f7;
          }

          .signup {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: linear-gradient(135deg, #ff9a9e, #fad0c4);
          }

          .signup-content {
            display: flex;
            flex-direction: row;
            background: #fff;
            padding: 2rem;
            border-radius: 30px;
            box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
            animation: fadeIn 1s ease-in-out;
            width: 100%;  //80
            max-width: 1200px;
          }

          .signup-form {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .signup-form h2 {
            margin-bottom: 1rem;
            color: #333;
            font-size: 2rem;
            text-align: center;
          }

          .signup-form .form-group {
            position: relative;
            margin-bottom: 1rem;
          }

          .signup-form .form-group label {
            position: absolute;
            top: 50%;
            left: 1rem;
            transform: translateY(-50%);
            color: #888;
            font-size: 1.2rem;
          }

          .signup-form .form-group input {
            width: 100%;
            padding: 0.75rem 1rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
            outline: none;
            transition: all 0.3s ease;
          }

          .signup-form .form-group option {
            width: 100%;
            padding: 0.75rem 1rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
            outline: none;
            transition: all 0.3s ease;
          }

          .signup-form .form-group input:focus {
            border-color: #007bff;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
          }

          .signup-form .form-button {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
          }

          .signup-form .form-button .form-submit {
            background-color: #007bff;
            border: none;
            color: #fff;
            padding: 0.75rem 1.5rem;
            border-radius: 5px;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 5px 10px rgba(0, 123, 255, 0.3);
          }

          .signup-form .form-button .form-submit:hover {
            background-color: #0056b3;
            box-shadow: 0 10px 15px rgba(0, 123, 255, 0.4);
          }

          .signup-image {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 300px;
          }

          .signup-image figure {
            margin: 0;
          }

          .signup-image img {
            max-width: 100%;
            height: auto;
            border-radius: 10px;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          }

          .signup-image-link {
            display: block;
            text-align: center;
            margin-top: 1rem;
            color: #007bff;
            text-decoration: none;
            font-weight: bold;
          }

          .signup-image-link:hover {
            text-decoration: underline;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2>Sign Up</h2>
              <hr />
              <form method="POST" className="register-form" id="register-form" onSubmit={PostData}>
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </label>
                  <input type="text" name="name" id="name" autoComplete="off"
                    value={user.name}
                    onChange={handleInputs}
                    placeholder="Your name here" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </label>
                  <input type="email" name="email" id="email" autoComplete="off"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="Your email ID here" />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </label>
                  <input type="password" name="password" id="password" autoComplete="off"
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="Enter your password" />
                </div>

                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </label>
                  <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInputs}
                    placeholder="Re-enter your password" />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="fa fa-phone-square" aria-hidden="true"></i>
                  </label>
                  <input type="text" name="phone" id="phone" autoComplete="off"
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder="Your phone number here" />
                </div>

                <div className="form-group">
                  <label htmlFor="address">
                    <i className="fa fa-briefcase" aria-hidden="true"></i>
                  </label>
                  <input type="text" name="address" id="address" autoComplete="off"
                    value={user.address}
                    onChange={handleInputs}
                    placeholder="Your address" />
                </div>

                <div className="form-group">
                  <label htmlFor="year"></label>
                  <select name="year" value={user.year} onChange={handleInputs}>
                    <option value="">Select Year</option>
                    <option value="y21">Y21</option>
                    <option value="y22">Y22</option>
                    <option value="y23">Y23</option>
                    <option value="y24">Y24</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="program"></label>
                  <select name="program" value={user.program} onChange={handleInputs} disabled={!user.year}>
                    <option value="">Select Program</option>
                    {user.year && programOptions[user.year].map((program, index) => (
                      <option key={index} value={program}>{program}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group form-button">
                  <input type="submit" name="register" id="register" onClick={PostData} className="form-submit" value="Register" />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src={signpic} alt="Sign up illustration" />
              </figure>
              <NavLink to="/login" className="signup-image-link">Already Registered?</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup;
