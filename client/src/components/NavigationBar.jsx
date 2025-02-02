import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../context/AuthContext.jsx"; // Adjust path as needed
import "./NavigationBar.css";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo">EduPlatform</Link>

      {/* Menu for Large Screens */}
      <ul className="nav-links">
        <li><Link to="/courses">All Courses</Link></li>
        <li><Link to="/my-courses">My Courses</Link></li>
        <li><Link to="/exams">Exams</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        {user ? (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>

      {/* Menu for Small Screens */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </div>
    </nav>
  );
};

export default NavigationBar;