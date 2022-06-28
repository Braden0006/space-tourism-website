import React, { useState } from "react";
import { motion } from "framer-motion";

import Menu from "../Menu/Menu";

import "./Navbar.css";

export default function Navbar() {
  // Variables will be used to determine if the menu will be open or closed
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <svg
          className="navbar__logo"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
        >
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>

        <motion.svg
          className="navbar__hamburger"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.1 }}
          onClick={() => toggleMenu()}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="21"
        >
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
          </g>
        </motion.svg>
        <Menu open={isOpen} toggle={toggleMenu} />
      </nav>
    </>
  );
}
