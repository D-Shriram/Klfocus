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
    if (name === "email") {
      const addressPart = value.split('@')[0]; // Extract the part before '@kluniversity.in'
      setUser({ ...user, [name]: value, address: addressPart });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const programOptions = {
    y21: ["Honours", "Regulars"],
    y22: ["Honours", "Regulars"],
    y23: ["Honours1", "Honours2", "Regulars", "HTI", "HTE", "HTR"],
    y24: ["Honours1", "Honours2", "Regulars", "HTI", "HTE", "HTR"]
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@kluniversity\.in$/;
    return emailRegex.test(email);
  };

  const PostData = async (event) => {
    event.preventDefault();
    const { name, email, password, cpassword, phone, address, year, program } = user;

    if (!validateEmail(email)) {
      alert("Email must end with @kluniversity.in");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    // if(phone.length !== 10){
    //   alert("Phone number must be 10 digits long");
    // }
  
    if (password !== cpassword) {
      alert("Passwords do not match");
      return;
    }

    if (!year || !program) {
      alert("Please select both year and program.");
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
      background: linear-gradient(135deg, #8B5CF6, #6D28D9); /* Violet gradient */
    }

    .signup-content {
      display: flex;
      flex-direction: row;
      background: #fff;
      padding: 2rem;
      border-radius: 30px;
      box-shadow: 0 15px 25px rgba(109, 40, 217, 0.2); /* Violet shadow */
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
      color: #6D28D9; /* Violet heading */
      font-size: 2rem;
      text-align: center;
    }

    .signup-form .form-group {
      position: relative;
      margin-bottom: 1.5rem;
    }

    /* Style for the labels */
    .signup-form .form-group label {
      position: absolute;
      top: 1rem;  /* Ensure label stays above input */
      left: 1rem;
      font-size: 1rem;
      color: #8B5CF6; /* Lighter violet */
      transition: 0.3s;
      pointer-events: none;
    }

    /* Style for the inputs */
    .signup-form .form-group input,
    .signup-form .form-group select {
      width: 100%;
      padding: 1.5rem 1rem 0.75rem; /* Adjusted top padding to ensure label doesn't overlap the border */
      border: 2px solid #E5E7EB;
      border-radius: 8px;
      font-size: 1rem;
      outline: none;
      transition: all 0.3s ease;
      background-color: #F9FAFB;
    }

    /* Focus style for inputs and select fields */
    .signup-form .form-group input:focus,
    .signup-form .form-group select:focus {
      border-color: #8B5CF6;
      box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
    }

    /* Floating label behavior when input is focused or contains text */
    .signup-form .form-group input:focus + label,
    .signup-form .form-group input:not(:placeholder-shown) + label,
    .signup-form .form-group select:focus + label {
      top: -0.75rem;  /* Position label above input */
      left: 1rem;
      font-size: 0.875rem;
      color: #6D28D9; /* Darker violet */
    }

    .signup-form .form-group option {
      padding: 0.75rem 1rem;
      font-size: 1rem;
    }

    .signup-form .form-button {
      display: flex;
      justify-content: center;
      margin-top: 1.5rem;
    }

    .signup-form .form-button .form-submit {
      background-color: #6D28D9;
      border: none;
      color: #fff;
      padding: 1rem 2rem;
      border-radius: 8px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 6px rgba(109, 40, 217, 0.2);
    }

    .signup-form .form-button .form-submit:hover {
      background-color: #5B21B6;
      transform: translateY(-2px);
      box-shadow: 0 6px 8px rgba(109, 40, 217, 0.3);
    }

    .signup-image {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 300px;
      padding: 2rem;
    }

    .signup-image figure {
      margin: 0;
      padding: 1rem;
    }

    .signup-image img {
      max-width: 100%;
      height: auto;
      border-radius: 16px;
      box-shadow: 0 10px 20px rgba(109, 40, 217, 0.15);
    }

    .signup-image-link {
      display: block;
      text-align: center;
      margin-top: 1.5rem;
      color: #6D28D9;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .signup-image-link:hover {
      color: #5B21B6;
      transform: scale(1.05);
    }

    hr {
      border: none;
      height: 2px;
      background: linear-gradient(to right, #8B5CF6, #6D28D9);
      margin: 1.5rem 0;
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

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .signup-content {
        flex-direction: column;
        padding: 1.5rem;
      }

      .signup-image {
        width: 100%;
        order: -1;
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
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              value={user.name}
              onChange={handleInputs}
              placeholder=" "
            />
            <label htmlFor="name">Your name here</label>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              value={user.email}
              onChange={handleInputs}
              placeholder=" "
            />
            <label htmlFor="email">Your KL mail ID here</label>
          </div>

          <div className="form-group">
            <input
              type="text"
              name="address"
              id="address"
              autoComplete="off"
              value={user.address}
              onChange={handleInputs}
              placeholder=" "
            />
            <label htmlFor="address">University ID</label>
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              value={user.password}
              onChange={handleInputs}
              placeholder=" "
            />
            <label htmlFor="password">Enter your password</label>
          </div>

          <div className="form-group">
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              autoComplete="off"
              value={user.cpassword}
              onChange={handleInputs}
              placeholder=" "
            />
            <label htmlFor="cpassword">Re-enter your password</label>
          </div>

          <div className="form-group">
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="off"
              value={user.phone}
              onChange={handleInputs}
              placeholder=" "
            />
            <label htmlFor="phone">Your phone number here</label>
          </div>

          <div className="form-group">
            <select name="year" value={user.year} onChange={handleInputs}>
              <option value="">Select Year</option>
              <option value="y21">Y21</option>
              <option value="y22">Y22</option>
              <option value="y23">Y23</option>
              <option value="y24">Y24</option>
            </select>
          </div>

          <div className="form-group">
            <select name="program" value={user.program} onChange={handleInputs} disabled={!user.year}>
              <option value="">Select Program</option>
              {user.year && programOptions[user.year].map((program, index) => (
                <option key={index} value={program}>{program}</option>
              ))}
            </select>
          </div>

          <div className="form-group form-button">
            <input type="submit" name="register" id="register" className="form-submit" value="Register" />
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
  );
};

export default Signup;
