import React, { useState, useEffect } from "react";
import VehicleRow from "./VehicleRow";

function VehiclesList() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/api/products")
      .then((response) => response.json())
      .then((data) => {
        setVehicles(data.vehicles);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="col-md-12">
        {/*<!-- PRODUCTS LIST -->*/}
        <h1 className="h3 mb-2 text-gray-800">
          All the vehicles in the Database
        </h1>

        {/*<!-- DataTales Example -->*/}
        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>Legal Identifier</th>
                    <th>Price</th>
                    <th>Kilometers</th>
                    <th>Location</th>
                    <th>Total Owners</th>
                  </tr>
                </thead>

                <tbody>
                  {vehicles.map((vehicle, i) => {
                    return (
                      <VehicleRow
                        model={vehicle.vehicles_models.name}
                        legal_identifier={vehicle.legal_identifier}
                        price={vehicle.price}
                        kilometers={vehicle.kilometers}
                        location={vehicle.location_province}
                        total_owners={vehicle.total_owners}
                        key={vehicle.legal_identifier + i}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default VehiclesList;
