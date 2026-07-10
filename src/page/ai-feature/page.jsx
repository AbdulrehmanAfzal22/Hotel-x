import { motion } from "framer-motion";
import {
  Bot,
  TrendingUp,
  Users,
  ReceiptText,
  CalendarSearch,
} from "lucide-react";
import "./ai.css";

const aiFeatures = [
  {
    icon: ReceiptText,
    title: "AI Commission Report",
    desc: "Automatically calculate client, agent, or partner commissions from bookings and payments.",
    command: "Show commission report for all clients this month.",
  },
  {
    icon: TrendingUp,
    title: "AI Revenue Forecasting",
    desc: "Predict upcoming revenue, occupancy trends, and expected booking performance.",
    command: "Forecast next month revenue and occupancy.",
  },
  {
    icon: Users,
    title: "AI Guest Insights",
    desc: "Analyze guest history, preferences, repeat visits, and spending behavior.",
    command: "Show top returning guests and their preferences.",
  },
  {
    icon: CalendarSearch,
    title: "AI Booking Analysis",
    desc: "Find booking patterns, cancellation risks, peak dates, and slow periods.",
    command: "Analyze booking trends for the last 30 days.",
  },
  {
    icon: Bot,
    title: "AI Hotel Assistant",
    desc: "Ask natural-language questions about rooms, guests, payments, reports, and operations.",
    command: "Which rooms need attention today?",
  },
];

const AiFeatures = () => {
  return (
    <section className="ai-section" id="ai-features">
      <div className="ai-glow ai-glow-one"></div>
      <div className="ai-glow ai-glow-two"></div>

      <div className="ai-container">
        <motion.div
          className="ai-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* <span>AI Features</span> */}
          <h2>
            Ask your hotel system.
            <strong> Get instant answers.</strong>
          </h2>
          <p>
            HotelX AI helps managers understand bookings, guests, revenue,
            commissions, and daily operations through simple commands.
          </p>
        </motion.div>

        <div className="ai-grid">
          {aiFeatures.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="ai-card"
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="ai-icon">
                  <Icon size={24} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <div className="command-box">
                  <span>Command</span>
                  <code>{item.command}</code>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AiFeatures;