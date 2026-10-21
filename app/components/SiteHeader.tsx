"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Home,
  Info,
  LayoutGrid,
  CreditCard,
  Phone,
  Menu,
  X,
} from "lucide-react";
import { assetPath } from "@/lib/site";

const navigationLinks = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "About Us",
    href: "/about/",
    icon: Info,
  },
  {
    label: "Our Solutions",
    href: "/solutions/",
    icon: LayoutGrid,
  },
  {
    label: "Pricing",
    href: "/pricing/",
    icon: CreditCard,
  },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      {/* BRAND LOGO AND NAME */}
      <Link
        href="/"
        className="brand"
        aria-label="Ring Flow Technologies home"
        onClick={() => setMenuOpen(false)}
      >
        <img
          src={assetPath("ringflow_logo.png")}
          alt="Ring Flow Technologies logo"
          className="brand-logo"
        />

        <span className="brand-name">
          <span className="brand-title">RING FLOW</span>
          <span className="brand-subtitle">TECHNOLOGIES</span>
        </span>
      </Link>

      {/* MOBILE MENU BUTTON */}
      <button
        type="button"
        className="mobile-menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* MAIN NAVIGATION */}
      <nav
        id="main-navigation"
        className={`main-nav ${menuOpen ? "mobile-nav-open" : ""}`}
        aria-label="Main navigation"
      >
        {navigationLinks.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="nav-link"
          >
            <Icon size={18} aria-hidden="true" />
            <span>{label}</span>
          </Link>
        ))}

        <Link
          href="/contact/"
          className="nav-contact"
          onClick={() => setMenuOpen(false)}
        >
          <Phone size={18} aria-hidden="true" />
          <span>Contact Us</span>
        </Link>
      </nav>
    </header>
  );
}