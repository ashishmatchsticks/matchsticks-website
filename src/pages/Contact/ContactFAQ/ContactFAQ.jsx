import { useState } from "react";
import "./ContactFAQ.css";

const FAQS = [
  {
    question: "How soon can you start?",
    answer:
      "Depends on scope — a single site can often start within a week; multi-city campaigns need 4–6 weeks for planning and permits.",
  },
  {
    question: "Do you take on smaller, one-off jobs?",
    answer:
      "Yes — single storefront signage or a one-off vehicle wrap is fine, we just scope it separately from full campaign work.",
  },
  {
    question: "Can we visit the studio before signing on?",
    answer:
      "Absolutely — both our Ahmedabad and Mumbai studios take walk-in meetings by appointment.",
  },
];

function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="contact-faq-section">
      <div className="contact-faq-wrap">

        <div className="contact-faq-heading">
          <span className="contact-faq-eyebrow">
            03 — Before You Write In
          </span>

          <h2>Quick answers</h2>
        </div>

        <div className="contact-faq-list">

          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={`contact-faq-item ${
                  isOpen ? "open" : ""
                }`}
                key={faq.question}
              >

                <button
                  type="button"
                  className="contact-faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <h4>{faq.question}</h4>

                  <span
                    className="contact-faq-plus"
                    aria-hidden="true"
                  ></span>
                </button>

                <div
                  className="contact-faq-answer"
                  style={{
                    maxHeight: isOpen ? "200px" : "0px",
                  }}
                >
                  <p>{faq.answer}</p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default ContactFAQ;