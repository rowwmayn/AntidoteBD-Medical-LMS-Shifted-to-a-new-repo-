import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./NavigationBar.css";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <li><Link to="/login" className="nav-button">Log In</Link></li>
        <li><Link to="/signup" className="nav-button signup-button">Sign Up</Link></li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="mobile-menu">
          <li><Link to="/courses" onClick={() => setIsOpen(false)}>All Courses</Link></li>
          <li><Link to="/my-courses" onClick={() => setIsOpen(false)}>My Courses</Link></li>
          <li><Link to="/exams" onClick={() => setIsOpen(false)}>Exams</Link></li>
          <li><Link to="/profile" onClick={() => setIsOpen(false)}>Profile</Link></li>
          <li><Link to="/login" className="nav-button" onClick={() => setIsOpen(false)}>Log In</Link></li>
          <li><Link to="/signup" className="nav-button signup-button" onClick={() => setIsOpen(false)}>Sign Up</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default NavigationBar;
