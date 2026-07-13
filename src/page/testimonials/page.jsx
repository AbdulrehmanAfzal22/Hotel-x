import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./testimonials.css";

const testimonials = [
  {
    quote:

      "Before this system, our front desk, cafe, and housekeeping teams were on completely separate applications. Unifying everything into one dashboard completely eliminated walk-in room assignment errors .",

    highlight: "Daily operations became faster",
    name: "Ammar Khan",
    role: "Hotel Owner",
    company: "Strgis Hotel",
    initials: "AK",
  },
  {
    quote:
      "The room booking flow is simple, clear, and professional. Our front desk team now handles guest check-ins with much less confusion.",
    highlight: "much less confusion",
    name: "Sarah Ahmed",
    role: "Operations Manager",
    company: "Four seasons Hotel",
    initials: "SA",
  },
  {
    quote:
      "HotelX helped us reduce manual reporting work and gave management better visibility into revenue, occupancy, and room status.",
    highlight: "better visibility",
    name: "Bilal Sheikh",
    role: "Resort Manager",
    company: "Marriott",
    initials: "BS",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const item = testimonials[active];

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const parts = item.quote.split(item.highlight);

  return (
    <section className="hotelx-testimonials" id="testimonials">
      <button className="hotelx-testimonial-arrow left" onClick={prev}>
        <ChevronLeft size={26} />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="hotelx-testimonial-card"
          initial={{ opacity: 0, y: 22, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -18, scale: 0.98 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className="hotelx-testimonial-quote">
            “{parts[0]}
            <strong>{item.highlight}</strong>
            {parts[1]}”
          </p>

          <div className="hotelx-testimonial-user">
            <div className="hotelx-testimonial-avatar">{item.initials}</div>

            <div>
              <h4>{item.name}</h4>
              <span>{item.role}</span>
              <p>{item.company}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button className="hotelx-testimonial-arrow right" onClick={next}>
        <ChevronRight size={26} />
      </button>
    </section>
  );
}