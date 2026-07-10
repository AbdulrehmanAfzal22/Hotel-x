import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import "./faq.css";

const faqs = [
  {
    question: "Can HotelX manage multiple hotels or branches?",
    answer:
      "Yes. HotelX supports single-property and multi-property management, allowing you to manage rooms, bookings, staff, reports, and operations for multiple hotels from one centralized dashboard.",
  },
  {
    question: "Does HotelX support online reservations and room bookings?",
    answer:
      "Absolutely. Guests can book rooms online while your staff can also create walk-in reservations. The system updates room availability in real time to prevent double bookings.",
  },
  {
    question: "Can I manage billing, invoices, and payments in one place?",
    answer:
      "Yes. HotelX generates invoices, records guest payments, manages outstanding balances, and provides detailed financial reports directly from the system.",
  },
  {
    question: "Is HotelX secure and does it support user permissions?",
    answer:
      "Yes. HotelX includes role-based access control, secure authentication, audit logs, and customizable permissions so every employee only accesses the features relevant to their role.",
  },
  {
    question: "Can HotelX generate reports and business analytics?",
    answer:
      "Yes. HotelX provides occupancy reports, revenue analysis, booking statistics, guest history, maintenance reports, and customizable dashboards to help you make informed business decisions.",
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