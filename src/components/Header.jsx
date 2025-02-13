import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">Tee Design Hub</div>
      <button className="menu-toggler" onClick={() => setMenuOpen(!menuOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="white"
          viewBox="0 0 16 16"
        >
          <path d="M0 2h16v2H0V2zm0 6h16v2H0V8zm0 6h16v2H0v-2z" />
        </svg>
      </button>
      <nav className={`menu ${menuOpen ? "open" : ""}`} onMouseLeave={() => setMenuOpen(false)}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <Link to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            </Link>
          </li>
          <li
            className="account"
            onMouseEnter={() => setShowAccountMenu(true)}
            onMouseLeave={() => setShowAccountMenu(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M13.468 12.37C12.758 11.226 11.418 10.5 8 10.5s-4.758.726-5.468 1.87A6.978 6.978 0 0 0 8 15a6.978 6.978 0 0 0 5.468-2.63z" />
              <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
            </svg>
            {showAccountMenu && (
              <motion.div
                className="account-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="account-menu-item">
                  <button className="animated-button">Orders</button>
                </div>
                <div className="account-menu-item">
                  <button className="animated-button">Logout</button>
                </div>
              </motion.div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;