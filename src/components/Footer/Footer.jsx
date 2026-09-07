import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-wrap">

        <div className="footer-top">

          <div className="footer-logo">
            STRIKE<span>.</span>
          </div>

          <div className="footer-nav">

            <div className="footer-column">
              <h5>Sitemap</h5>

              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#clients">Clients</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-column">
              <h5>Contact</h5>

              <p>+91 98765 43210</p>
              <p>hello@strike.agency</p>
              <p>Ahmedabad, India</p>
            </div>

            <div className="footer-column">
              <h5>Social</h5>

              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">YouTube</a>
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