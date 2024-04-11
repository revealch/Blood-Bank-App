import React from "react";
import { MdBloodtype } from "react-icons/md";
import { SiWelcometothejungle } from "react-icons/si";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BiDonateBlood, BiUserCircle } from "react-icons/bi";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    toast("Logout successfully");
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid ">
          <div className="navbar-brand h1 ">
            <BiDonateBlood color="red" /> Blood Bank App
          </div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3">
              <p className="nav-link">
                <BiUserCircle /> Welcome{" "}
                {user?.name || user?.hospitalName || user?.organisationName} !
                &nbsp;
                <span className="badge bg-secondary">{user?.role}</span>
              </p>
            </li>
            {location.pathname === "/" || location.pathname === "/hospital" ||location.pathname === "/donar" ||location.pathname === "/oorganization" ? (
              <li className="nav-item mx-3">
                <Link className="nav-link" to={"/analytics"}>
                Analytics
              </Link>
              </li>
              
            ) : (
              <li className="nav-item mx-3">
                <Link className="nav-link" to={"/"}>
                Home
              </Link>
              </li>
              
            )}
            <li className="nav-item mx-3"></li>
            <li className="nav-item mx-3">
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
