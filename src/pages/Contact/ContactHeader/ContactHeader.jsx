import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./ContactHeader.css";

function ContactHeader() {
  const headerRef = useRef(null);
  const bigNumRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const bigNum = bigNumRef.current;

    if (!header || !bigNum) return;

    const crumb = header.querySelector(".contact-ph-crumb");
    const tag = header.querySelector(".contact-ph-tag");
    const lines = header.querySelectorAll(".contact-ph-line > span");

    gsap.set([crumb, tag], { opacity: 0 });
    gsap.set(lines, { y: "110%" });
    gsap.set(bigNum, {
      opacity: 0,
      scale: 0.94,
      x: 0,
      y: 0,
    });

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

    const floatingTween = gsap.to(bigNum, {
      y: -8,
      duration: 4.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 1.4,
    });

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
    <header ref={headerRef} className="contact-page-header">

      {/* Crop marks */}
      <div className="contact-ph-crop contact-ph-crop-tl"></div>
      <div className="contact-ph-crop contact-ph-crop-tr"></div>
      <div className="contact-ph-crop contact-ph-crop-bl"></div>
      <div className="contact-ph-crop contact-ph-crop-br"></div>

      {/* Large background number */}
      <div
        ref={bigNumRef}
        className="contact-ph-bignum"
        aria-hidden="true"
      >
        02
      </div>

      <div className="contact-ph-wrap">

        {/* Breadcrumb */}
        <div className="contact-ph-crumb">
          <a href="/">Home</a>
          <span className="contact-ph-separator">/</span>
          <span>Contact</span>
        </div>

        {/* Tag */}
        <div className="contact-ph-tag">
          <span className="contact-ph-pulse"></span>
          Usually reply within 1 business day
        </div>

        {/* Heading */}
        <h1 className="contact-ph-title">
          <span className="contact-ph-line">
            <span>TELL US WHAT</span>
          </span>

          <span className="contact-ph-line">
            <span>
              YOU'RE{" "}
              <span className="contact-ph-highlight">
                BUILDING.
              </span>
            </span>
          </span>
        </h1>

        {/* Description */}
        <p className="contact-ph-sub">
          Site, timeline, budget range — whatever you have. We'll come back
          with a scoped plan, not a generic pitch.
        </p>

      </div>
    </header>
  );
}

export default ContactHeader;