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
    name: "Essential Hotel",
    icon: Zap,
    price: "$49",
    period: "/month",
    tag: "For small hotels",
    desc: " Focus: Perfect for independent bed & breakfasts, smaller guesthouses, and boutique hotels looking to digitize their main desk.",
    features: [
      "Core Room Reservation Matrix",
      "Fast Check-In/Out,",
      "Basic Guest Profiles",
      "IHousekeeping Tasks",
      "Single Location",
    ],
    button: "Start Essentials",
  },
  {
    name: "Enterprise Premium",
    icon: Sparkles,
    price: "$99",
    period: "/month",
    tag: "Most Popular",
    desc: "Engineered for high-occupancy hotels, luxury resorts, and growing multi-branch hospitality groups.",
    features: [
      "Everything in Essential + Multi-Branch Management (Up to 3 Locations)",
      "Integrated Cafe POS",
      "Car Rental Fleet Module",
      "AI Dynamic Pricing",
      "Native Guest Self-Service Portal.",
      "Priority support",
    ],
    button: "Choose Premuium",
    popular: true,
  },
  {
    name: "Global Chain Ecosystem",
    icon: Crown,
    price: "Custom",
    period: "",
    tag: "For hotel groups",
    desc: "A Tailored for large hotel groups, franchises, and multi-branch networks requiring deep administrative oversight.",
    features: [
      "Unlimited Hotel Branches",
      "Consolidated Corporate Dashboard",
      "Master Inventory & Shared Procurement",
      "Custom Local Bank API Integrations",
      "Full AI Automation Suite,",
      "24/7 Priority SLA Support.",
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
            Flexible Plans for
            <strong> Modern Hospitality</strong>
          </h2>

          <p>
            Pick the right plan for your hotel, your team, and the guest
            experience you want to deliver
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