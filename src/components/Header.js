import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const page = useSelector((state) => state.appointments.page);
  return (
    <div className="header-container">
      <div
        className={page === "home" ? "header-content " : "header-content big"}
      >
        {page === "home" ? "DrNG" : "DRNG"} | PATIENTS
      </div>
    </div>
  );
}

export default Header;
