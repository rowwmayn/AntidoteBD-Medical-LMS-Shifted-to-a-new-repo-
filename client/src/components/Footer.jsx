import { FaWhatsapp, FaTelegramPlane, FaYoutube, FaFacebook, FaPhone } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer-title">Connect with Us</h3>
      <div className="footer-links">
        <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaWhatsapp />
        </a>
        <a href="https://t.me/your-telegram-channel" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaTelegramPlane />
        </a>
        <a href="https://www.youtube.com/your-channel" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaYoutube />
        </a>
        <a href="https://www.facebook.com/your-page" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaFacebook />
        </a>
        <a href="https://www.facebook.com/groups/your-group" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaFacebook />
        </a>
        <a href="tel:+your-hotline-number" className="footer-icon">
          <FaPhone />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

