import { LOGO_URL } from "../utils/constants"; // Importing the LOGO_URL constant
import { useState } from "react";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-cointainer">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>📍</li>
          <li>🏠</li>
          <li>🚚</li>
          <li>🔔</li>
          <li>🛒</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName == "Logout" ? setBtnName("Login") : setBtnName("Logout");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
