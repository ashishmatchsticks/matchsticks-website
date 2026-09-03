import { useRef, useState } from "react";
import "./BeforeAfter.css";

function BeforeAfter() {
  const sliderRef = useRef(null);
  const [position, setPosition] = useState(50);

  const updatePosition = (clientX) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const rect = slider.getBoundingClientRect();

    let newPosition =
      ((clientX - rect.left) / rect.width) * 100;

    newPosition = Math.max(0, Math.min(100, newPosition));

    setPosition(newPosition);
  };

  const handleMouseMove = (event) => {
    if (event.buttons !== 1) return;

    updatePosition(event.clientX);
  };

  const handleTouchMove = (event) => {
    updatePosition(event.touches[0].clientX);
  };

  return (
    <section className="before-after-section">
      <div className="before-after-wrap">

        <div className="before-after-head">
          <h2>IDEA → EXECUTION</h2>
        </div>

        <div
          ref={sliderRef}
          className="before-after-slider"
          onMouseDown={(event) => updatePosition(event.clientX)}
          onMouseMove={handleMouseMove}
          onTouchStart={(event) =>
            updatePosition(event.touches[0].clientX)
          }
          onTouchMove={handleTouchMove}
        >
          {/* BEFORE */}
          <img
            className="before-image"
            src="https://images.unsplash.com/photo-1770958420558-ad0fb28966dc?auto=format&fit=crop&w=1400&h=900&q=80"
            alt="Before"
          />

          {/* AFTER */}
          <div
            className="after-wrap"
            style={{ width: `${position}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1776983585314-8704eca507ac?auto=format&fit=crop&w=1400&h=900&q=80"
              alt="After"
            />
          </div>

          {/* HANDLE */}
          <div
            className="before-after-handle"
            style={{ left: `${position}%` }}
          >
            <span>↔</span>
          </div>

          {/* LABELS */}
          <div className="before-after-label before-label">
            Before
          </div>

          <div className="before-after-label after-label">
            After
          </div>
        </div>

      </div>
    </section>
  );
}

export default BeforeAfter;