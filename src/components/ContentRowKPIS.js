import React, { useState, useEffect } from "react";
import SmallCard from "./SmallCard";

function ContentRowKPIS() {
  const [users, setUsers] = useState({
    
  });
  const cardProps = [users]


  useEffect(() => {
    fetch("http://localhost:3030/api/users")
      .then((response) => response.json())
      .then((users) => setUsers({
        color: "primary",
        titulo: "Total users",
        valor: users.count,
        icono: "fas fa-user"
      }))
      // .catch(e => console.error(e));
    
  }, []);

  return (
    <React.Fragment>
      {/*<!-- Content Row -->*/}
      <div className="row">
        {cardProps.map((producto, index) => {
          return <SmallCard {...producto} key={index} />;
        })}
      </div>
    </React.Fragment>
  );
}
export default ContentRowKPIS;
