import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./WorksHeader.css";

function WorksHeader() {
  const headerRef = useRef(null);
  const bigNumRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const bigNum = bigNumRef.current;

    if (!header || !bigNum) return;

    const crumb = header.querySelector(".works-ph-crumb");
    const tag = header.querySelector(".works-ph-tag");
    const lines = header.querySelectorAll(".works-ph-line > span");

    // Initial states
    gsap.set([crumb, tag], {
      opacity: 0,
    });

    gsap.set(lines, {
      y: "110%",
    });

    gsap.set(bigNum, {
      opacity: 0,
      scale: 0.94,
      x: 0,
    });

    // Header entrance animation
    const introTl = gsap.timeline();

    introTl
      .to([crumb, tag], {
        opacity: 1,
        duration: 0.8,
        delay: 0.1,
        ease: "power2.out",
      })
      .to(
        lines,
        {
          y: "0%",
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
        },
        "-=0.5"
      )
      .to(
        bigNum,
        {
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: "power2.out",
        },
        "-=0.8"
      );

    // Subtle floating movement
    const floatingTween = gsap.to(bigNum, {
      y: -8,
      duration: 4.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 1.4,
    });

    // Mouse movement
    const handleMouseMove = (event) => {
      if (window.innerWidth <= 900) return;

      const rect = header.getBoundingClientRect();

      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;

      header.style.setProperty("--mx", `${px * 100}%`);
      header.style.setProperty("--my", `${py * 100}%`);

      gsap.to(bigNum, {
        x: (px - 0.5) * -30,
        duration: 0.8,
        ease: "power3.out",
        overwrite: "auto",
      });

      gsap.to(bigNum, {
        y: (py - 0.5) * -20,
        duration: 0.8,
        ease: "power3.out",
        overwrite: false,
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

      introTl.kill();
      floatingTween.kill();

      gsap.killTweensOf(bigNum);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="works-page-header"
    >
      {/* Crop marks */}
      <div className="works-ph-crop works-ph-crop-tl"></div>
      <div className="works-ph-crop works-ph-crop-tr"></div>
      <div className="works-ph-crop works-ph-crop-bl"></div>
      <div className="works-ph-crop works-ph-crop-br"></div>

      {/* Big number */}
      <div
        ref={bigNumRef}
        className="works-ph-bignum"
        aria-hidden="true"
      >
        24
      </div>

      <div className="works-ph-wrap">

        {/* Breadcrumb */}
        <div className="works-ph-crumb">
          <a href="/">Home</a>
          <span className="works-ph-separator">/</span>
          <span>Work</span>
        </div>

        {/* Tag */}
        <div className="works-ph-tag">
          <span className="works-ph-pulse"></span>
          Selected Projects — 2024–2026
        </div>

        {/* Heading */}
        <h1 className="works-ph-title">
          <span className="works-ph-line">
            <span>WORK THAT STOOD</span>
          </span>

          <span className="works-ph-line">
            <span>
              UP <span className="works-ph-highlight">ON SITE.</span>
            </span>
          </span>
        </h1>

        {/* Description */}
        <p className="works-ph-sub">
          Outdoor takeovers, retail rollouts and campaign builds — a look at
          what actually got fabricated, installed and left standing.
        </p>

      </div>
    </header>
  );
}

export default WorksHeader;