import IconHamburger from "../../assets/icon-hamburger.svg";
import { NavLink } from "react-router-dom";
import "./MainNavigation.css";
import { useState } from "react";

const Header = () => {
  const [color, setChangeColor] = useState("ccc");
  return (
    <header className="header">
      <div className="logo">The Planets</div>
      <div className="nav">
        <ul>
          <li>
            <NavLink
              style={{ borderTopColor: color }}
              onClick={() => setChangeColor("#419ebb")}
              exact
              activeClassName="active"
              to="/"
            >
              Mercury
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ borderTopColor: color }}
              onClick={() => setChangeColor("#eda249")}
              activeClassName="active"
              to="/venus"
            >
              Venus
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ borderTopColor: color }}
              onClick={() => setChangeColor("#6f2ed6")}
              activeClassName="active"
              to="/earth"
            >
              Earth
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ borderTopColor: color }}
              onClick={() => setChangeColor("#d14c32")}
              activeClassName="active"
              to="/mars"
            >
              Mars
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ borderTopColor: color }}
              onClick={() => setChangeColor("d83a34")}
              activeClassName="active"
              to="/jupiter"
            >
              Jupiter
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ borderTopColor: color }}
              onClick={() => setChangeColor("#cd5120")}
              activeClassName="active"
              to="/saturn"
            >
              Saturn
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ borderTopColor: color }}
              onClick={() => setChangeColor("#1ec2a4")}
              activeClassName="active"
              to="/uranus"
            >
              Uranus
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ borderTopColor: color }}
              onClick={() => setChangeColor("#2d68f0")}
              activeClassName="active"
              to="/neptune"
            >
              Neptune
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="hamburger-menu">
        <img src={IconHamburger} alt=""></img>
      </div>
    </header>
  );
};

export default Header;
