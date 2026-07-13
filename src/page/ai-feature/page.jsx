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
    title: "Instant RevPAR Optimization",
    desc: " Maximize room occupancy and RevPAR instantly. Our intelligent engine adjusts room rates in real time based on local market demand, seasonal shifts, and competitor data across every hotel location. ",
 command: "    Boost occupancy & RevPAR with AI real-time pricing.",
  },
  {
    icon: TrendingUp,
    title: "AI-Powered Stock Forecasting:",
    desc: "Let AI analyze active room occupancy levels and past dining habits to forecast exactly how much stock your cafe and restaurant kitchens need to order,cutting food waste up to 20%.",
    command: "Generate Smart Inventory Plan",
  },
  {
    icon: Users,
    title: "AI Insights to lower climate control and lighting costs.",
    desc: "The platform interfaces with smart utility grids. The moment a guest checks out via their mobile portal, the system automatically triggers Eco-Mode to lower climate control and lighting costs.",

    command: "Activate Eco Mode",
  },
  {
    icon: CalendarSearch,
    title: "AI Booking Analysis",
    desc: "Handle up to 75% of routine guest requests—like room service orders, Wi-Fi passwords, and late checkout inquiries—instantly in multiple languages without bothering your front desk.",


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
            ASmart Hospitality: AI-Driven 
            <strong>Hotel Operations</strong>
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