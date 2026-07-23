import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./style.css";
import { modules, qualitiesSectionContent } from "../../data/staticData";

const HotelModules = () => {
  const [active, setActive] = useState(0);
  const previewRef = useRef(null);

  const handleSelect = (index) => {
    setActive(index);

    // Only relevant on stacked (mobile/tablet) layouts where the sidebar
    // sits above the preview — smoothly scroll the preview into view.
    if (window.innerWidth <= 1100 && previewRef.current) {
      previewRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hotel-modules" id="features">
      <div className="modules-glow modules-glow-one"></div>
      <div className="modules-glow modules-glow-two"></div>

      <div className="modules-container">
        <div className="modules-header">
          {/* <span>HotelX Modules</span> */}

          <h2>
            {qualitiesSectionContent.heading} <br />
            <strong> {qualitiesSectionContent.highlight}</strong>
          </h2>

          <p>{qualitiesSectionContent.description}</p>
        </div>

        <div className="modules-layout">
          <aside className="modules-sidebar">
            {modules.map((item, index) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.title}
                  type="button"
                  className={`module-link ${active === index ? "active" : ""}`}
                  onClick={() => handleSelect(index)}
                >
                  <span className="module-icon">
                    <Icon size={19} />
                  </span>

                  <span className="module-title">{item.title}</span>

                  <ArrowRight className="module-arrow" size={17} />
                </button>
              );
            })}
          </aside>

          <div className="modules-preview" ref={previewRef}>
            <AnimatePresence mode="wait">
              <motion.div
                key={modules[active].title}
                className="preview-card"
                initial={{ opacity: 0, y: 22, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.985 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <div className="preview-image-wrap">
                  <img
                    src={modules[active].image}
                    alt={modules[active].title}
                  />
                </div>

                <div className="preview-detail">
                  <h3>{modules[active].heading}</h3>

                  <ul className="module-description">
                    {modules[active].desc.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelModules;