import "./Marquee.css";

const MARQUEE_TEXT = [
  "Brand Identity",
  "Social Media Marketing",
  "Web Design & Development",
  "Performance Marketing",
  "Digital Strategy",
  "Video Production",
  "Corporate Presentation",
];

function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[0, 1].map((group) => (
          <div className="marquee-group" key={group}>
            {MARQUEE_TEXT.map((item, index) => (
              <span className="marquee-item" key={index}>
                {item}
                <i>—</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;