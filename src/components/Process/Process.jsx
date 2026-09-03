import "./Process.css";

const STEPS = [
  {
    number: "01",
    title: "DISCOVER",
  },
  {
    number: "02",
    title: "CREATE",
  },
  {
    number: "03",
    title: "PRODUCE",
  },
  {
    number: "04",
    title: "EXECUTE",
  },
  {
    number: "05",
    title: "DELIVER",
  },
];

function Process() {
  return (
    <section className="process-section" id="process">
      <div className="process-wrap">

        <div className="process-heading">
          <span>OUR PROCESS</span>

          <h2>
            FROM IDEA
            <br />
            TO IMPACT.
          </h2>
        </div>

        <div className="process-list">
          {STEPS.map((step) => (
            <div className="process-item" key={step.number}>

              <span className="process-number">
                {step.number}
              </span>

              <h3>{step.title}</h3>

              <span className="process-arrow">↗</span>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Process;