import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import "./style.css";
import { faqs, faqSectionContent } from "../../data/staticData";

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="faq-section" id="faq">
      <div className="faq-header">
        {/* <span>Frequently Asked Questions</span> */}

        <h2>
          {faqSectionContent.heading}
          <strong> {faqSectionContent.highlight}</strong>
        </h2>

        <p>{faqSectionContent.description}</p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${active === index ? "active" : ""}`}
          >
            <button
              onClick={() =>
                setActive(active === index ? null : index)
              }
            >
              <span>{faq.question}</span>

              {active === index ? (
                <Minus size={20} />
              ) : (
                <Plus size={20} />
              )}
            </button>

            <AnimatePresence>
              {active === index && (
                <motion.div
                  className="faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}