
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <a href="/" className="footer-brand">
        Ring Flow Technologies
      </a>
      <p>Every call matters.</p>
      <div className="footer-links">
        <a href="/about">About</a>
        <a href="/solutions">Solutions</a>
        <a href="/pricing">Pricing</a>
        <a href="/contact">Contact</a>
      </div>
      <small>
        © {new Date().getFullYear()} Ring Flow Technologies.
        All rights reserved.
      </small>
    </footer>
  );
}
