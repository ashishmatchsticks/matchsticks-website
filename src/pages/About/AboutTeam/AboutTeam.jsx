import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutTeam.css";

gsap.registerPlugin(ScrollTrigger);

const TEAM = [
  {
    name: "Arjun Mehta",
    role: "Co-Founder · Creative",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&h=625&q=80",
  },
  {
    name: "Rhea Sharma",
    role: "Co-Founder · Production",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=501&h=625&q=80",
  },
  {
    name: "Kabir Anand",
    role: "Head of Design",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=500&h=625&q=80",
  },
  {
    name: "Neha Kulkarni",
    role: "Client Partnerships",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&h=625&q=80",
  },
  {
    name: "Vikram Rao",
    role: "Studio Lead, Mumbai",
    image:
      "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?auto=format&fit=crop&w=500&h=625&q=80",
  },
  {
    name: "Simran Kaur",
    role: "Operations Lead",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=500&h=625&q=80",
  },
];

function AboutTeam() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const cards = section.querySelectorAll(".about-team-card");

    const animations = [];

    cards.forEach((card) => {
      const animation = gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
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
    <section
      ref={sectionRef}
      className="about-team-section"
      id="team"
    >
      <div className="about-team-wrap">

        <div className="about-team-heading">
          <span className="about-team-eyebrow">
            04 — Leadership
          </span>

          <h2>The people behind it</h2>
        </div>

        <div className="about-team-grid">
          {TEAM.map((member) => (
            <div
              className="about-team-card"
              key={member.name}
            >
              <div className="about-team-photo">
                <img
                  src={member.image}
                  alt={member.name}
                />
              </div>

              <div className="about-team-role">
                {member.role}
              </div>

              <h3>{member.name}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AboutTeam;