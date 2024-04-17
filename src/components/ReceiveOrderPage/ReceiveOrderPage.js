// ReceiveOrderPage.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { FaBox, FaCheckSquare, FaTruck } from 'react-icons/fa';
import './ReceiveOrderPage.css';

const ReceiveOrderPage = () => {
  return (
    <div className="receive-order-container">
      <div className="options">
        {/* Wrap the option in a Link component with the "to" attribute pointing to the vendor list page */}
        <Link to="/vendor-list" className="option">
          <FaBox className="option-icon" />
          <span>Receive Purchase Order</span>
        </Link>
        <div className="option">
          <FaCheckSquare className="option-icon" />
          <span>Item Receipt</span>
        </div>
        <div className="option">
          <FaTruck className="option-icon" />
          <span>Transfer Order</span>
        </div>
      </div>
    </div>
  );
}

export default ReceiveOrderPage;
