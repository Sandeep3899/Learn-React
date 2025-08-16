import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-items">
        <ul>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>Copyright</li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li>Privacy Policy</li>
          <li>Help</li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
