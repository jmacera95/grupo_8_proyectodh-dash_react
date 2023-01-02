import React from "react";

function VehicleRow(props) {
  return (
    <tr>
      <td> {props.model} </td>
      <td> {props.legal_identifier} </td>
      <td> {props.price} </td>
      <td> {props.kilometers} </td>
      <td> {props.location} </td>
      <td> {props.total_owners} </td>
    </tr>
  );
}

export default VehicleRow;