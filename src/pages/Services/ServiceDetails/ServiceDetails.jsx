import { useState } from "react";
import "./ServiceDetails.css";

const SERVICES = [
  {
    number: "01",
    title: "Outdoor Advertising",
    description:
      "Hoardings, gantries and unipoles planned around actual traffic and sightlines, not just available inventory. We handle site survey, structural approvals, artwork and mounting.",
    tags: [
      "Site survey",
      "Media planning",
      "Structural fabrication",
      "Install & maintenance",
    ],
    image:
      "https://images.unsplash.com/photo-1559613671-dfe2fb6a7680?auto=format&fit=crop&w=600&h=450&q=80",
  },
  {
    number: "02",
    title: "Branding & Signage",
    description:
      "Storefront signage, office branding and wayfinding built to spec and finished like print — flush seams, correct Pantones, lit properly.",
    tags: [
      "Storefront signage",
      "Office branding",
      "Wayfinding",
      "Fabrication",
    ],
    image:
      "https://images.unsplash.com/photo-1776983585314-8704eca507ac?auto=format&fit=crop&w=600&h=450&q=80",
  },
  {
    number: "03",
    title: "Retail Branding",
    description:
      "Window graphics, in-store POS and full store takeovers designed to survive footfall and get replaced fast when a campaign changes.",
    tags: [
      "Window graphics",
      "POS & POP",
      "Store takeovers",
      "Multi-city rollout",
    ],
    image:
      "https://images.unsplash.com/photo-1770958420558-ad0fb28966dc?auto=format&fit=crop&w=600&h=450&q=80",
  },
  {
    number: "04",
    title: "Vehicle Branding",
    description:
      "Fleet wraps and single-vehicle branding, printed and applied in-house so panel alignment and lamination hold up on the road.",
    tags: [
      "Fleet wraps",
      "Vinyl application",
      "Design templating",
      "Multi-vehicle scheduling",
    ],
    image:
      "https://images.unsplash.com/photo-1760966362386-e1012dbc3657?auto=format&fit=crop&w=600&h=450&q=80",
  },
  {
    number: "05",
    title: "Event Branding",
    description:
      "Backdrops, standees, entrance arches and stage branding built and installed against a fixed event date, with a strike-down plan already in place.",
    tags: [
      "Stage branding",
      "Standees & backdrops",
      "On-site rigging",
      "Same-day strike-down",
    ],
    image:
      "https://images.unsplash.com/photo-1760966362386-e1012dbc3657?auto=format&fit=crop&w=600&h=451&q=80",
  },
  {
    number: "06",
    title: "Large Format Printing",
    description:
      "In-house flex, vinyl and fabric printing at production scale, colour-matched and turned around fast enough to hit outdoor install windows.",
    tags: [
      "Flex & vinyl",
      "Fabric printing",
      "Colour matching",
      "Rush turnaround",
    ],
    image:
      "https://images.unsplash.com/photo-1784101832763-d1ff32764751?auto=format&fit=crop&w=600&h=450&q=80",
  },
  {
    number: "07",
    title: "Campaign Execution",
    description:
      "Multi-city, multi-format campaigns run from one desk — media, production and install synced against a single timeline, with photo proof from every site.",
    tags: [
      "Multi-city rollout",
      "Vendor coordination",
      "Timeline management",
      "Site proof reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1760259203238-01708384f7a2?auto=format&fit=crop&w=600&h=450&q=80",
  },
  {
    number: "08",
    title: "Installation & Production",
    description:
      "The part most agencies outsource — our own crews, cranes and fabrication shop, so the person who designed it is accountable for how it's built.",
    tags: [
      "In-house crews",
      "Structural fabrication",
      "Permits & access",
      "Site safety",
    ],
    image:
      "https://images.unsplash.com/photo-1776983585314-8704eca507ac?auto=format&fit=crop&w=600&h=451&q=80",
  },
];

function ServiceDetails() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="services-detail-section">
      <div className="services-detail-wrap">

        {/* Section heading */}
        <div className="services-detail-heading">
          <span className="services-detail-eyebrow">
            01 — What We Do
          </span>

          <h2>Every service, in detail</h2>

          <p>
            Tap a line to see what's actually included —
            no vague deliverables, just the work and the
            outcome.
          </p>
        </div>

        {/* Service list */}
        <div className="services-detail-list">
          {SERVICES.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={`services-detail-row ${
                  isOpen ? "is-open" : ""
                }`}
                key={service.number}
              >
                <button
                  type="button"
                  className="services-detail-row-top"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="services-detail-number">
                    {service.number}
                  </span>

                  <h3>{service.title}</h3>

                  <span className="services-detail-plus">
                    <span></span>
                  </span>
                </button>

                <div
                  className={`services-detail-body ${
                    isOpen ? "is-open" : ""
                  }`}
                >
                  <div className="services-detail-body-inner">

                    <div className="services-detail-spacer"></div>

                    <div className="services-detail-content">
                      <p>
                        {service.description}
                      </p>

                      <div className="services-detail-tags">
                        {service.tags.map((tag) => (
                          <span key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="services-detail-image">
                      <img
                        src={service.image}
                        alt={service.title}
                      />
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ServiceDetails;