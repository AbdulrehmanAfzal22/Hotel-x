import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import "./cta.css";

const CTA = () => {
  return (
    <section className="cta-section" id="cta">
      <motion.div
        className="cta-panel"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="cta-orb cta-orb-one"></div>
        <div className="cta-orb cta-orb-two"></div>

        <div className="cta-copy">
          <span className="cta-mini">
            <Sparkles size={15} />
            HotelX by Hashverx
          </span>

          <h2>
           Curated for boutique hotels, luxury resorts, and expanding hospitality chains.

            <span>Want to calculate your operational ROI?</span>
          </h2>

          <p>
            HotelX puts bookings, rooms, staff, billing, housekeeping, and
            reporting into a single dashboard designed to make every shift easier.
          </p>
        </div>

        <div className="cta-actions">
          <a href="#contact" className="cta-primary">
            Book free demo <ArrowRight size={18} />
          </a>

          <a href="#features" className="cta-secondary">
           Take a 5-Minute Virtual Hotel Tour
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;