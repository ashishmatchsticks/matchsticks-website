import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutStory.css";

gsap.registerPlugin(ScrollTrigger);

function AboutStory() {
  const storyRef = useRef(null);

  useEffect(() => {
    const story = storyRef.current;

    if (!story) return;

    const elements = story.querySelectorAll(".about-story-reveal");

    const animations = [];

    elements.forEach((element) => {
      const animation = gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 88%",
        },
      });

      animations.push(animation);
    });

    return () => {
      animations.forEach((animation) => animation.kill());
    };
  }, []);

  return (
    <section ref={storyRef} className="about-story">
      <div className="about-story-wrap">

        <div className="about-story-label about-story-reveal">
          <div className="about-story-index">
            01 — Origin
          </div>

          <div className="about-story-title">
            The story so far
          </div>
        </div>

        <div className="about-story-copy about-story-reveal">
          <p className="about-story-lede">
            Strike began in 2016 with two people, a single client,
            and a shared belief that most agencies stop caring the
            moment a design is approved.
          </p>

          <p>
            We built the opposite kind of company — one that stays
            on site until the wrap is straight, the paint is dry and
            the sign is lit. What started as a single highway hoarding
            job has grown into full-service branding and outdoor
            execution, but the standard hasn't moved: if we wouldn't
            put our name on the finish, it doesn't ship.
          </p>

          <p>
            A decade on, that's still the whole pitch. Fewer decks,
            more site visits. Fewer promises, more follow-through.
          </p>
        </div>

      </div>
    </section>
  );
}

export default AboutStory;