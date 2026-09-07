import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        matchsticks<span>.</span>
      </Link>

      {/* Desktop navigation */}
      <div className="navbar-links">
        <Link to="/#work" onClick={closeMenu}>
          Work
        </Link>

        <Link to="/about" onClick={closeMenu}>
          About
        </Link>

        <Link to="/services" onClick={closeMenu}>
          Services
        </Link>

        <Link to="/#clients" onClick={closeMenu}>
          Clients
        </Link>

        <Link to="/#contact" onClick={closeMenu}>
          Contact
        </Link>
      </div>

      {/* Desktop CTA */}
      <Link to="/#contact" className="navbar-cta" onClick={closeMenu}>
        LET'S TALK →
      </Link>

      {/* Mobile hamburger */}
      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
      </button>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/#work" onClick={closeMenu}>
          Work
        </Link>

        <Link to="/about" onClick={closeMenu}>
          About
        </Link>

        <Link to="/services" onClick={closeMenu}>
          Services
        </Link>

        <Link to="/#clients" onClick={closeMenu}>
          Clients
        </Link>

        <Link to="/#contact" onClick={closeMenu}>
          Contact
        </Link>

        <Link
          to="/#contact"
          className="mobile-menu-cta"
          onClick={closeMenu}
        >
          LET'S TALK →
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;