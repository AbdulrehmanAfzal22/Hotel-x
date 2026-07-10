import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  Building2,
  BadgeCheck,
  Globe2,
  ShieldCheck,
} from "lucide-react";
import "./counter.css";

const stats = [
  {
    icon: Building2,
    value: 500,
    suffix: "+",
    label: "Hotels Managed",
  },
  {
    icon: BadgeCheck,
    value: 73,
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    icon: Globe2,
    value: 25,
    suffix: "+",
    label: "Booking Channels",
  },
  {
    icon: ShieldCheck,
    value: 99.9,
    suffix: "%",
    label: "System Uptime",
    decimals: 1,
  },
];

const Counters = () => {
  return (
    <section className="counter-section" id="counters">
      <motion.div
        className="counter-strip"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.35 }}
      >
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div className="counter-item" key={index}>
              <motion.div
                className="counter-icon"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  delay: index * 0.25,
                }}
              >
                <Icon size={22} strokeWidth={2.2} />
              </motion.div>

              <div className="counter-content">
                <h3>
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2.8}
                    decimals={item.decimals || 0}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {item.suffix}
                </h3>
                <p>{item.label}</p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Counters;