import React from "react";
import ReactDOM from "react-dom/client";

/**
Components
Header
- Logo
- Search
- Home
- Location
- pickup/Delivery
- Notifications
- Cart

Body
- Restaurant Cointainer
- Restaurant Card
- img
- Restaurant Name
- Cuisine Type
- Rating

- Delivery Time
Footer
- About Us
- Copyright
- Contact Us
- Privacy Policy
- Help

**/
const Header = () => {
  return (
    <div className="header">
      <div className="logo-cointainer">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQ1nH25GyCQmT-xYGqRc97lH4uVdroblEsA&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Search</li>
          <li>Location</li>
          <li>Home</li>
          <li>Pickup/Delivery</li>
          <li>Notifications</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resDATA } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500,h_320,c_fill/ " +
          imgid
        }
      />
      <h2>{resDATA.resName}</h2>
      <p>{resDATA.cuisine}</p>
      <p>{resDATA.rating} ⭐</p>
      <p>{resDATA.deliveryTime} 🕒</p>
    </div>
  );
};

const resObj = {
  resName: "Ravi Tasty Foods",
  cuisine: "South Indian, Asian",
  rating: "4.5",
  deliveryTime: "30 mins",
};

const Body = () => {
  return (
    <div className="body">
      <div className="res-cointainer">
        <RestaurantCard resDATA={resObj} />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <p>About Us</p>
      <p>Copyright</p>
      <p>Contact Us</p>
      <p>Privacy Policy</p>
      <p>Help</p>
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
