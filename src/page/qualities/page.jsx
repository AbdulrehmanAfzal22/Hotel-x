import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Wrench,
  ShieldCheck,
  Settings2,
  CalendarCheck,
  LayoutDashboard,
  ShoppingBag,
  Factory,
  SlidersHorizontal,
  Store,
  ClipboardList,
  FileBarChart,
} from "lucide-react";
import "./qualities.css";

import reservationImg from "../../assets/maintaining.png";
import frontDeskImg from "../../assets/user-access.png";
import roomsImg from "../../assets/user-config.png";
import bookingImg from "../../assets/booking.png";
import dashboardImg from "../../assets/dashboard.png";
import productImg from "../../assets/product.png";
import manufacturersImg from "../../assets/manufacturing.png";
import configImg from "../../assets/config.png";
import vendorImg from "../../assets/vendor.png";
import cleaningImg from "../../assets/cleaning.png";
import reportImg from "../../assets/different.png";

const modules = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    image: dashboardImg,
    heading: "Unified Dashboard",
    desc: "Monitor bookings, occupancy, revenue, room availability, and daily hotel performance from one centralized dashboard."
  },

  {
    title: "Room Booking",
    icon: CalendarCheck,
    image: bookingImg,
    heading: "Room Booking",
    desc: "Create bookings, manage check-ins, check-outs, invoices, guest stays, and reservations in just a few clicks."
  },

  {
    title: "Room Maintenance",
    icon: Wrench,
    image: reservationImg,
    heading: "Room Maintenance",
    desc: "Track maintenance requests, assign engineers, and ensure every room stays guest-ready."
  },

  {
    title: "Configuration Menu",
    icon: SlidersHorizontal,
    image: configImg,
    heading: "Hotel Configuration",
    desc: "Configure hotel rooms, floors, amenities, taxes, services, and system settings from one place."
  },

  {
    title: "User Access",
    icon: ShieldCheck,
    image: frontDeskImg,
    heading: "User Access",
    desc: "Control employee permissions and secure sensitive hotel operations using role-based access."
  },

  {
    title: "Configuration",
    icon: Settings2,
    image: roomsImg,
    heading: "Permission Configuration",
    desc: "Assign permissions for departments, employees, and operational workflows with complete flexibility."
  },

  {
    title: "Reports",
    icon: FileBarChart,
    image: reportImg,
    heading: "Reports & Analytics",
    desc: "Generate occupancy, booking, financial, and operational reports to make smarter business decisions."
  },

  {
    title: "Product",
    icon: ShoppingBag,
    image: productImg,
    heading: "Products & Inventory",
    desc: "Manage restaurant items, minibar products, hotel amenities, pricing, and stock from one inventory system."
  },

  {
    title: "Vendor",
    icon: Store,
    image: vendorImg,
    heading: "Vendor Management",
    desc: "Maintain supplier records, purchase contacts, payment information, and procurement history."
  },

  {
    title: "Manufacturers",
    icon: Factory,
    image: manufacturersImg,
    heading: "Manufacturers",
    desc: "Store manufacturer details for hotel assets, equipment, furniture, appliances, and vehicles."
  },

  {
    title: "Maintenance Team",
    icon: ClipboardList,
    image: cleaningImg,
    heading: "Maintenance Team",
    desc: "Organize maintenance staff, assign work orders, and monitor task completion across the property."
  }
];

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
          <span>HotelX Modules</span>

          <h2>
            One system for every
            <strong> hotel operation.</strong>
          </h2>

          <p>
            Select a module and preview how HotelX keeps your hotel operations
            elegant, fast, and organized.
          </p>
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

                  <p className="module-description">
                    {modules[active].desc}
                  </p>
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