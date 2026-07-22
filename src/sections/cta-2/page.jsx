import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle ,Sparkles} from "lucide-react";
import "./cta-2.css";
import { ctaTwoContent } from "../../data/staticData";

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
          <span className="cta-two-badge">             <Sparkles size={15} /> &nbsp;
{ctaTwoContent.badge}
</span>

          <h2>
           {ctaTwoContent.heading}
            <span> {ctaTwoContent.highlight}</span>
          </h2>

          <p>{ctaTwoContent.description}</p>

          <div className="cta-two-points">
            {ctaTwoContent.points.map((point) => (
              <span key={point}>
                <CheckCircle2 size={17} />
                {point}
              </span>
            ))}
          </div>
        </div>

        <div className="cta-two-actions">
          <a href="#contact" className="cta-two-primary">
            {ctaTwoContent.primaryCta}
            <ArrowRight size={18} />
          </a>

          <a href="#contact" className="cta-two-secondary">
            <MessageCircle size={18} />
            {ctaTwoContent.secondaryCta}
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