import { useEffect, useState } from "react";
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
      <a href="#" className="navbar-logo" onClick={closeMenu}>
        matchsticks<span>.</span>
      </a>

      {/* Desktop navigation */}
      <div className="navbar-links">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Desktop CTA */}
      <a href="#contact" className="navbar-cta">
        LET'S TALK →
      </a>

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
        <a href="#work" onClick={closeMenu}>
          Work
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#services" onClick={closeMenu}>
          Services
        </a>

        <a href="#clients" onClick={closeMenu}>
          Clients
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <a href="#contact" className="mobile-menu-cta" onClick={closeMenu}>
          LET'S TALK →
        </a>
      </div>
    </nav>
  );
}

export default Navbar;