import { LOGO_URL } from "../utils/constants"; // Importing the LOGO_URL constant
const Header = () => {
  return (
    <div className="header">
      <div className="logo-cointainer">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>🔍</li>
          <li>📍</li>
          <li>🏠</li>
          <li>🚚</li>
          <li>🔔</li>
          <li>🛒</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
