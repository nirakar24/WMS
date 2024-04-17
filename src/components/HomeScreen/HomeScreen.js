import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import { FiBox, FiCheckSquare, FiTruck, FiLayers, FiPrinter } from 'react-icons/fi';
import { FaExchangeAlt } from 'react-icons/fa'; // Import FaExchangeAlt icon

import './HomeScreen.css';

const HomeScreen = () => {
  return (
    <div className="home-container">
      <div className="options">
        <div className="option">
          <Link to="/receive-order"> {/* Wrap icon with Link component */}
            <FiBox size={50} />
          </Link>
          <span>Receive Order</span>
        </div>
        <div className="option">
          <FiCheckSquare size={50} />
          <span>Check in</span>
        </div>
        <div className="option">
          <FiTruck size={50} />
          <span>Pick order</span>
        </div>
        <div className="option">
          <FaExchangeAlt size={50} /> {/* Use FaExchangeAlt icon for Transfer */}
          <span>Transfer</span>
        </div>
        <div className="option">
          <FiLayers size={50} />
          <span>Inventory count</span>
        </div>
        <div className="option">
          <FiPrinter size={50} />
          <span>Print Label</span>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
