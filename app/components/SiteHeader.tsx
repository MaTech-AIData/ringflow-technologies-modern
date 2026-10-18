
import Link from "next/link";
import { assetPath } from "@/lib/site";

export default function SiteHeader() {
  return (
    <header className="site-header">
      {/* BRAND LOGO AND NAME */}
      <Link
        href="/"
        className="brand"
        aria-label="Ring Flow Technologies home"
      >
        <img
          src={assetPath("ringflow_logo.png")}
          alt="Ring Flow Technologies logo"
          className="brand-logo"
        />

        <span className="brand-name">
          <span className="brand-title">RING FLOW</span>
          <span className="brand-subtitle">
            TECHNOLOGIES
          </span>
        </span>
      </Link>

      {/* MAIN NAVIGATION */}
      <nav
        className="main-nav"
        aria-label="Main navigation"
      >
        <Link href="/">Home</Link>
        <Link href="/about/">About Us</Link>
        <Link href="/solutions/">Our Solutions</Link>
        <Link href="/pricing/">Pricing</Link>

        <Link
          href="/contact/"
          className="nav-contact"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
}
