import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import "./style.css";
import { pricingPlans, pricingSectionContent } from "../../data/staticData";

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-dome pricing-dome-left"></div>
      <div className="pricing-dome pricing-dome-right"></div>

      <div className="pricing-container">
        <motion.div
          className="pricing-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >

          <h2>
            {pricingSectionContent.heading}
            <strong> {pricingSectionContent.highlight}</strong>
          </h2>

          <p>{pricingSectionContent.description}</p>
        </motion.div>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.article
                key={plan.name}
                className={`pricing-card ${plan.popular ? "popular" : ""}`}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.58,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                {/* {plan.popular && (
                  <div className="popular-ribbon">Most Popular</div>
                )} */}

                <div className="pricing-card-top">
                  <div className="pricing-plan-meta">
                    <div className="pricing-icon">
                      <Icon size={22} strokeWidth={2.2} />
                    </div>

                    <span className="pricing-tag">{plan.tag}</span>
                  </div>

                  <div className="pricing-price">
                    <strong>{plan.price}</strong>
                    {plan.period && <span>{plan.period}</span>}
                  </div>

                  <h3>{plan.name}</h3>

                  <p className="pricing-desc">{plan.desc}</p>
                </div>

                <a href="#contact" className="pricing-btn">
                  {plan.button}
                  <ArrowRight size={18} />
                </a>

                <div className="pricing-divider"></div>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <CheckCircle2 size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}