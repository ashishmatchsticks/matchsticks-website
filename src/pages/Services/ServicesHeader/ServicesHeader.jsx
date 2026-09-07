import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./ServicesHeader.css";

function ServicesHeader() {
  const headerRef = useRef(null);
  const bigNumRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const bigNum = bigNumRef.current;

    if (!header || !bigNum) return;

    const ctx = gsap.context(() => {
      gsap.set(".services-header-crumb, .services-header-tag", {
        opacity: 0,
      });

      gsap.set(".services-header-line span", {
        y: "110%",
      });

      gsap.set(bigNum, {
        yPercent: -50,
      });

      const introTl = gsap.timeline();

      introTl
        .to(".services-header-line span", {
          y: "0%",
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
        })
        .to(
          ".services-header-crumb, .services-header-tag",
          {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.7"
        )
        .fromTo(
          bigNum,
          {
            opacity: 0,
            scale: 0.94,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1.4,
            ease: "power2.out",
          },
          "-=0.6"
        );

      gsap.to(bigNum, {
        yPercent: -53,
        duration: 4.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.4,
      });
    }, header);

    const handleMouseMove = (e) => {
      if (window.innerWidth <= 900) return;

      const rect = header.getBoundingClientRect();

      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;

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

      ctx.revert();
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="services-header"
    >
      <div className="services-header-crop tl"></div>
      <div className="services-header-crop tr"></div>
      <div className="services-header-crop bl"></div>
      <div className="services-header-crop br"></div>

      <div
        ref={bigNumRef}
        className="services-header-bignum"
        aria-hidden="true"
      >
        08
      </div>

      <div className="services-header-wrap">
        <div className="services-header-crumb">
          <a href="/">Home</a>
          <span>/</span>
          <span>Services</span>
        </div>

        <div className="services-header-tag">
          <span className="pulse"></span>
          Strategy to Install — Ahmedabad &amp; Mumbai
        </div>

        <h1 className="services-header-title">
          <span className="services-header-line">
            <span>EIGHT DISCIPLINES.</span>
          </span>

          <span className="services-header-line">
            <span>
              ONE TEAM{" "}
              <span className="services-header-highlight">
                THAT SHOWS UP.
              </span>
            </span>
          </span>
        </h1>

        <p className="services-header-sub">
          From first sketch to the crane on site — we run
          outdoor, retail and campaign work end to end so
          nothing gets lost between departments.
        </p>
      </div>
    </header>
  );
}

export default ServicesHeader;