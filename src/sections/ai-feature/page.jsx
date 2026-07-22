import { motion } from "framer-motion";
import "./ai.css";
import { aiFeatures, aiSectionContent } from "../../data/staticData";

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
            {aiSectionContent.heading} <strong>{aiSectionContent.highlight}</strong>
          </h2>
          <p>{aiSectionContent.description}</p>
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