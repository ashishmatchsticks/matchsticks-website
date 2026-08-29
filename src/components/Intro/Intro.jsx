import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Intro.css";

gsap.registerPlugin(ScrollTrigger);

function Intro() {
  const introRef = useRef(null);

  useEffect(() => {
    const intro = introRef.current;

    if (!intro) return;

    const ctx = gsap.context(() => {
      gsap.from(".intro-title", {
        opacity: 0,
        y: 80,
        duration: 1.1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".intro",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".intro-copy", {
        opacity: 0,
        y: 35,
        duration: 0.9,
        delay: 0.15,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".intro-copy",
          start: "top 85%",
          once: true,
        },
      });
    }, intro);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={introRef} className="intro">
      <div className="intro-wrap">
        <h2 className="intro-title">
          WE DON'T JUST ADVERTISE.
          <br />
          WE <span>TRANSFORM</span> THE PLACES
          <br />
          WHERE PEOPLE LOOK.
        </h2>

        <div className="intro-row">
          <p className="intro-copy">
            From large-format outdoor advertising to complete
            brand environments, we conceive and execute visual
            experiences designed to make an impact — on highways,
            storefronts, vehicles and screens.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Intro;