
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      {/* FOOTER BRAND */}
      <Link
        href="/"
        className="footer-brand"
        aria-label="Ring Flow Technologies home"
      >
        Ring Flow Technologies
      </Link>

      {/* BRAND TAGLINE */}
      <p>Every call matters.</p>

      {/* FOOTER NAVIGATION */}
      <nav
        className="footer-links"
        aria-label="Footer navigation"
      >
        <Link href="/about/">About</Link>
        <Link href="/solutions/">Solutions</Link>
        <Link href="/pricing/">Pricing</Link>
        <Link href="/contact/">Contact</Link>
      </nav>

      {/* COPYRIGHT */}
      <small>
        © 2026 Ring Flow Technologies. All rights reserved.
      </small>
    </footer>
  );
}
