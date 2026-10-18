
import Link from "next/link";
import { assetPath } from "@/lib/site";

const solutions = [
  {
    title: "Smart Call Management",
    description:
      "Manage incoming and outgoing calls, monitor missed calls, and keep customer conversations organised.",
    image: assetPath("smartcall.jpeg"),
    alt: "Smart business call management",
  },
  {
    title: "Connected Communication",
    description:
      "Connect business calls, WhatsApp conversations, and Instagram messages in one workflow.",
    image: assetPath("letsconnect.png"),
    alt: "Connected customer communication",
  },
  {
    title: "Lead and Team Management",
    description:
      "Allocate leads, track follow-ups, and coordinate team shifts more efficiently.",
    image: assetPath("leadmanagement.jpeg"),
    alt: "Lead and team management",
  },
];

const features = [
  "One Number for your entire team",
  "Real-Time monitoring and reporting",
  "Better Service, happier clients, stronger results",
  "Secure & Reliable communication"
];

export default function HomePage() {
  return (
    <main className="rf-home">
      {/* HERO SECTION */}
      <section className="rf-hero">
        <div className="rf-container rf-hero-grid">
          <div className="rf-hero-content">
            <p className="rf-eyebrow">
              SMART BUSINESS COMMUNICATION
            </p>

            <h1>
              One Business Number.
              <span>Total Control.</span>
            </h1>

            <p className="rf-hero-description">
              Manage your calls, customers, leads and conversations
              from one powerful communication platform.
            </p>

            <div className="rf-button-row">
              <Link
                className="rf-button rf-button-red"
                href="/contact/"
              >
                Get Started →
              </Link>

              <Link
                className="rf-button rf-button-outline"
                href="/solutions/"
              >
                Explore Solutions
              </Link>
            </div>

            <p className="rf-hero-note">
              Simple. Connected. Powerful.
            </p>
          </div>

          <div className="rf-hero-visual">
            <img
              className="rf-hero-image"
              src={assetPath("callcentre.png")}
              alt="Customer service team handling business calls"
            />
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="rf-section">
        <div className="rf-container rf-intro-grid">
          <div>
            <p className="rf-eyebrow">
              WELCOME TO RING FLOW
            </p>

            <h2>
              Make Every Customer{" "}
              <span className="rf-red-text">
                Connection Count.
              </span>
            </h2>
          </div>

          <div className="rf-intro-copy">
            <p>
              Make business communication easier to manage.
              Organise customer calls, follow up on leads, and help
              your team stay connected.
            </p>

            <Link
              className="rf-text-link"
              href="/about/"
            >
              Discover Ring Flow →
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="rf-how rf-section">
        <div className="rf-container">
          <div className="rf-section-heading">
            <p className="rf-eyebrow">
              HOW IT WORKS
            </p>

            <h2>
              Simple. Connected.{" "}
              <span className="rf-red-text">
                Powerful.
              </span>
            </h2>

            <p>
              Ring Flow Technologies helps your team manage customer
              communication through one connected system.
            </p>
          </div>

          <div className="rf-steps-grid">
            <article className="rf-step-card">
              <span className="rf-step-number">01</span>
              <h3>Connect</h3>
              <p>
                Connect your business number and communication
                channels.
              </p>
            </article>

            <article className="rf-step-card">
              <span className="rf-step-number">02</span>
              <h3>Manage</h3>
              <p>
                Manage calls, leads, WhatsApp and Instagram
                conversations from one place.
              </p>
            </article>

            <article className="rf-step-card">
              <span className="rf-step-number">03</span>
              <h3>Grow</h3>
              <p>
                Use communication insights to improve your team's
                performance and customer experience.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FEATURES WITH TELEPHONE BACKGROUND */}
      <section className="rf-features rf-section">
        <div className="rf-container rf-features-grid">
          <div className="rf-features-intro">
            <p className="rf-eyebrow">
              ONE PLATFORM
            </p>

            <h2>
              Everything Your Team Needs to Stay Connected.
            </h2>

            <p className="rf-features-description">
              Manage customer communication and keep your team
              focused on delivering better service.
            </p>

            <div className="rf-feature-list">
              {features.map((feature) => (
                <div
                  className="rf-feature-item"
                  key={feature}
                >
                  <span
                    className="rf-feature-check"
                    aria-hidden="true"
                  >
                    ✓
                  </span>

                  <h3>{feature}</h3>
                </div>
              ))}
            </div>

            <Link
              className="rf-button rf-button-red"
              href="/solutions/"
            >
              Explore Solutions →
            </Link>
          </div>

          <div
            className="rf-features-visual"
            role="img"
            aria-label="Business telephone communication"
            style={{
              backgroundImage: `url("${assetPath("telephone.jpg")}")`,
            }}
          />
        </div>
      </section>

      {/* SOLUTION PREVIEW */}
      <section className="rf-section rf-solutions-preview">
        <div className="rf-container">
          <div className="rf-section-heading">
            <p className="rf-eyebrow">
              OUR SOLUTIONS
            </p>

            <h2>
              Communication That Works for Your Business.
            </h2>
          </div>

          <div className="rf-solutions-grid">
            {solutions.map((solution) => (
              <article
                className="rf-solution-card"
                key={solution.title}
              >
                <img
                  src={solution.image}
                  alt={solution.alt}
                  className="rf-solution-image"
                />

                <div className="rf-solution-content">
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="rf-solutions-link">
            <Link
              className="rf-button rf-button-outline"
              href="/solutions/"
            >
              View All Solutions →
            </Link>
          </div>
        </div>
      </section>

      {/* NUMBERED FEATURES */}
      <section className="rf-features rf-section">
        <div className="rf-container rf-features-grid">
          <div className="rf-features-intro">
            <p className="rf-eyebrow rf-eyebrow-light">
              BUILT FOR YOUR TEAM
            </p>

            <h2>
              Keep Every Conversation Moving Forward.
            </h2>

            <p>
              Bring customer communication and team coordination
              together in one organised workflow.
            </p>

            <Link
              className="rf-button rf-button-red"
              href="/solutions/"
            >
              Explore Solutions →
            </Link>
          </div>

          <div className="rf-feature-list">
            {features.map((feature, index) => (
              <div
                className="rf-feature-item"
                key={feature}
              >
                <span className="rf-feature-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="rf-cta">
        <div className="rf-container rf-cta-content">
          <div>
            <p className="rf-eyebrow rf-eyebrow-light">
              Ready To Take Control?
            </p>

            <h2>Make Every Call Count.</h2>

            <p>
              Give your business one connected communication
              experience with Ring Flow Technologies.
            </p>
          </div>

          <Link
            className="rf-button rf-button-red"
            href="/contact/"
          >
            Contact Our Team →
          </Link>
        </div>
      </section>
    </main>
  );
}
