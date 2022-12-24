import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar/SideBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUsertType] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:3030/api/session", {credentials: "include"})
      .then((response) => response.json())
      .then((data) => {
        if (data.userLogged) {
          setIsLoggedIn(true)
          setUsertType(data.userLogged.user_type.user_type)
          setUser(data.userLogged);
        }
      });
  }, []);

  return (
    <React.Fragment>
      {isLoggedIn && userType === "admin" ? (
        <div id="wrapper">
          <SideBar 
            user={user}  
          />
        </div>
      ) : (
        <div className="d-flex justify-content-md-center align-items-center vh-100">
          <a className="text-secondary" href="http://localhost:3030/user/login"><h1>Please log in.</h1></a>
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
