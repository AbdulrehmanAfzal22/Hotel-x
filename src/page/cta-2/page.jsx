import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import "./cta-2.css";

export default function CTATwo() {
  return (
    <section className="cta-two" id="contact-cta">
      <div className="cta-two-glow cta-two-glow-one"></div>
      <div className="cta-two-glow cta-two-glow-two"></div>

      <motion.div
        className="cta-two-card"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="cta-two-content">
          <span className="cta-two-badge">HotelX Management Platform</span>

          <h2>
           Ready to replace 
            <span> your fragmented hotel tools with a high-performance system?</span>
          </h2>

          <p>
            Manage reservations, rooms, guests, billing, housekeeping, and reports
            from one elegant hotel management system.
          </p>

          <div className="cta-two-points">
            <span>
              <CheckCircle2 size={17} />
              Free demo
            </span>
            <span>
              <CheckCircle2 size={17} />
              Quick setup
            </span>
            <span>
              <CheckCircle2 size={17} />
              Live support
            </span>
          </div>
        </div>

        <div className="cta-two-actions">
          <a href="#contact" className="cta-two-primary">
            Schedule demo
            <ArrowRight size={18} />
          </a>

          <a href="#contact" className="cta-two-secondary">
            <MessageCircle size={18} />
            Consult with a Hospitality Solutions Architect
          </a>

          {/* <div className="cta-two-note">
            <CalendarDays size={16} />
            Response within 30 minutes
          </div> */}
        </div>
      </motion.div>
    </section>
  );
}