import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Building2,
  User,
  MessageSquare,
  CheckCircle2,
  XCircle,
  Loader2,
  X,
} from "lucide-react";
import "./contact.css";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [showPopup, setShowPopup] = useState(false);

  const isLocked = status === "sending" || status === "sent";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLocked) return; // hard guard against double submit

    setStatus("sending");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/abdulrehmanafzal60@gmail.com", // replace with your real receiving email
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        }
      );

      if (response.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    // allow retry only if the last attempt failed
    if (status === "error") setStatus("idle");
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>

      <div className="contact-container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span>Contact Sales</span>

          <h2>
            Let’s modernize your
            <strong> hotel operations.</strong>
          </h2>

          <p>
            Tell us about your hotel, and we’ll help you find the right HotelX
            setup for bookings, rooms, billing, staff, and reporting.
          </p>

          <div className="contact-info">
            <div>
              <Mail size={18} />
              sales@hotelx.com
            </div>

            <div>
              <Phone size={18} />
              +92 300 2324443 <br />
              +1 343 2324443
            </div>

            <div>
              <MapPin size={18} />
              Lahore, Pakistan
              Makkah, Saudi Arabia
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* FormSubmit config fields */}
          <input
            type="hidden"
            name="_subject"
            value="New HotelX Contact Form Submission"
          />
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="form-row">
            <div className="form-group">
              <label>Your Name</label>
              <div className="input-box">
                <User size={18} />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  disabled={isLocked}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Hotel Name</label>
              <div className="input-box">
                <Building2 size={18} />
                <input
                  type="text"
                  name="hotel_name"
                  placeholder="Hotel / company name"
                  required
                  disabled={isLocked}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <div className="input-box">
              <Mail size={18} />
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                disabled={isLocked}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Message</label>
            <div className="textarea-box">
              <MessageSquare size={18} />
              <textarea
                name="message"
                placeholder="Tell us what you need..."
                rows="5"
                required
                disabled={isLocked}
              ></textarea>
            </div>
          </div>

          <button type="submit" className="contact-btn" disabled={isLocked}>
            {status === "sending" ? (
              <>
                Sending <Loader2 size={18} className="spin-icon" />
              </>
            ) : status === "sent" ? (
              <>
                Message sent <CheckCircle2 size={18} />
              </>
            ) : (
              <>
                Send message <ArrowRight size={18} />
              </>
            )}
          </button>
        </motion.form>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="contact-popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
          >
            <motion.div
              className="contact-popup"
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="contact-popup-close"
                onClick={closePopup}
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {status === "sent" ? (
                <>
                  <div className="contact-popup-icon success">
                    <CheckCircle2 size={30} />
                  </div>
                  <h3>Message sent!</h3>
                  <p>Thanks for reaching out. Our team will get back to you shortly.</p>
                </>
              ) : (
                <>
                  <div className="contact-popup-icon error">
                    <XCircle size={30} />
                  </div>
                  <h3>Something went wrong</h3>
                  <p>Please try again, or email us directly at sales@hotelx.com.</p>
                </>
              )}

              <button type="button" className="contact-popup-btn" onClick={closePopup}>
                {status === "sent" ? "Close" : "Try again"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}