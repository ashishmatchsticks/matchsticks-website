import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const ctx = gsap.context(() => {
      // Hero entrance animation
      gsap.to(".hero-title-line span", {
        y: "0%",
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
      });

      gsap.from(".hero-tag, .hero-foot", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.3,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Hero image scroll zoom
      gsap.to(".hero-media img", {
        scale: 1.3,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, hero);

    // Mouse-following light
    const handleMouseMove = (event) => {
      const rect = hero.getBoundingClientRect();

      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      hero.style.setProperty("--mx", `${x}%`);
      hero.style.setProperty("--my", `${y}%`);
    };

    hero.addEventListener("mousemove", handleMouseMove);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={heroRef} className="hero">
      <div className="hero-media">
        <img
          src="https://images.unsplash.com/photo-1559613671-dfe2fb6a7680?auto=format&fit=crop&w=1800&h=1100&q=80"
          alt="Large scale hoarding installation"
        />
      </div>

      <div className="hero-content">
        <div className="hero-tag">
          Branding · Outdoor · Campaigns · Execution
        </div>

        <h1 className="hero-title">
          <span className="hero-title-line">
            <span>WE MAKE BRANDS</span>
          </span>

          <span className="hero-title-line">
            <span>IMPOSSIBLE TO IGNORE.</span>
          </span>
        </h1>

        <div className="hero-foot">
          <p className="hero-sub">
            A creative and outdoor advertising company turning walls,
            streets and screens into work people stop for.
          </p>

          <a href="#work" className="hero-cta">
            EXPLORE OUR WORK ↓
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;