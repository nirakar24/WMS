// VendorListPage.js

import React from 'react';
import './VendorListPage.css'; // Import CSS file

const VendorListPage = () => {
  // Dummy data for vendor names
  const dummyVendors = [
    "Vendor 1",
    "Vendor 2",
    "Vendor 3",
    "Vendor 4",
    "Vendor 5"
  ];

  return (
    <div className="vendor-list-container">
      <h2>List of Vendors</h2>
      <ul className="vendor-list">
        {/* Map through the dummy vendor names and render each one */}
        {dummyVendors.map((vendor, index) => (
          <li key={index} className="vendor-list-item">{vendor}</li>
        ))}
      </ul>
    </div>
  );
}

export default VendorListPage;
