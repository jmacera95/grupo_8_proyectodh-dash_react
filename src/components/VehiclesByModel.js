import React, { useState, useEffect } from "react";
import VehicleByModelRow from "./VehicleByModelRow";

function VehiclesByModel() {
  const [vehiclesByModel, setVehiclesByModel] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/api/products")
      .then((response) => response.json())
      .then((data) => {
        const vehiclesByModel = data.vehicles.reduce((x, y) => {
          (x[y.vehicles_models.name] = x[y.vehicles_models.name] || []).push(y);
          return x;
        }, {});
        let totalVehiclesByModel = [];
        for (const [key, value] of Object.entries(vehiclesByModel)) {
          totalVehiclesByModel.push({
            model: key,
            totalVehicles: value.length,
          });
        }
        setVehiclesByModel(totalVehiclesByModel);
      });
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Total Vehicles By Model
          </h5>
        </div>
        {vehiclesByModel.length === 0 && (
          <div className="card-body">
            <p>Loading...</p>
          </div>
        )}
        {vehiclesByModel.length > 0 && (
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
                    <th>Total Vehicles</th>
                  </tr>
                </thead>

                <tbody>
                  {vehiclesByModel.map((vehicleModel, i) => {
                    return (
                      <VehicleByModelRow
                        model={vehicleModel.model}
                        total={vehicleModel.totalVehicles}
                        key={vehicleModel.model + i}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VehiclesByModel;
