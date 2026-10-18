import Link from "next/link";
import {
  Phone,
  PhoneCall,
  Headphones,
  PhoneMissed,
  ChartNoAxesCombined,
  Users,
  MessageCircle,
  Camera,
  CalendarClock,
  Settings,
  TrendingUp,
  Check,
  ArrowRight,
  Zap,
  ShieldCheck,
  CircleHelp,
} from "lucide-react";

const pricingFeatures = [
  {
    number: "01",
    title: "One Business Number",
    description:
      "Give your business one professional number for managing customer calls and connecting with your team.",
    icon: Phone,
  },
  {
    number: "02",
    title: "Incoming & Outgoing Calls",
    description:
      "Manage incoming and outgoing calls through a connected business communication platform.",
    icon: PhoneCall,
  },
  {
    number: "03",
    title: "Missed-Call Monitoring",
    description:
      "Keep track of missed calls and help your team follow up with customers and opportunities.",
    icon: PhoneMissed,
  },
  {
    number: "04",
    title: "Call Analytics & Reports",
    description:
      "Review call activity and use communication insights to support better business decisions.",
    icon: ChartNoAxesCombined,
  },
  {
    number: "05",
    title: "Lead Management",
    description:
      "Organize customer enquiries, allocate leads to team members, and track follow-ups.",
    icon: Users,
  },
  {
    number: "06",
    title: "WhatsApp Conversations",
    description:
      "Manage customer conversations through supported WhatsApp integrations.",
    icon: MessageCircle,
  },
  {
    number: "07",
    title: "Instagram Conversations",
    description:
      "Manage customer enquiries through supported Instagram integrations.",
    icon: Camera,
  },
  {
    number: "08",
    title: "Team Shift Management",
    description:
      "Organize communication responsibilities around your team's working shifts.",
    icon: CalendarClock,
  },
  {
    number: "09",
    title: "Setup & Team Training",
    description:
      "Get initial platform setup and team training as part of the installation package.",
    icon: Settings,
  },
  {
    number: "10",
    title: "Business Scalability",
    description:
      "Build an organized communication workflow that can grow alongside your business.",
    icon: TrendingUp,
  },
];

const pricingFaqs = [
  {
    question: "Is the installation fee a one-time payment?",
    answer:
      "Yes. The listed installation fee is KSh 40,000, payable once. Initial setup and team training are included in the installation package.",
  },
  {
    question: "How much is the monthly subscription?",
    answer:
      "The listed subscription is KSh 9,500 per agent per month, with a minimum of two agents. For two agents, the monthly subscription totals KSh 19,000.",
  },
  {
    question: "Is airtime included in the monthly fee?",
    answer:
      "Airtime is billed separately according to usage. Contact our team to discuss your expected call volume and airtime requirements.",
  },
  {
    question: "Can I get a package for my business size?",
    answer:
      "Contact Ring Flow Technologies to discuss your team size, communication needs, and any specific requirements.",
  },
  {
    question: "How do I get started?",
    answer:
      "Use the Get Started button to contact our team. We can discuss your requirements, explain the setup process, and help you determine the right package.",
  },
];

export default function PricingPage() {
  return (
    <main className="pricing-page">
      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="pricing-hero">
        <div className="pricing-container">
          <div className="pricing-hero-content">
            <span className="pricing-eyebrow">
              TRANSPARENT. FLEXIBLE. BUSINESS-FOCUSED.
            </span>

            <h1>
              Simple Pricing.
              <br />
              <span>Powerful Communication.</span>
            </h1>

            <p className="pricing-hero-description">
              Everything your team needs to manage calls, customers,
              leads, and conversations through one connected
              communication platform.
            </p>

            <div className="pricing-hero-actions">
              <Link
                href="/contact/"
                className="pricing-button pricing-button-primary"
              >
                Get Started <ArrowRight size={18} />
              </Link>

              <Link
                href="/solutions/"
                className="pricing-button pricing-button-outline"
              >
                Explore Solutions
              </Link>
            </div>

            <div className="pricing-trust-points">
              <span>
                <Check size={17} /> One connected platform
              </span>

              <span>
                <Check size={17} /> Initial team training
              </span>

              <span>
                <Check size={17} /> Usage-based airtime
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRICING PLANS
      ===================================================== */}
      <section
        className="pricing-section"
        id="pricing-plans"
      >
        <div className="pricing-container">
          <div className="pricing-section-heading">
            <span className="pricing-eyebrow">
              OUR PRICING
            </span>

            <h2>Know What You Pay For</h2>

            <p>
              Start with professional setup, support your team with
              a monthly subscription, and pay for airtime according
              to usage.
            </p>
          </div>

          <div className="pricing-cards">
            {/* INSTALLATION CARD */}
            <article className="pricing-card">
              <div className="pricing-card-icon">
                <Settings size={27} />
              </div>

              <p className="pricing-card-label">
                ONE-TIME PAYMENT
              </p>

              <h3>Installation & Setup</h3>

              <p className="pricing-card-description">
                Get your communication platform set up and your
                team prepared to use it.
              </p>

              <div className="pricing-amount">
                <span>KSh</span> 40,000
              </div>

              <p className="pricing-billing-note">
                Paid once
              </p>

              <div className="pricing-divider" />

              <h4>What you get</h4>

              <ul className="pricing-check-list">
                <li>Platform installation and setup</li>
                <li>Initial configuration</li>
                <li>Team training</li>
                <li>Getting-started guidance</li>
              </ul>

              <Link
                href="/contact/"
                className="pricing-button pricing-button-dark"
              >
                Discuss Installation <ArrowRight size={17} />
              </Link>
            </article>

            {/* MONTHLY SUBSCRIPTION CARD */}
            <article className="pricing-card pricing-card-featured">
              <div className="pricing-popular-badge">
                CORE SUBSCRIPTION
              </div>

              <div className="pricing-card-icon">
                <Zap size={27} />
              </div>

              <p className="pricing-card-label">
                MONTHLY SUBSCRIPTION
              </p>

              <h3>Per-Agent Plan</h3>

              <p className="pricing-card-description">
                Equip your team with connected communication tools
                for managing customer interactions.
              </p>

              <div className="pricing-amount">
                <span>KSh</span> 9,500
              </div>

              <p className="pricing-billing-note">
                Per agent, per month
              </p>

              <div className="pricing-minimum">
                Minimum of 2 agents
              </div>

              <div className="pricing-divider" />

              <h4>Core capabilities</h4>

              <ul className="pricing-check-list">
                <li>Business communication platform</li>
                <li>Incoming and outgoing call management</li>
                <li>Call monitoring and reporting</li>
                <li>Missed-call tracking</li>
                <li>Lead allocation and tracking</li>
                <li>Team communication tools</li>
              </ul>

              <Link
                href="/contact/"
                className="pricing-button pricing-button-primary pricing-full-button"
              >
                Get Started Today <ArrowRight size={17} />
              </Link>
            </article>

            {/* AIRTIME CARD */}
            <article className="pricing-card">
              <div className="pricing-card-icon">
                <PhoneCall size={27} />
              </div>

              <p className="pricing-card-label">
                FLEXIBLE USAGE
              </p>

              <h3>Airtime</h3>

              <p className="pricing-card-description">
                Manage your calling expenditure according to your
                business communication usage.
              </p>

              <div className="pricing-amount pricing-usage-amount">
                PAY AS
                <br />
                YOU USE
              </div>

              <p className="pricing-billing-note">
                Billed according to usage
              </p>

              <div className="pricing-divider" />

              <h4>How it works</h4>

              <ul className="pricing-check-list">
                <li>Usage-based billing</li>
                <li>Flexible communication spending</li>
                <li>Suitable for different call volumes</li>
                <li>Discuss your requirements with our team</li>
              </ul>

              <Link
                href="/contact/"
                className="pricing-button pricing-button-dark"
              >
                Ask About Airtime <ArrowRight size={17} />
              </Link>
            </article>
          </div>

          <div className="pricing-cost-note">
            <CircleHelp size={20} />

            <p>
              Airtime is billed separately according to usage.
              Confirm additional charges, integrations, and
              package-specific inclusions with our team before
              subscribing.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT YOU WILL GET — ICON CARDS
      ===================================================== */}
         <section className="pricing-benefits-section">
  <div className="pricing-container">
    <div className="pricing-section-heading">
      <span className="pricing-eyebrow">
        MORE THAN A PHONE NUMBER
      </span>

      <h2>Everything Your Business Needs</h2>

      <p>
       Powerful communication tools designed to keep your team connected,
            productive and focused on your customers.
      </p>
    </div>

    <div className="pricing-benefits-grid">
      <article className="pricing-benefit-card">
        <div className="pricing-benefit-icon">
          <PhoneCall size={27} aria-hidden="true" />
        </div>

        <h3>One Business Number</h3>

        <p>
          One professional number for all your business
          communication, making it easier for customers
          to reach your team.
        </p>

        <div className="get-line" />
      </article>

      <article className="pricing-benefit-card">
        <div className="pricing-benefit-icon">
          <Headphones size={27} aria-hidden="true" />
        </div>

        <h3>Real-Time Call Monitoring</h3>

        <p>
          Monitor calls in real time and manage your team&apos;s
          communication through a powerful and easy-to-use
          dashboard.
        </p>

        <div className="get-line" />
      </article>

      <article className="pricing-benefit-card">
        <div className="pricing-benefit-icon">
          <ChartNoAxesCombined size={27} aria-hidden="true" />
        </div>

        <h3>Detailed Call Reports</h3>

        <p>
          Get detailed reports and performance analytics that
          help you understand activity and make better
          business decisions.
        </p>

        <div className="get-line" />
      </article>

      <article className="pricing-benefit-card">
        <div className="pricing-benefit-icon">
          <Users size={27} aria-hidden="true" />
        </div>

        <h3>Better Customer Experience</h3>

        <p>
          Improve customer interactions while giving your team
          the tools they need to communicate and work more
          efficiently.
        </p>

        <div className="get-line" />
      </article>

      <article className="pricing-benefit-card">
        <div className="pricing-benefit-icon">
          <TrendingUp size={27} aria-hidden="true" />
        </div>

        <h3>Scalable &amp; Easy to Use</h3>

        <p>
          A simple communication platform that grows with your
          business, from a small team to a growing organization.
        </p>

        <div className="get-line" />
      </article>

      <article className="pricing-benefit-card">
        <div className="pricing-benefit-icon">
          <ShieldCheck size={27} aria-hidden="true" />
        </div>

        <h3>Secure &amp; Reliable Platform</h3>

        <p>
          Dependable communication built to keep your business
          connected, with security and reliability at its core.
        </p>

        <div className="get-line" />
      </article>
    </div>

    <p className="pricing-features-note">
      Feature availability depends on the selected package
      and supported integrations. Contact us to confirm which
      features are available for your business.
    </p>
  </div>
</section>

      {/* =====================================================
          VALUE SECTION
      ===================================================== */}
      <section className="pricing-value-section">
        <div className="pricing-container pricing-value-grid">
          <div className="pricing-value-heading">
            <span className="pricing-eyebrow">
              BUILT AROUND YOUR TEAM
            </span>

            <h2>
              One Number.
              <br />
              One Platform.
              <br />
              Total Control
            </h2>
            <p>Grow your business with every call.</p>
          </div>

          <div className="pricing-value-content">
            <div className="pricing-value-item">
              <span className="pricing-value-icon">
                <Headphones size={23} />
              </span>

              <div>
                <h3>Connect with customers</h3>

                <p>
                  Bring business calling into a more organized
                  communication workflow.
                </p>
              </div>
            </div>

            <div className="pricing-value-item">
              <span className="pricing-value-icon">
                <ChartNoAxesCombined size={23} />
              </span>

              <div>
                <h3>Understand your activity</h3>

                <p>
                  Use available call information and reports to
                  gain visibility into customer interactions.
                </p>
              </div>
            </div>

            <div className="pricing-value-item">
              <span className="pricing-value-icon">
                <ShieldCheck size={23} />
              </span>

              <div>
                <h3>Organize your operations</h3>

                <p>
                  Help your team coordinate communication
                  responsibilities and customer follow-ups.
                </p>
              </div>
            </div>

            <Link
              href="/solutions/"
              className="pricing-text-link"
            >
              Discover Our Solutions <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FREQUENTLY ASKED QUESTIONS
      ===================================================== */}
      <section className="pricing-faq-section">
        <div className="pricing-container">
          <div className="pricing-section-heading">
            <span className="pricing-eyebrow">
              NEED CLARITY?
            </span>

            <h2>Frequently Asked Questions</h2>

            <p>
              Learn more about our pricing, setup, and
              communication services.
            </p>
          </div>

          <div className="pricing-faq-list">
            {pricingFaqs.map((faq) => (
              <details
                className="pricing-faq-item"
                key={faq.question}
              >
                <summary>
                  <span>{faq.question}</span>

                  <span className="pricing-faq-toggle">
                    +
                  </span>
                </summary>

                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CALL TO ACTION
      ===================================================== */}
      <section className="pricing-cta-section">
        <div className="pricing-container">
          <span className="pricing-eyebrow">
            READY TO GET CONNECTED?
          </span>

          <h2>Make Every Call Count.</h2>

          <p>
            Let's discuss your team, communication needs, and
            the right setup for your business.
          </p>

          <div className="pricing-hero-actions">
            <Link
              href="/contact/"
              className="pricing-button pricing-button-light"
            >
              Talk to Our Team <ArrowRight size={18} />
            </Link>

            <a
              href="https://wa.me/254700093587?text=Hello%20Ring%20Flow%20Technologies%2C%20I%20would%20like%20to%20discuss%20your%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="pricing-button pricing-button-whatsapp"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>

          <div className="pricing-cta-contact">
            <a href="tel:+254700093587">
              <Phone size={16} />
              0700 093 587
            </a>

            <a href="mailto:info@ringflow.co.ke">
              info@ringflow.co.ke
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}