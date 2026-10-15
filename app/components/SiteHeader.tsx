export default function SiteHeader() {
  return (
    <header className="site-header">
      <a href="/" className="brand">
        <img
          src="/ringflow_logo.png"
          alt="Ring Flow Technologies logo"
          className="brand-logo"
        />

        <span className="brand-name">
          <span className="brand-title">RING FLOW</span>
          <span className="brand-subtitle">TECHNOLOGIES</span>
        </span>
      </a>

      <nav className="main-nav" aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/solutions">Our Solutions</a>
        <a href="/pricing">Pricing</a>

        <a href="/contact" className="nav-contact">
          Contact Us
        </a>
      </nav>
    </header>
  );
}