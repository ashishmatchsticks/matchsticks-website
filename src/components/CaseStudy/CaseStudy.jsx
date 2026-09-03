import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CaseStudy.css";

gsap.registerPlugin(ScrollTrigger);

const CASE_STUDY = {
  title: "Orbit Mobility — Launch Takeover",

  hero:
    "https://images.unsplash.com/photo-1784101832763-d1ff32764751?auto=format&fit=crop&w=1800&h=1000&q=80",

  meta: [
    {
      label: "Industry",
      value: "Mobility",
    },
    {
      label: "Location",
      value: "Ahmedabad",
    },
    {
      label: "Type",
      value: "Outdoor + Retail",
    },
    {
      label: "Year",
      value: "2026",
    },
  ],

  images: {
    full:
      "https://images.unsplash.com/photo-1760259203238-01708384f7a2?auto=format&fit=crop&w=2000&h=860&q=80",

    left:
      "https://images.unsplash.com/photo-1770958420558-ad0fb28966dc?auto=format&fit=crop&w=900&h=1100&q=80",

    right:
      "https://images.unsplash.com/photo-1776983585314-8704eca507ac?auto=format&fit=crop&w=900&h=1100&q=80",
  },
};

function CaseStudy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".case-heading", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".case-header",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".case-description", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".case-header",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".case-hero", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".case-hero",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".case-info", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".case-info",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".case-image", {
        opacity: 0,
        y: 50,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".case-body",
          start: "top 85%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="case-study"
    >
      {/* Header */}

      <div className="case-wrap">
        <div className="case-header">
          <h2 className="case-heading">
            CASE STUDY
          </h2>

          <p className="case-description">
            An editorial look at one campaign,
            start to finish.
          </p>
        </div>
      </div>

      {/* Hero */}

      <div className="case-hero">
        <img
          src={CASE_STUDY.hero}
          alt={CASE_STUDY.title}
        />
      </div>

      {/* Project information */}

      <div className="case-wrap">
        <div className="case-info">
          <h3>{CASE_STUDY.title}</h3>

          <div className="case-meta">
            {CASE_STUDY.meta.map((item) => (
              <div
                className="case-meta-item"
                key={item.label}
              >
                <div className="case-meta-label">
                  {item.label}
                </div>

                <div className="case-meta-value">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting images */}

        <div className="case-body">
          <div className="case-image case-full">
            <img
              src={CASE_STUDY.images.full}
              alt=""
              loading="lazy"
            />
          </div>

          <div className="case-image case-half">
            <img
              src={CASE_STUDY.images.left}
              alt=""
              loading="lazy"
            />
          </div>

          <div className="case-image case-half">
            <img
              src={CASE_STUDY.images.right}
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudy;