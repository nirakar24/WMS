// Header.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Logo" /> {/* Replace with your logo */}
      </div>
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </header>
  );
}

export default Header;
