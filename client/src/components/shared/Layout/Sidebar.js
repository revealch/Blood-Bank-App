import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../../styles/layout.css";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <div className="sidebar">
        <div className="menu">
          {user?.role === "organization" && (
            <>
              <div
                className={`menu-item ${location.pathname === "/" && "active"}`}
              >
                <i className="fa-solid fa-warehouse"></i>
                <Link to="/">INVENTORY</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/donar" && "active"
                }`}
              >
                <i className="fa-solid fa-hand-holding-medical"></i>
                <Link to="/donar">DONAR</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/hospital" && "active"
                }`}
              >
                <i className="fa-solid fa-hospital"></i>
                <Link to="/hospital">HOSPITAL</Link>
              </div>
              
            </>
          )}
          {(user?.role === "donar" || user?.role === "hospital")&&(
            <>
              <div
                className={`menu-item ${
                  location.pathname === "/organization" && "active"
                }`}
              >
                <i className="fa-solid fa-building-ngo"></i>
                <Link to="/organization">ORGANIZATION</Link>
              </div>
            </>
          )}
          {( user?.role === "hospital")&&(
            <>
              <div
                className={`menu-item ${
                  location.pathname === "/consumer" && "active"
                }`}
              >
                <i className="fa-light fa-republican"></i>
                <Link to="/consumer">CONSUMER</Link>
              </div>
            </>
          )}
          {( user?.role === "donar")&&(
            <>
            <div
                className={`menu-item ${
                  location.pathname === "/donation" && "active"
                }`}
              >
                <i className="fa-solid fa-hand-holding-dollar"></i>
                <Link to="/donation">DONATION</Link>
              </div>
            </>
          )}
          {user?.role === "admin" && (
            <>
              <div
                className={`menu-item ${location.pathname === "/donar-list" && "active"}`}
              >
                <i className="fa-solid fa-warehouse"></i>
                <Link to="/donar-list">DONAR-LIST</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/hospital-list" && "active"
                }`}
              >
                <i className="fa-solid fa-hand-holding-medical"></i>
                <Link to="/hospital-list">HOSPITAL-LIST</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/organization-list" && "active"
                }`}
              >
                <i className="fa-solid fa-hospital"></i>
                <Link to="/organization-list">ORGANIZATION-LIST</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
