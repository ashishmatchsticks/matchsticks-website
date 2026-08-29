import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Services.css";

const SERVICES = [
  {
    number: "01",
    title: "Outdoor Advertising",
    image:
      "https://images.unsplash.com/photo-1559613671-dfe2fb6a7680?auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    number: "02",
    title: "Branding & Signage",
    image:
      "https://images.unsplash.com/photo-1776983585314-8704eca507ac?auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    number: "03",
    title: "Retail Branding",
    image:
      "https://images.unsplash.com/photo-1770958420558-ad0fb28966dc?auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    number: "04",
    title: "Vehicle Branding",
    image:
      "https://images.unsplash.com/photo-1760966362386-e1012dbc3657?auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    number: "05",
    title: "Event Branding",
    image:
      "https://images.unsplash.com/photo-1760966362386-e1012dbc3657?auto=format&fit=crop&w=600&h=801&q=80",
  },
  {
    number: "06",
    title: "Large Format Printing",
    image:
      "https://images.unsplash.com/photo-1784101832763-d1ff32764751?auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    number: "07",
    title: "Campaign Execution",
    image:
      "https://images.unsplash.com/photo-1760259203238-01708384f7a2?auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    number: "08",
    title: "Installation & Production",
    image:
      "https://images.unsplash.com/photo-1776983585314-8704eca507ac?auto=format&fit=crop&w=600&h=801&q=80",
  },
];

function Services() {
  const sectionRef = useRef(null);
  const previewRef = useRef(null);
  const previewImageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const preview = previewRef.current;
    const previewImage = previewImageRef.current;

    if (!section || !preview || !previewImage) return;

    const isTouch =
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouch || window.innerWidth <= 900) {
      return;
    }

    const items =
      section.querySelectorAll(".service-item");

    const movePreview = (event) => {
      gsap.to(preview, {
        x: event.clientX + 30,
        y: event.clientY - 180,
        duration: 0.3,
        ease: "power2.out",
        overwrite: true,
      });
    };

const enterItem = (event) => {
  const image = event.currentTarget.dataset.image;

  previewImage.src = image;

  preview.classList.add("is-visible");
};

const leaveItem = () => {
  preview.classList.remove("is-visible");
};

    items.forEach((item) => {
      item.addEventListener("mouseenter", enterItem);
      item.addEventListener("mousemove", movePreview);
      item.addEventListener("mouseleave", leaveItem);
    });

    return () => {
      items.forEach((item) => {
        item.removeEventListener(
          "mouseenter",
          enterItem
        );
        item.removeEventListener(
          "mousemove",
          movePreview
        );
        item.removeEventListener(
          "mouseleave",
          leaveItem
        );
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="services"
      id="services"
    >
      <div className="services-wrap">

        <div className="services-header">
          <h2>SERVICES</h2>
        </div>

        <div className="services-list">
          {SERVICES.map((service) => (
            <div
              className="service-item"
              key={service.number}
              data-image={service.image}
            >
              <div className="service-number">
                {service.number}
              </div>

              <h3>{service.title}</h3>

              <div className="service-arrow">
                →
              </div>
            </div>
          ))}
        </div>

      </div>

      <div
        ref={previewRef}
        className="service-preview"
      >
        <img
          ref={previewImageRef}
          src=""
          alt=""
        />
      </div>
    </section>
  );
}

export default Services;