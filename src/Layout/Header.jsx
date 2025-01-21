import React from "react";
import { NavLink } from "react-router";
import { useTheme } from "../common/ThemeContext";
import "./Header.css";

const Header = () => {
  const { theme } = useTheme();

  const navItems = [
    {
      name: "Home",
      to: "/",
      id: "1",
    },
    {
      name: "Projects",
      to: "/projects",
      id: "2",
    },
    {
      name: "Skills",
      to: "/skills",
      id: "3",
    },
    {
      name: "Contact",
      to: "/contact",
      id: "4",
    },
  ];
  return (
    <header className={`header ${theme}`}>
      <ul className={`nav ${theme}`}>
        {navItems.map((item) => {
          return (
            <li className={`nav-item ${theme}`} key={item.id}>
              <NavLink to={item.to} className={`nav-link ${theme}`}>
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
