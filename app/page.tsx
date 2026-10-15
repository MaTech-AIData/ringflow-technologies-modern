
const solutions = [
  {
    title: "Smart Call Management",
    description:
      "Manage incoming and outgoing calls, monitor missed calls, and keep customer conversations organised.",
    image: "/smartcall.jpeg",
    alt: "Smart call management",
  },
  {
    title: "Connected Communication",
    description:
      "Connect business calls, WhatsApp conversations, and Instagram messages in one workflow.",
    image: "/letsconnect.png",
    alt: "Connected customer communication",
  },
  {
    title: "Lead and Team Management",
    description:
      "Allocate leads, track follow-ups, and coordinate team shifts more efficiently.",
    image: "/leadmanagement.jpeg",
    alt: "Lead and team management",
  },
];

const features = [
  "Incoming and outgoing calls",
  "Missed-call monitoring",
  "Lead allocation and tracking",
  "WhatsApp conversations",
  "Instagram chats",
  "Team shift management",
];

export default function HomePage() {
  return (
    <div className="rf-home">
      <section className="rf-hero">
        <div className="rf-container rf-hero-grid">
          <div className="rf-hero-content">
            <p className="rf-eyebrow">BUSINESS COMMUNICATION, SIMPLIFIED</p>

            <h1>
              One Business Number.
              <span>Total Control.</span>
            </h1>

            <p className="rf-hero-description">
              Connect your calls, customer conversations, and team in one
              organised workflow with Ring Flow Technologies.
            </p>

            <div className="rf-button-row">
              <a className="rf-button rf-button-red" href="/contact">
                Get Started →
              </a>

              <a className="rf-button rf-button-outline" href="/solutions">
                Explore Solutions
              </a>
            </div>

            <p className="rf-hero-note">Simple. Connected. Powerful.</p>
          </div>

          <div className="rf-hero-visual">
            <img
              className="rf-hero-image"
              src="/callcentre.png"
              alt="Customer service team handling business calls"
            />
          </div>
        </div>
      </section>

      <section className="rf-section">
        <div className="rf-container rf-intro-grid">
          <div>
            <p className="rf-eyebrow">WELCOME TO RING FLOW</p>
            <h2>
              Make Every Customer{" "}
              <span className="rf-red-text">Connection Count.</span>
            </h2>
          </div>

          <div className="rf-intro-copy">
            <p>
              Make business communication easier to manage. Organise customer
              calls, follow up on leads, and help your team stay connected.
            </p>
            <a className="rf-text-link" href="/about">
              Discover Ring Flow →
            </a>
          </div>
        </div>
      </section>

      <section className="rf-how rf-section">
        <div className="rf-container">
          <div className="rf-section-heading">
            <p className="rf-eyebrow">HOW IT WORKS</p>
            <h2>
              Simple. Connected. <span className="rf-red-text">Powerful.</span>
            </h2>
            <p>A straightforward way to manage business communication.</p>
          </div>

          <div className="rf-steps-grid">
            <article className="rf-step-card">
              <span className="rf-step-number">01</span>
              <h3>Connect</h3>
              <p>Bring your business communication workflow together.</p>
            </article>

            <article className="rf-step-card">
              <span className="rf-step-number">02</span>
              <h3>Manage</h3>
              <p>Organise calls, conversations, leads, and team activity.</p>
            </article>

            <article className="rf-step-card">
              <span className="rf-step-number">03</span>
              <h3>Grow</h3>
              <p>Improve follow-ups and create better customer experiences.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="rf-solutions rf-section">
        <div className="rf-container">
          <div className="rf-section-heading">
            <p className="rf-eyebrow">OUR SOLUTIONS</p>
            <h2>
              Everything Your Team Needs{" "}
              <span className="rf-red-text">to Stay Connected.</span>
            </h2>
            <p>
              Practical tools to help your team stay organised and responsive.
            </p>
          </div>

          <div className="rf-solution-grid">
            {solutions.map((solution) => (
              <article className="rf-solution-card" key={solution.title}>
                <div className="rf-solution-image-wrap">
                  <img
                    className="rf-solution-image"
                    src={solution.image}
                    alt={solution.alt}
                    loading="lazy"
                  />
                </div>

                <div className="rf-solution-body">
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                  <a className="rf-text-link" href="/solutions">
                    Learn More →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="rf-center-action">
            <a className="rf-button rf-button-dark" href="/solutions">
              View All Solutions →
            </a>
          </div>
        </div>
      </section>

      <section className="rf-features rf-section">
        <div className="rf-container rf-features-grid">
          <div className="rf-features-intro">
            <p className="rf-eyebrow rf-eyebrow-light">ONE PLATFORM</p>
            <h2>Everything Your Team Needs to Stay Connected.</h2>
            <p>
              Manage customer communication and keep your team focused on
              delivering better service.
            </p>
            <a className="rf-button rf-button-red" href="/solutions">
              Explore Solutions →
            </a>
          </div>

          <div className="rf-feature-list">
            {features.map((feature, index) => (
              <div className="rf-feature-item" key={feature}>
                <span className="rf-feature-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rf-cta">
        <div className="rf-container rf-cta-content">
          <div>
            <p className="rf-eyebrow rf-eyebrow-light">LET'S CONNECT</p>
            <h2>Make Every Call Count.</h2>
            <p>
              Give your business a more organised way to communicate with
              customers.
            </p>
          </div>

          <a className="rf-button rf-button-white" href="/contact">
            Contact Our Team →
          </a>
        </div>
      </section>
    </div>
  );
}
