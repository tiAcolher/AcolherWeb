import React from "react";
import { NavLink } from "react-router-dom";

const CustomLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      style={{
        textDecoration: "none",
        color: "#303030",
      }}
    >
      {children}
    </NavLink>
  );
};

export default CustomLink;
