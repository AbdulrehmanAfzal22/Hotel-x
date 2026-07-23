import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css";
import { testimonials, testimonialsSectionContent } from "../../data/staticData";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const item = testimonials[active];

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const parts = item.quote.split(item.highlight);

  return (
    <section className="hotelx-testimonials" id="testimonials">
      <div className="hotelx-testimonials-header">
        {/* <span className="hotelx-testimonials-badge">Testimonials</span> */}

        <h2>
          {testimonialsSectionContent.title}
          <span> {testimonialsSectionContent.highlight}</span>
        </h2>

        <p>{testimonialsSectionContent.description}</p>
      </div>

      <div className="hotelx-testimonials-body">
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
      </div>

      <div className="hotelx-testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`hotelx-testimonial-dot ${
              active === index ? "active" : ""
            }`}
            onClick={() => setActive(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          /> 
        ))}
      </div>
    </section>
  );
}
