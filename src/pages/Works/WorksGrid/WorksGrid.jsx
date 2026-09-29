import { useState, useMemo } from "react";
import "./WorksGrid.css";

const FILTERS = ["all", "outdoor", "retail", "vehicle", "event", "signage"];

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

const label = (f) => f.charAt(0).toUpperCase() + f.slice(1);

function WorksGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const counts = useMemo(() => {
    const c = { all: WORKS.length };
    WORKS.forEach((w) => (c[w.category] = (c[w.category] || 0) + 1));
    return c;
  }, []);

  const filteredWorks =
    activeFilter === "all"
      ? WORKS
      : WORKS.filter((work) => work.category === activeFilter);

  // Spotlight follows the pointer inside each card
  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section className="works-grid-section">
      <div className="works-grid-wrap">
        {/* Heading */}
        <div className="works-grid-heading">
          <h2>
            <span className="wg-line">Work that</span>
            <span className="wg-line wg-outline">stops traffic.</span>
          </h2>

          <p className="works-grid-count" aria-live="polite">
            <strong>{String(filteredWorks.length).padStart(2, "0")}</strong>
            <span>
              {activeFilter === "all" ? "projects" : `${activeFilter} projects`}
            </span>
          </p>
        </div>

        {/* Filters */}
        <div className="works-filter-bar" role="toolbar" aria-label="Filter projects">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              className={`works-filter-btn ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {label(filter)}
              <sup>{counts[filter] || 0}</sup>
            </button>
          ))}
        </div>

        {/* Grid — keyed so a poster-paste reveal replays on every filter change */}
        <div className="works-grid" key={activeFilter}>
          {filteredWorks.map((work, i) => (
            <article
              className={`works-grid-item works-grid-${work.size}`}
              key={work.title}
              style={{ "--i": i }}
              onMouseMove={handleMove}
            >
              <img src={work.image} alt={work.title} loading="lazy" />

              <span className="works-grid-chip">{label(work.category)}</span>

              <span className="works-grid-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </span>

              <div className="works-grid-meta">
                <div className="works-grid-tag">{work.tag}</div>
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