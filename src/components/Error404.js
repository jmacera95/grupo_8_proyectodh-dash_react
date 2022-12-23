import React from "react";
import error404Img from '../assets/images/404drivIT.png';

function Error404() {
    return (
        <React.Fragment>
            <div className="m-auto">
                <img className="img-fluid rounded" src={error404Img} alt="error404"></img>
            </div>
        </React.Fragment>
    )
}

export default Error404;