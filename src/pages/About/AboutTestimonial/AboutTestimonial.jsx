import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutTestimonial.css";

gsap.registerPlugin(ScrollTrigger);

function AboutTestimonial() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const quote = section.querySelector(".about-testimonial-quote");
    const author = section.querySelector(".about-testimonial-author");
    const mark = section.querySelector(".about-testimonial-mark");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        mark,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        quote,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: quote,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        author,
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: author,
            start: "top 90%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="about-testimonial-section"
    >
      <div className="about-testimonial-wrap">

        <div className="about-testimonial-mark">
          “
        </div>

        <div className="about-testimonial-content">
          <p className="about-testimonial-quote">
            Every agency promises craft. Strike is the only one
            that still shows up when the crane breaks down at
            midnight.
          </p>

          <div className="about-testimonial-author">
            <span className="about-testimonial-line"></span>

            <div>
              <strong>Aditya Rao</strong>
              <span>Founder, Verve Retail</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutTestimonial;