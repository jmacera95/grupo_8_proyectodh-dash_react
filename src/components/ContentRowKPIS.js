import React, { useState, useEffect } from "react";
import SmallCard from "./SmallCard";

function ContentRowKPIS() {
  const [users, setUsers] = useState({});
  const [vehicles, setVehicles] = useState({});
  const [avgPrice, setAvgPrice] = useState({});
  const cardProps = [users, vehicles, avgPrice];

  useEffect(() => {
    fetch("http://localhost:3030/api/users")
      .then((response) => response.json())
      .then((users) =>
        setUsers({
          color: "primary",
          titulo: "Total users",
          valor: users.count,
          icono: "fas fa-user",
        })
      )
      .catch((e) => console.error(e));
    fetch("http://localhost:3030/api/products")
      .then((response) => response.json())
      .then((data) => {
        setVehicles({
          color: "secondary",
          titulo: "Total vehicles",
          valor: data.count,
          icono: "fas fa-car",
        });
        const initialPrice = 0;
        const sumPrices = data.vehicles.reduce(
          (accum, vehicle) => accum + vehicle.price,
          initialPrice
        );
        setAvgPrice({
          color: "success",
          titulo: "Avg Vehicle Price",
          valor: (sumPrices / data.count).toFixed(2),
          icono: "fas fa-dollar-sign",
        });
      })
      .catch((e) => console.error(e));
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
