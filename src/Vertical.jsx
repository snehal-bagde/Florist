import React from "react";
import { NavLink } from "react-router-dom";

const Vertical = () => {
  return (
    <div className="vertical">
      <NavLink exact activeClassName="menu_active" to="/">
        Plants
      </NavLink>
      <NavLink activeClassName="menu_active" to="/flowers">
        Flowers
      </NavLink>
    </div>
  );
};

export default Vertical;
