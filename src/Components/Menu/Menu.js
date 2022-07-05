import React, { useState } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Menu.css";

export default function Menu({ open, toggle }) {
  const [isOpen, setIsOpen] = useState(0);

  const openHome = () => {
    setIsOpen(0);
  };

  const openDestination = () => {
    setIsOpen(1);
  };

  const openCrew = () => {
    setIsOpen(2);
  };

  const openTechnology = () => {
    setIsOpen(3);
  };

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
          <li
            className={
              isOpen === 0 ? "menu__list-item menu-active" : "menu__list-item"
            }
          >
            <Link
              className="menu__list-link"
              to="/"
              onClick={() => {
                toggle();
                openHome();
              }}
            >
              <span className="menu__list-item-number">00</span> HOME
            </Link>
          </li>
          <li
            className={
              isOpen === 1 ? "menu__list-item menu-active" : "menu__list-item"
            }
          >
            <Link
              className="menu__list-link"
              to="/destinations"
              onClick={() => {
                toggle();
                openDestination();
              }}
            >
              <span className="menu__list-item-number">01</span> DESTINATION
            </Link>
          </li>
          <li
            className={
              isOpen === 2 ? "menu__list-item menu-active" : "menu__list-item"
            }
          >
            <Link
              className="menu__list-link"
              to="/crew"
              onClick={() => {
                toggle();
                openCrew();
              }}
            >
              <span className="menu__list-item-number">02</span> CREW
            </Link>
          </li>
          <li
            className={
              isOpen === 3 ? "menu__list-item menu-active" : "menu__list-item"
            }
          >
            <Link
              className="menu__list-link"
              to="/technology"
              onClick={() => {
                toggle();
                openTechnology();
              }}
            >
              <span className="menu__list-item-number">03</span> TECHNOLOGY
            </Link>
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
