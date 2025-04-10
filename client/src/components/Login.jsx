<<<<<<< HEAD
import React, { useContext, useState } from 'react';
import login from '../images/login.gif';
import { NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../App';
import RESOLVANCE from '../images/RESOLVANCE-WHITE.png';

import phone from '../images/telephone.png';
import mail from '../images/email.png';
import address from '../images/address.png';

const Login = () => {
  const { state, dispatch } = useContext(UserContext);

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();
  
    const res = await fetch('/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        email, password
      })
    });
  
    const data = await res.json();
  
    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      localStorage.setItem("user", JSON.stringify(data));  // Store user info in localStorage
      dispatch({ type: "USER", payload: true });  // Update context state
      window.alert("Login Successful");
      history.push("/home");
    }
  };
  

  return (
    <>
      <section style={{ backgroundColor: "black", color: "white", padding: "20px" }} className="signup">
        <div><br></br><br></br></div>
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form row">
              <div className="signup-image col-md-6">
                <figure>
                  <img src={RESOLVANCE} alt="not found" />
                </figure>
                <NavLink to="/signup" className="login-image-link">CREATE AN ACCOUNT  | </NavLink>
                <NavLink to="/AdminLogin" className="login-image-link"> &nbsp;LOGIN AS ADMIN</NavLink>
              </div>
              <div className="col-md-6">
                <h2>Log In</h2>
                <hr />
                <form method="POST" className="register-form" id="register-form">

                  <div className="form-group">
                    <label htmlFor="email">
                      Email ID:
                    </label>
                    <input type="email" name="email" id="email" autoComplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your KL mail ID here" className='mx-2'></input>
                  </div>

                  <br />
                  <div className="form-group">
                    <label htmlFor="password">
                      Password:
                    </label>
                    <input type="password" name="password" id="password" autoComplete="off"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password" className='mx-2'></input>
                  </div>
                  <br />
                  <div className="form-group form-button">
                    {/* Add the button-73 class to the submit button */}
                    <input type="submit" name="signin" id="signin" className="form-submit button-73"
                      onClick={loginUser} value="Log In" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add the CSS styles for the button */}
      <style>
        {`
          /* Target the button-73 class specifically for smaller dimensions */
.form-group .button-73 {
    padding: 0.6rem 1rem; /* Reduced padding for smaller width and height */
    font-size: 0.9rem; /* Smaller font size */
    border-radius: 8em; /* Slightly smaller border radius */
    box-shadow: #ADCFFF 0 -6px 4px inset; /* Adjusted box-shadow for smaller size */
}

          .button-73 {
            appearance: none;
            background-color: #FFFFFF;
            border-radius: 8em;
            border-style: none;
            box-shadow: #ADCFFF 0 -12px 6px inset;
            box-sizing: border-box;
            color: #000000;
            cursor: pointer;
            display: inline-block;
            font-family: -apple-system, sans-serif;
            font-size: 0.9rem;
            font-weight: 700;
            letter-spacing: -.24px;
            margin: 0;
            outline: none;
            padding: 0.6rem 1rem;
            quotes: auto;
            text-align: center;
            text-decoration: none;
            transition: all .15s;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
          }

          .button-73:hover {
            background-color:rgb(254, 254, 255);
            box-shadow:rgb(0, 0, 0) 0 -6px 8px inset;
            transform: scale(1.125);
          }

          .button-73:active {
            transform: scale(1.025);
          }

          @media (min-width: 768px) {
            .button-73 {
              font-size: 1.5rem;
              padding: .75rem 2rem;
            }
          }
        `}
      </style>
    </>
  );
}

export default Login;
=======
import React, { useContext, useState } from 'react';
import login from '../images/login.gif';
import { NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../App';
import RESOLVANCE from '../images/RESOLVANCE-WHITE.png';

import phone from '../images/telephone.png';
import mail from '../images/email.png';
import address from '../images/address.png';

const Login = () => {
  const { state, dispatch } = useContext(UserContext);

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      console.log('Attempting to login with API URL:', process.env.REACT_APP_API_URL);
      
      const res = await fetch(`${process.env.REACT_APP_API_URL}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify({
          email,
          password
        })
      });

      let data;
      try {
        data = await res.json();
      } catch (err) {
        console.error('Error parsing response:', err);
        throw new Error('Server response was not in JSON format');
      }

      if (!res.ok) {
        throw new Error(data.error || `Login failed with status ${res.status}`);
      }

      dispatch({ type: "USER", payload: true });
      window.alert("Login Successful");
<<<<<<< HEAD
      history.push("/home");
=======
      history.push("/");
    } catch (error) {
      console.error("Login error:", error);
      if (error.message.includes('Server response was not in JSON format')) {
        window.alert("Server error. Please try again later.");
      } else {
        window.alert(error.message || "Invalid Credentials");
      }
>>>>>>> c505d60cc7272f53c68c681e92331ff68f7b7439
    }
  }

  return (
    <>
      <section style={{ backgroundColor: "black", color: "white", padding: "20px" }} className="signup">
        <div><br></br><br></br></div>
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form row">
              <div className="signup-image col-md-6">
                <figure>
                  <img src={RESOLVANCE} alt="not found" />
                </figure>
                <NavLink to="/signup" className="login-image-link">CREATE AN ACCOUNT  | </NavLink>
                <NavLink to="/AdminLogin" className="login-image-link"> &nbsp;LOGIN AS ADMIN</NavLink>
              </div>
              <div className="col-md-6">
                <h2>Log In</h2>
                <hr />
                <form method="POST" className="register-form" id="register-form">

                  <div className="form-group">
                    <label htmlFor="email">
                      Email ID:
                    </label>
                    <input type="email" name="email" id="email" autoComplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your KL mail ID here" className='mx-2'></input>
                  </div>

                  <br />
                  <div className="form-group">
                    <label htmlFor="password">
                      Password:
                    </label>
                    <input type="password" name="password" id="password" autoComplete="off"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password" className='mx-2'></input>
                  </div>
                  <br />
                  <div className="form-group form-button">
                    {/* Add the button-73 class to the submit button */}
                    <input type="submit" name="signin" id="signin" className="form-submit button-73"
                      onClick={loginUser} value="Log In" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add the CSS styles for the button */}
      <style>
        {`
          /* Target the button-73 class specifically for smaller dimensions */
.form-group .button-73 {
    padding: 0.6rem 1rem; /* Reduced padding for smaller width and height */
    font-size: 0.9rem; /* Smaller font size */
    border-radius: 8em; /* Slightly smaller border radius */
    box-shadow: #ADCFFF 0 -6px 4px inset; /* Adjusted box-shadow for smaller size */
}

          .button-73 {
            appearance: none;
            background-color: #FFFFFF;
            border-radius: 8em;
            border-style: none;
            box-shadow: #ADCFFF 0 -12px 6px inset;
            box-sizing: border-box;
            color: #000000;
            cursor: pointer;
            display: inline-block;
            font-family: -apple-system, sans-serif;
            font-size: 0.9rem;
            font-weight: 700;
            letter-spacing: -.24px;
            margin: 0;
            outline: none;
            padding: 0.6rem 1rem;
            quotes: auto;
            text-align: center;
            text-decoration: none;
            transition: all .15s;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
          }

          .button-73:hover {
            background-color:rgb(254, 254, 255);
            box-shadow:rgb(0, 0, 0) 0 -6px 8px inset;
            transform: scale(1.125);
          }

          .button-73:active {
            transform: scale(1.025);
          }

          @media (min-width: 768px) {
            .button-73 {
              font-size: 1.5rem;
              padding: .75rem 2rem;
            }
          }
        `}
      </style>
    </>
  );
}

export default Login;
>>>>>>> 7d7aefbbb398a40eb1e067303007be1d7c8015d9
