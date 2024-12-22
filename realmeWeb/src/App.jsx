import React from "react";
import Header from "./components/Header/Header";
import MobileList from "./components/MobileList/MobileList";
import Accessories from "./components/Accessories/Accessories";
import Footer from "./components/Footer/Footer";
import 'font-awesome/css/font-awesome.min.css';
import './App.css'; // Import the CSS file
import MobileList1 from "./components/MobileList/MobileList1";
import MobileList2 from "./components/MobileList/MobileList2";
import MobileList3 from "./components/MobileList/MobileList3";
import MobileList4 from "./components/MobileList/MobileList4";

function App() {
  return (
    <div>
      <Header />
      <h1>Smart Phones</h1>
      <div className="app-container">
        <MobileList />
        <MobileList1 />
        <MobileList2 />
        <MobileList3 />
        <MobileList4 />
        
        {/* Add more MobileList components as needed */}
      </div>

      <h1>Accessories</h1>
      <Accessories />
      <Footer />
    </div>
  );
}

export default App;
