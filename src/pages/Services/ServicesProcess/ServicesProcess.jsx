import "./ServicesProcess.css";

const PROCESS = [
  {
    number: "01",
    title: "Brief & Survey",
    description:
      "We understand the brief, inspect the site and map every execution detail before anything moves into production.",
  },
  {
    number: "02",
    title: "Design & Sign-off",
    description:
      "Our team develops the creative and execution plan, then gets everything approved before production begins.",
  },
  {
    number: "03",
    title: "Production",
    description:
      "From fabrication and printing to finishing, every element is produced through our execution network.",
  },
  {
    number: "04",
    title: "Install & Handover",
    description:
      "Our teams coordinate installation on site, complete the final checks and hand over the finished execution.",
  },
];

function ServicesProcess() {
  return (
    <section className="services-process-section">
      <div className="services-process-wrap">

        <div className="services-process-heading">
          <span>HOW WE WORK</span>
          <h2>FROM BRIEF TO<br />BUILT.</h2>
        </div>

        <div className="services-process-list">
          {PROCESS.map((step) => (
            <article className="services-process-card" key={step.number}>
              <div className="services-process-number">
                {step.number}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesProcess;