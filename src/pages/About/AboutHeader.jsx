import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./AboutHeader.css";

function AboutHeader() {
  const headerRef = useRef(null);
  const bigNumRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const bigNum = bigNumRef.current;

    if (!header || !bigNum) return;

    const isTouch = window.matchMedia("(max-width: 900px)").matches;

    // Heading entrance
    gsap.to(".about-header-title .line span", {
      y: "0%",
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
    });

    // Small elements entrance
    gsap.fromTo(
      ".about-header-crumb, .about-header-tag",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        delay: 0.1,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".about-header-years span, .about-header-years .dot",
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.05,
        delay: 0.6,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      bigNum,
      { opacity: 0, scale: 0.94 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.4,
        ease: "power2.out",
      }
    );

    // Cursor spotlight + number movement
    const handleMouseMove = (event) => {
      if (isTouch) return;

      const rect = header.getBoundingClientRect();

      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;

      header.style.setProperty("--mx", `${px * 100}%`);
      header.style.setProperty("--my", `${py * 100}%`);

      gsap.to(bigNum, {
        x: (px - 0.5) * -30,
        y: (py - 0.5) * -20,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(bigNum, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "power3.out",
      });
    };

    header.addEventListener("mousemove", handleMouseMove);
    header.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      header.removeEventListener("mousemove", handleMouseMove);
      header.removeEventListener("mouseleave", handleMouseLeave);

      gsap.killTweensOf(bigNum);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="about-page-header"
    >
      {/* Crop marks */}
      <div className="about-crop tl"></div>
      <div className="about-crop tr"></div>
      <div className="about-crop bl"></div>
      <div className="about-crop br"></div>

      {/* Large background 10 */}
      <div
        ref={bigNumRef}
        className="about-big-number"
        aria-hidden="true"
      >
        10
      </div>

      <div className="about-header-wrap">
        {/* Breadcrumb */}
        <div className="about-header-crumb">
          <a href="/">Home</a>
          <span>/</span>
          <span>About</span>
        </div>

        <div className="about-header-row">
          <div>
            {/* Tag */}
            <div className="about-header-tag">
              <span className="pulse"></span>
              Est. 2016 — Ahmedabad
            </div>

            {/* Heading */}
            <h1 className="about-header-title">
              <span className="line">
                <span>TEN YEARS.</span>
              </span>

              <span className="line">
                <span>ONE OBSESSION</span>
              </span>

              <span className="line">
                <span>
                  WITH <span className="highlight">EXECUTION.</span>
                </span>
              </span>
            </h1>
          </div>

          {/* Side copy */}
          <div className="about-header-side">
            <p>
              We're a branding and outdoor advertising company
              built in Ahmedabad, now running campaigns across
              fifty Indian cities.
            </p>
          </div>
        </div>

        {/* Years */}
        <div className="about-header-years">
          <span>2016</span>
          <span className="dot"></span>

          <span>2018</span>
          <span className="dot"></span>

          <span>2020</span>
          <span className="dot"></span>

          <span>2022</span>
          <span className="dot"></span>

          <span>2024</span>
          <span className="dot"></span>

          <span className="now">2026 — Today</span>
        </div>
      </div>
    </header>
  );
}

export default AboutHeader;