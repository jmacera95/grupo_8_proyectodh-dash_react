import React, { useState, useEffect } from "react";
import SmallCard from "./SmallCard";

function ContentRowKPIS() {
  const [users, setUsers] = useState({});
  const [products, setProducts] = useState({});
  const [priceAvg, setPriceAvg] = useState({});
  const cardProps = [users, products,priceAvg]


  useEffect(() => {
    fetch("http://localhost:3030/api/users")
      .then((response) => response.json())
      .then((users) => setUsers({
        color: "primary",
        titulo: "Total users",
        valor: users.count,
        icono: "fas fa-user"
      }))

    fetch("http://localhost:3030/api/products")
      .then((response) => response.json())
      .then((products) => setProducts({
        color: "primary",
        titulo: "Total Products",
        valor: products.count,
        icono: "fas fa-car",
      });

      const initialPrice = 0;
      const sumPrices = products.vehicles.reduce(
        (accum, vehicle) => accum + vehicle.price,
        initialPrice);

      setPriceAvg({
        color: "warning",
        titulo: "Price Average",
        valor: (sumPrices / products.count).toFixed(2),
        icono: "fas fa-search-dollar"
      })


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
