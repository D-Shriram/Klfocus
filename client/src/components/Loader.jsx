import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import "./Loader.css"; // Import the CSS file

const Loader = ({ children }) => {
  const { dispatch } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const loggedInUser = localStorage.getItem("user");
      if (loggedInUser) {
        dispatch({ type: "USER", payload: true });
      } else {
        dispatch({ type: "USER", payload: false });
      }
      setLoading(false);
    }, 5000); // Simulating loading delay
  }, [dispatch]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader">
          <span>F</span>
          <span>O</span>
          <span>C</span>
          <span>U</span>
          <span>S</span>
          <span></span>
          <span>R</span>
          <span>E</span>
          <span>S</span>
          <span>O</span>
          <span>L</span>
          <span>V</span>
          <span>A</span>
          <span>N</span>
          <span>C</span>
          <span>E</span>
          <span>...</span>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default Loader;
