import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // Importing Header component
import Body from "./components/Body"; // Importing Body component

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-items">
        <ul>
          <li>About Us</li>
          <li>Copyright</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Help</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")); //creating a root element

root.render(<AppLayout />); //rendering react component
