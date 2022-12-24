import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar/SideBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUsertType] = useState("");

  useEffect(() => {
    fetch("http://localhost:3030/api/session", {credentials: "include"})
      .then((response) => response.json())
      .then((data) => {
        if (data.userLogged) {
          setIsLoggedIn(true)
          setUsertType(data.userLogged.user_type.user_type)
        }
      });
  }, []);

  return (
    <React.Fragment>
      {isLoggedIn && userType === "admin" ? (
        <div id="wrapper">
          <SideBar />
        </div>
      ) : (
        <div className="d-flex justify-content-md-center align-items-center vh-100">
          <h1>Please log in.</h1>
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
