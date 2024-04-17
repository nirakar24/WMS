import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header/Header'; 
import HomeScreen from './components/HomeScreen/HomeScreen'; 
import Sidebar from './components/Sidebar/Sidebar';
import ReceiveOrderPage from './components/ReceiveOrderPage/ReceiveOrderPage';
import VendorListPage from './components/VendorListPage/VendorListPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          {/* <Sidebar /> */}
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/receive-order" element={<ReceiveOrderPage />} />
            <Route path="/vendor-list" element={<VendorListPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
