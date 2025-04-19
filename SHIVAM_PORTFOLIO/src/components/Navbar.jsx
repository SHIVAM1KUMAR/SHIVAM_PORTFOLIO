import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav>
      <div className="nav-left">Shivam Portfolio</div>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </div>

      <div className={`nav-right ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link to="/resume" onClick={() => setMenuOpen(false)}>Resume</Link>
        <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
