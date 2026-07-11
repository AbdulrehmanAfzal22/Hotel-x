import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Crown,
} from "lucide-react";
import "./pricing.css";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "$49",
    period: "/month",
    tag: "For small hotels",
    desc: "Essential tools for smooth daily hotel operations.",
    features: [
      "Room booking management",
      "Guest records",
      "Basic dashboard",
      "Invoices and payments",
      "Email support",
    ],
    button: "Start Starter",
  },
  {
    name: "Professional",
    icon: Sparkles,
    price: "$99",
    period: "/month",
    tag: "Most Popular",
    desc: "Advanced operations with AI, automation, and reporting.",
    features: [
      "Everything in Starter",
      "AI dashboard assistant",
      "Housekeeping workflow",
      "Advanced reports",
      "Role-based access",
      "Priority support",
    ],
    button: "Choose Professional",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "Custom",
    period: "",
    tag: "For hotel groups",
    desc: "A complete system for multi-property hotel businesses.",
    features: [
      "Everything in Professional",
      "Multi-hotel management",
      "Custom AI reports",
      "Channel manager",
      "Dedicated onboarding",
      "24/7 premium support",
    ],
    button: "Contact Sales",
  },
];

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
            Flexible plans for
            <strong> modern hospitality.</strong>
          </h2>

          <p>
            Choose a plan that matches your hotel size, team, and operational
            goals.
          </p>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, index) => {
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