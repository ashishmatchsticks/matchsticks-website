import "./ContactMap.css";

function ContactMap() {
  return (
    <section className="contact-map-section">
      <div className="contact-map-wrap">

        <div className="contact-map-heading">
          <span className="contact-map-eyebrow">
            02 — Find Us
          </span>

          <h2>Ahmedabad studio</h2>
        </div>

        <div className="contact-map-embed">
          <iframe
            src="https://www.google.com/maps?q=Prahladnagar,Ahmedabad,Gujarat&output=embed"
            title="STRIKE Ahmedabad Studio Location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default ContactMap;