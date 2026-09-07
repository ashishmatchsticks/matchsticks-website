import { useState } from "react";
import "./ServicesFAQ.css";

const FAQS = [
  {
    question: "What kind of projects do you handle?",
    answer:
      "We handle end-to-end outdoor, retail, branding and campaign execution projects, from the initial brief and survey through production, installation and handover.",
  },
  {
    question: "Can you manage execution across multiple cities?",
    answer:
      "Yes. Our execution network allows us to coordinate outdoor and retail projects across multiple cities while maintaining consistency in production and installation.",
  },
  {
    question: "Do you handle production and installation?",
    answer:
      "Yes. Production and installation are part of our end-to-end execution process, so the work moves from approved design through fabrication and finally to site installation.",
  },
  {
    question: "How do we start a project with you?",
    answer:
      "Share your brief with us and our team will scope the requirements, understand the execution needs and work out the right approach for the project.",
  },
];

function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="services-faq-section">
      <div className="services-faq-wrap">

        <div className="services-faq-heading">
          <span>FAQ</span>
          <h2>YOU ASK.<br />WE EXECUTE.</h2>
        </div>

        <div className="services-faq-list">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={`services-faq-item ${
                  isOpen ? "is-open" : ""
                }`}
                key={faq.question}
              >
                <button
                  type="button"
                  className="services-faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <h3>{faq.question}</h3>

                  <span className="services-faq-plus">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`services-faq-answer ${
                    isOpen ? "is-open" : ""
                  }`}
                >
                  <div className="services-faq-answer-inner">
                    <p>{faq.answer}</p>
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

export default ServicesFAQ;