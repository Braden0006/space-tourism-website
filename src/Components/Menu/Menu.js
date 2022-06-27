import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Menu.css";

export default function Menu({ open, toggle }) {
  return (
    <motion.section
      className="menu-container"
      initial={{ x: "100rem" }}
      animate={{ x: open ? 0 : "100rem" }}
    >
      <div className="menu">
        <div className="menu__icon">
          <svg
            onClick={toggle}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
          >
            <g fill="#D0D6F9" fillRule="evenodd">
              <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
              <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
            </g>
          </svg>
        </div>
        <ul className="menu__list">
          <li className="menu__list-item">
            <Link className="menu__list-link" to="/" onClick={toggle}>
              <span className="menu__list-item-number">00</span> HOME
            </Link>
          </li>
          <li className="menu__list-item">
            <Link
              className="menu__list-link"
              to="/destinations"
              onClick={toggle}
            >
              <span className="menu__list-item-number">01</span> DESTINATION
            </Link>
          </li>
          <li className="menu__list-item">
            <Link className="menu__list-link" to="/crew" onClick={toggle}>
              <span className="menu__list-item-number">02</span> CREW
            </Link>
          </li>
          <li className="menu__list-item">
            <Link className="menu__list-link" to="/technology" onClick={toggle}>
              <span className="menu__list-item-number">03</span> TECHNOLOGY
            </Link>
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
