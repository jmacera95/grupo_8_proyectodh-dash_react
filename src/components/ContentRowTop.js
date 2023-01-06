import React from "react";
import ContentRowKPIS from "./ContentRowKPIS";
import LastUserInDb from "./LastUserInDb";
import VehiclesList from "./VehiclesList";
import VehiclesByModel from "./VehiclesByModel";

function ContentRowTop() {
  return (
    <React.Fragment>
      {/*<!-- Content Row Top -->*/}
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">DrivIT Dashboard</h1>
        </div>

        {/*<!-- Content Row Movies-->*/}
        <ContentRowKPIS />
        {/*<!-- End movies in Data Base -->*/}

        {/*<!-- Content Row Last User in Data Base -->*/}
        <div className="row">
          {/*<!-- Last User in DB -->*/}
          <LastUserInDb />
          <VehiclesByModel />

          {/*<!-- End content row last user in Data Base -->*/}
        </div>

        <div>
          <VehiclesList/>
        </div>

      </div>
      {/*<!--End Content Row Top-->*/}
    </React.Fragment>
  );
}
export default ContentRowTop;
