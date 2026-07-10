import "./navbar.css";

const Navbar = () => {
  return (
    <header className="nav-wrapper">
      <nav className="navbar">

        <a href="/" className="logo">
          <span className="hotel">Hotel</span>

          <div className="logo-x">
            X
          </div>
        </a>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#ai-features">AI</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="cta-btn">
          Get Started
        </a>

      </nav>
    </header>
  );
};

export default Navbar;