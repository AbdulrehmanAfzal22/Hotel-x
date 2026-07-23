import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import "./style.css";
import { ctaContent } from "../../data/staticData";

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
            {ctaContent.badge}
          </span>

          <h2>
           {ctaContent.heading}

            <span>{ctaContent.highlight}</span>
          </h2>

          <p>{ctaContent.description}</p>
        </div>

        <div className="cta-actions">
          <a href="#contact" className="cta-primary">
            {ctaContent.primaryCta} <ArrowRight size={18} />
          </a>

          <a href="#features" className="cta-secondary">
           {ctaContent.secondaryCta}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;