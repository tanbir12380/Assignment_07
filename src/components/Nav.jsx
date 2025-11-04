import React from "react";
import "./Our.css";
const Nav = () => {
  return (
    <div>
      <nav id="Navbar">
        <div>
          <h1>CS — Ticket System</h1>
        </div>
        <div>
          <ul id="button-container">
            <li>Home</li>
            <li>FAQ</li>
            <li>Changelog</li>
            <li>Blog</li>
            <li>Download</li>
            <li>Contact</li>
            <li>
              <button>+ New Ticket</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
