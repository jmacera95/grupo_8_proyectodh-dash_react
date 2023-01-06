import React from "react";

function VehicleByModelRow(props) {
  return (
    <tr>
      <td> {props.model} </td>
      <td> {props.total} </td>
    </tr>
  );
}

export default VehicleByModelRow;