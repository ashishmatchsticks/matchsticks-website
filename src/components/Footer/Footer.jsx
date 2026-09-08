import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-wrap">

        <div className="footer-top">

          <Link to="/" className="footer-logo">
            matchsticks<span>.</span>
          </Link>

          <div className="footer-nav">

            {/* Sitemap */}
            <div className="footer-column">
              <h5>Sitemap</h5>

              <Link to="/work">Work</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>
            </div>

            {/* Contact */}
            <div className="footer-column">
              <h5>Contact</h5>

              <p>+91 99999 99999</p>
              <p>hello@matchsticks.in</p>
              <p>Ahmedabad, India</p>
            </div>

            {/* Social */}
            <div className="footer-column">
              <h5>Social</h5>

              <a href="#" target="_blank" rel="noreferrer">
                Instagram
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                LinkedIn
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                YouTube
              </a>
            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © 2026 Strike Creative Co. All Rights Reserved.
          </span>

          <span>
            Branding · Outdoor · Campaigns · Execution
          </span>

        </div>

      </div>
    </footer>
  );
}

export default Footer;