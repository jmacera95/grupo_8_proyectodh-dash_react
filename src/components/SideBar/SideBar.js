import React from "react";
import image from "../../assets/images/logo.png";
import { Route, Link, Routes } from "react-router-dom";
import "./SideBar.css";
import TopBar from "../TopBar";
import Footer from "../Footer";

// import GenresInDb from '../GenresInDb';
import ContentWrapper from "../ContentWrapper";
// import ContentRowMovies from '../ContentRowMovies';
// import LastMovieInDb from '../LastMovieInDb';
// import SearchMovies from '../SearchMovies';
import Error404 from "../Error404";
import VehiclesList from "../VehiclesList";

function SideBar(props) {
  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav bg-sidebar sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/*<!-- Sidebar - Brand -->*/}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-50 p-3" src={image} alt="DrivIT" />
          </div>
        </Link>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - DrivIT</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>

        {/*<!-- Nav Item - Vehicles -->*/}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/vehicles">
            <i className="fas fa-fw fa-folder"></i>
            <span>Vehicles</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/*<!-- End of Sidebar -->*/}

      <Routes>
        <Route path="/" exact element={<ContentWrapper user={props.user} />} />
        <Route
          path="/vehicles"
          exact
          element={
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <TopBar user={props.user} />
                <div className="container-fluid">
                  <VehiclesList />
                </div>
                <Footer />
              </div>
            </div>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </React.Fragment>
  );
}
export default SideBar;
