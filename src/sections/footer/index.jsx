import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import "./style.css";
import { footerContent, socialLinks } from "../../data/staticData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="hotelx-footer">
      <div className="hotelx-footer-glow hotelx-footer-glow-one"></div>
      <div className="hotelx-footer-glow hotelx-footer-glow-two"></div>

      <div className="hotelx-footer-container">
        <div className="hotelx-footer-top">
          <div className="hotelx-footer-brand">
            <a href="#header" className="hotelx-footer-logo">
              Hotel<span>X</span>
            </a>

            <p>{footerContent.description}</p>

            <div className="hotelx-footer-socials">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="hotelx-footer-column">
            <h3>Product</h3>

            {footerContent.productLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="hotelx-footer-column">
            <h3>Company</h3>

            {footerContent.companyLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="hotelx-footer-office">
            <span className="hotelx-office-label">{footerContent.offices[0].label}</span>
            <h3>{footerContent.offices[0].title}</h3>

            <a
              href={`https://maps.google.com/?q=${footerContent.offices[0].mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={18} />
              <span>{footerContent.offices[0].address}</span>
            </a>

            <a href={`tel:${footerContent.offices[0].tel}`}>
              <Phone size={18} />
              <span>{footerContent.offices[0].phone}</span>
            </a>

            <a href={`mailto:${footerContent.offices[0].mailto}`}>
              <Mail size={18} />
              <span>{footerContent.offices[0].email}</span>
            </a>
          </div>

          <div className="hotelx-footer-office">
            <span className="hotelx-office-label">{footerContent.offices[1].label}</span>
            <h3>{footerContent.offices[1].title}</h3>

            <a
              href={`https://maps.google.com/?q=${footerContent.offices[1].mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={18} />
              <span>{footerContent.offices[1].address}</span>
            </a>

            <a href={`tel:${footerContent.offices[1].tel}`}>
              <Phone size={18} />
              <span>{footerContent.offices[1].phone}</span>
            </a>

            <a href={`mailto:${footerContent.offices[1].mailto}`}>
              <Mail size={18} />
              <span>{footerContent.offices[1].email}</span>
            </a>
          </div>
        </div>

        <div className="hotelx-footer-divider"></div>

        <div className="hotelx-footer-bottom">
          <p>{footerContent.copyright}</p>

          <div className="hotelx-footer-legal">
            {footerContent.legalLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="hotelx-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}