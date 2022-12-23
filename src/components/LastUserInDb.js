import React, { useState, useEffect } from "react";

function LastUserinDb() {
  const [users, setUsers] = useState([]);
  const [lastUserInDb, setLastUserInDb] = useState({});
  const [userImage, setUserImage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3030/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch(e => console.error(e));
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      const lastUserId = users[users.length - 1].id;
      setUserImage(`http://localhost:3030/api/users/${lastUserId}/image`)
      fetch(`http://localhost:3030/api/users/${lastUserId}`)
        .then((response) => response.json())
        .then((user) => setLastUserInDb(user))
        .catch(e => console.error(e));
    }
  }, [users]);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Last User in Data Base
          </h5>
        </div>
        { Object.keys(lastUserInDb).length === 0 &&
            <div className="card-body">
                <p>Loading...</p> 
            </div>
        }
        {
            Object.keys(lastUserInDb).length > 0 &&
            <div className="card-body">
                <div className="text-center">
                    <img
                    className="w-50 img-fluid px-3 px-sm-4 mt-3 mb-4"
                    style={{ width: "40rem" }}
                    src={userImage}
                    alt=" Star Wars - Mandalorian "
                    />
                </div>
                <div>
                    <h5>{lastUserInDb.first_name} {lastUserInDb.last_name}</h5>
                    <i className="fas fa-envelope fa-fw"></i> {lastUserInDb.email}
                    <br></br>
                    <i className="fas fa-phone fa-fw"></i> {lastUserInDb.phone_number}
                </div>
            </div>
        }
      </div>
    </div>
  );
}

export default LastUserinDb;
