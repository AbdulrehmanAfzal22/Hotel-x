import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import "./faq.css";

const faqs = [
  {
    question:
      "Can cafe purchases and car rental charges be added automatically to a guest's final hotel bill?",
    answer:
      "Yes. Our unified architecture automatically routes dining tabs, spa sessions, and car rental expenditures directly to the guest's active digital hotel folio, simplifying checkout down to a single card swipe.",
  },
  {
    question:
      "How does the system sync operations and profiles across multiple hotel branches?",
    answer:
      "The platform houses a centralized database matrix. This lets hotel groups share guest histories and loyalty data across branches while keeping individual branch inventories, accounting files, and tax reporting structures completely distinct.",
  },
  {
    question:
      "Can my housekeeping and maintenance crews update room statuses from their mobile phones?",
    answer:
      "Absolutely. The platform features a responsive, mobile-optimized interface for floor staff. Cleaners can mark a room as \"Cleaned\" or report a maintenance issue, which triggers a live notification at the reception desk instantly.",
  },
  {
    question:
      "How long does it take to train front office personnel on this hospitality software?",
    answer:
      "Because the user interface was designed with modern user experience principles, new staff members can master core front-desk workflows—such as reservation adjustments, guest search, and invoice splitting—in less than two hours.",
  },
  {
    question:
      "Does the food inventory module alert our kitchen manager when stock runs low?",
    answer:
      "Yes. You can define custom minimum stock alert thresholds for critical kitchen and cafe ingredients. When stock dips below these parameters, the system triggers automated reorder notifications to prevent service delays.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="faq-section" id="faq">
      <div className="faq-header">
        {/* <span>Frequently Asked Questions</span> */}

        <h2>
          Everything you need to
          <strong> know about HotelX.</strong>
        </h2>

        <p>
          Find answers to the most common questions about our hotel management
          software.
        </p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${active === index ? "active" : ""}`}
          >
            <button
              className="faq-question"
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