import { useState } from "react";
import "./WorksGrid.css";

const FILTERS = [
  "all",
  "outdoor",
  "retail",
  "vehicle",
  "event",
  "signage",
];

const WORKS = [
  {
    category: "outdoor",
    size: "wide",
    image:
      "https://images.unsplash.com/photo-1784101832763-d1ff32764751?auto=format&fit=crop&w=1200&h=820&q=80",
    tag: "Outdoor Campaign · Ahmedabad · 2026",
    title: "Brand X — Highway Takeover",
  },
  {
    category: "retail",
    size: "narrow",
    image:
      "https://images.unsplash.com/photo-1776983585314-8704eca507ac?auto=format&fit=crop&w=700&h=900&q=80",
    tag: "Retail Branding · 2025",
    title: "Verve Retail",
  },
  {
    category: "vehicle",
    size: "narrow",
    image:
      "https://images.unsplash.com/photo-1770958420558-ad0fb28966dc?auto=format&fit=crop&w=700&h=900&q=80",
    tag: "Vehicle Branding · 2025",
    title: "Fleet Wrap — Orbit",
  },
  {
    category: "event",
    size: "wide",
    image:
      "https://images.unsplash.com/photo-1760966362386-e1012dbc3657?auto=format&fit=crop&w=1200&h=560&q=80",
    tag: "Event Branding · Mumbai · 2026",
    title: "Nova Product Launch",
  },
  {
    category: "signage",
    size: "normal",
    image:
      "https://images.unsplash.com/photo-1760259203238-01708384f7a2?auto=format&fit=crop&w=800&h=1000&q=80",
    tag: "Signage · 2025",
    title: "District Mall Facade",
  },
  {
    category: "outdoor",
    size: "normal",
    image:
      "https://images.unsplash.com/photo-1559613671-dfe2fb6a7680?auto=format&fit=crop&w=800&h=1000&q=80",
    tag: "Installation · 2026",
    title: "Pulse Experience Wall",
  },
  {
    category: "retail",
    size: "normal",
    image:
      "https://images.unsplash.com/photo-1770958420558-ad0fb28966dc?auto=format&fit=crop&w=900&h=1100&q=80",
    tag: "Retail Branding · Surat · 2025",
    title: "Loop Coffee Storefronts",
  },
  {
    category: "outdoor",
    size: "wide",
    image:
      "https://images.unsplash.com/photo-1760259203238-01708384f7a2?auto=format&fit=crop&w=1200&h=780&q=80",
    tag: "Outdoor Campaign · 12 Cities · 2026",
    title: "Orbit Mobility — National Rollout",
  },
  {
    category: "event",
    size: "normal",
    image:
      "https://images.unsplash.com/photo-1776983585314-8704eca507ac?auto=format&fit=crop&w=900&h=1100&q=80",
    tag: "Event Branding · 2025",
    title: "Tempo Music Fest",
  },
  {
    category: "vehicle",
    size: "normal",
    image:
      "https://images.unsplash.com/photo-1760966362386-e1012dbc3657?auto=format&fit=crop&w=900&h=1100&q=80",
    tag: "Vehicle Branding · 2026",
    title: "Metro Dairy Fleet",
  },
  {
    category: "signage",
    size: "narrow",
    image:
      "https://images.unsplash.com/photo-1784101832763-d1ff32764751?auto=format&fit=crop&w=800&h=1000&q=80",
    tag: "Signage · Ahmedabad · 2025",
    title: "Anchor Tower Office Branding",
  },
  {
    category: "retail",
    size: "narrow",
    image:
      "https://images.unsplash.com/photo-1559613671-8704eca507ac?auto=format&fit=crop&w=800&h=1000&q=80",
    tag: "Retail Branding · 2026",
    title: "Hive Electronics Windows",
  },
];

function WorksGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredWorks =
    activeFilter === "all"
      ? WORKS
      : WORKS.filter((work) => work.category === activeFilter);

  return (
    <section className="works-grid-section">
      <div className="works-grid-wrap">

        {/* Section heading */}
        <div className="works-grid-heading">
          <span className="works-grid-eyebrow">
            01 — Selected Work
          </span>

          <h2>Recent projects</h2>
        </div>

        {/* Filters */}
        <div className="works-filter-bar">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`works-filter-btn ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === "all"
                ? "All"
                : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Work grid */}
        <div className="works-grid">
          {filteredWorks.map((work) => (
            <article
              className={`works-grid-item works-grid-${work.size}`}
              key={work.title}
            >
              <img
                src={work.image}
                alt={work.title}
              />

              <div className="works-grid-meta">
                <div className="works-grid-tag">
                  {work.tag}
                </div>

                <h3>{work.title}</h3>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WorksGrid;