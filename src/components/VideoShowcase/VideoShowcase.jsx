import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./VideoShowcase.css";

const VIDEOS = [
  {
    title: "Orbit Launch Film",
    image:
      "https://images.unsplash.com/photo-1760966362386-e1012dbc3657?auto=format&fit=crop&w=700&h=930&q=80",
  },
  {
    title: "Hoarding Time-lapse",
    image:
      "https://images.unsplash.com/photo-1559613671-dfe2fb6a7680?auto=format&fit=crop&w=700&h=930&q=80",
  },
  {
    title: "Store Fit-out Reel",
    image:
      "https://images.unsplash.com/photo-1770958420558-ad0fb28966dc?auto=format&fit=crop&w=700&h=930&q=80",
  },
];

function VideoShowcase() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".video-header", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".video-header",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".video-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".video-grid",
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
      className="video-showcase"
    >
      <div className="video-wrap">

        <div className="video-header">
          <h2>SEE IT COME TO LIFE.</h2>

          <p>
            Campaign films and time-lapse installs
            from recent work.
          </p>
        </div>

        <div className="video-grid">
          {VIDEOS.map((video) => (
            <article
              className="video-card"
              key={video.title}
            >
              <img
                src={video.image}
                alt={video.title}
                loading="lazy"
              />

              <div className="video-tag">
                {video.title}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default VideoShowcase;