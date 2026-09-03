import { useEffect, useRef } from "react";
import "./FinalCTA.css";

function FinalCTA() {
  const primaryRef = useRef(null);
  const secondaryRef = useRef(null);

  useEffect(() => {
    const buttons = [
      primaryRef.current,
      secondaryRef.current,
    ].filter(Boolean);

    // Disable magnetic effect on mobile/tablet
    if (window.matchMedia("(max-width: 900px)").matches) {
      return;
    }

    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      buttons.forEach((button) => {
        const rect = button.getBoundingClientRect();

        const buttonCenterX = rect.left + rect.width / 2;
        const buttonCenterY = rect.top + rect.height / 2;

        const distanceX = mouseX - buttonCenterX;
        const distanceY = mouseY - buttonCenterY;

        const distance = Math.sqrt(
          distanceX * distanceX + distanceY * distanceY
        );

        // Smaller magnetic field
        const attractionDistance = 90;

        if (distance < attractionDistance) {
          // Much weaker attraction
          const strength = 0.08;

          const moveX = distanceX * strength;
          const moveY = distanceY * strength;

          button.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          button.style.transform = "translate(0, 0)";
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="final-cta-section" id="contact">
      <div className="final-cta-wrap">

        <h2>
          LET'S MAKE SOMETHING
          <br />
          IMPOSSIBLE TO MISS.
        </h2>

        <div className="final-cta-actions">

          <a
            ref={primaryRef}
            href="#contact"
            className="final-cta-primary"
          >
            START A PROJECT
            <span>↗</span>
          </a>

          <a
            ref={secondaryRef}
            href="mailto:hello@matchsticks.in"
            className="final-cta-secondary"
          >
            GET IN TOUCH
            <span>→</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default FinalCTA;