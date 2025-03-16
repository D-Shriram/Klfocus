<<<<<<< HEAD
import React, { useState } from 'react';
import signpic from '../images/signup.gif';
import { NavLink, useHistory } from 'react-router-dom';

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "", email: "", password: "", cpassword: "", phone: "", address: "", year: "", program: ""
  });
  const [error, setError] = useState("");

  const handleInputs = (event) => {
    const { name, value } = event.target;
    setError(""); // Clear error when user types
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

    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json'
        },
        credentials: "include",
        body: JSON.stringify({ name, email, password, cpassword, phone, address, year, program })
      });

      const data = await res.json();
      
      if (!res.ok) {
        setError(data.error || "Registration failed");
      } else {
        window.alert("Registration Successful");
        history.push("/login");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred during registration. Please try again.");
    }
  };

  return (
    <>
      <style>
        {`
          body {
            margin: 0;
            font-family: 'Poppins', sans-serif;
            background-color: #f1f3f6;
          }

          .signup {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: linear-gradient(135deg, #6c63ff, #a8a7c6);
          }

          .container {
            width: 100%;
            max-width: 800px;
            padding: 0 20px;
          }

          .signup-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #fff;
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
            animation: fadeIn 1s ease-in-out;
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            justify-content: space-between;
            height: 100%;
            box-sizing: border-box;
          }

          .signup-form {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            width: 100%;
          }

          .signup-form h2 {
            margin-bottom: 1rem;
            color: #333;
            font-size: 2.25rem;
            text-align: center;
            font-weight: 600;
          }

          .signup-form .form-group {
            position: relative;
            margin-bottom: 1.5rem;
            width: 100%;
          }

          .signup-form .form-group label {
            position: absolute;
            top: 10px;
            left: 16px;
            font-size: 1rem;
            color: #888;
            transition: all 0.3s ease;
            pointer-events: none;
          }

          .signup-form .form-group input,
          .signup-form .form-group select {
            width: 100%;
            padding: 1rem 1.25rem;
            border: none;
            border-bottom: 2px solid #ddd;
            font-size: 1.1rem;
            outline: none;
            transition: all 0.3s ease;
            color: #333;
            padding-top: 18px;
            background-color: transparent;
          }

          .signup-form .form-group input:focus,
          .signup-form .form-group select:focus {
            border-color: #6c63ff;
            box-shadow: none;
          }

          .signup-form .form-group input:focus + label,
          .signup-form .form-group select:focus + label,
          .signup-form .form-group input:not(:placeholder-shown) + label,
          .signup-form .form-group select:not(:placeholder-shown) + label {
            top: -12px;
            left: 16px;
            font-size: 0.85rem;
            color: #6c63ff;
          }

          .signup-form .form-button {
            display: flex;
            justify-content: center;
            margin-top: 1.5rem;
          }

          .signup-form .form-submit {
            background-color: #6c63ff;
            border: none;
            color: #fff;
            padding: 1rem 2rem;
            border-radius: 30px;
            font-size: 1.1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(108, 99, 255, 0.3);
            width: 100%;
          }

          .signup-form .form-submit:hover {
            background-color: #5a54d2;
            box-shadow: 0 10px 20px rgba(108, 99, 255, 0.4);
          }

          .signup-image {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin-top: 1rem;
            text-align: center;
          }

          .signup-image img {
            width: 30px;  /* Small size for the GIF */
            height: auto;
            margin-right: 10px;
          }

          .signup-image-link {
            display: inline-block;
            color: #6c63ff;
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

          .error-message {
            color: #dc3545;
            background-color: #f8d7da;
            border: 1px solid #f5c6cb;
            border-radius: 4px;
            padding: 10px;
            margin-bottom: 15px;
            text-align: center;
            width: 100%;
          }
        `}
      </style>

      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2>Sign Up</h2>
              {error && <div className="error-message">{error}</div>}
              <form method="POST" className="register-form" id="register-form" onSubmit={PostData}>
                <div className="form-group">
                  <input type="text" name="name" id="name" autoComplete="off"
                    value={user.name}
                    onChange={handleInputs}
                    placeholder=" " />
                  <label htmlFor="name">Your name here</label>
                </div>

                <div className="form-group">
                  <input type="email" name="email" id="email" autoComplete="off"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder=" " />
                  <label htmlFor="email">Your KL mail ID here</label>
                </div>

                <div className="form-group">
                  <input type="text" name="address" id="address" autoComplete="off"
                    value={user.address}
                    onChange={handleInputs}
                    placeholder=" " />
                  <label htmlFor="address">University ID</label>
                </div>

                <div className="form-group">
                  <input type="password" name="password" id="password" autoComplete="off"
                    value={user.password}
                    onChange={handleInputs}
                    placeholder=" " />
                  <label htmlFor="password">Enter your password</label>
                </div>

                <div className="form-group">
                  <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInputs}
                    placeholder=" " />
                  <label htmlFor="cpassword">Re-enter your password</label>
                </div>

                <div className="form-group">
                  <input type="text" name="phone" id="phone" autoComplete="off"
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder=" " />
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
                  <label htmlFor="year">Select Year</label>
                </div>

                <div className="form-group">
                  <select name="program" value={user.program} onChange={handleInputs} disabled={!user.year}>
                    <option value="">Select Program</option>
                    {user.year && programOptions[user.year].map((program, index) => (
                      <option key={index} value={program}>{program}</option>
                    ))}
                  </select>
                  <label htmlFor="program">Select Program</label>
                </div>

                {/* Added GIF and Already Registered Link */}
                <div className="signup-image">
                  <img src={signpic} alt="Sign up illustration" />
                  <NavLink to="/login" className="signup-image-link">Already Registered?</NavLink>
                </div>

                {/* Register Button */}
                <div className="form-group form-button">
                  <input type="submit" name="register" id="register" className="form-submit" value="Register" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
=======
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
    
    const res = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      credentials: "include",
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
                    placeholder="Your KL mail ID here" />
                </div>

                <div className="form-group">
                  <label htmlFor="address">
                    <i className="fa fa-briefcase" aria-hidden="true"></i>
                  </label>
                  <input type="text" name="address" id="address" autoComplete="off"
                    value={user.address}
                    onChange={handleInputs}
                    placeholder="University ID" />
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
>>>>>>> 7d7aefbbb398a40eb1e067303007be1d7c8015d9
