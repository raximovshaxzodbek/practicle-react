import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <menu>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/toast"}>Toastify</NavLink>
        <NavLink to={"/react-modal"}>React Modal</NavLink>
        <NavLink to={"/tooltip"}>Tooltip</NavLink>
        <NavLink to={"/count-up"}>CountUp</NavLink>
      </menu>
    </nav>
  );
}
