
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Solutions | Ring Flow Technologies",
  description:
    "Explore Ring Flow Technologies solutions for calls, leads, customer messaging, and team management.",
};

const solutions = [
  [
          
    "See All Incoming Calls & Outgoing Calls",
    "Get full visibility of every call your team makes and receives in real time.",
  ],
 [
    "Listen In & Gain Insights",
    "Listen in to calls to understand how your team communicates with clients and identify areas to improve.",
  ],
  [
    "Missed-Call & Call Backs Monitoring",
    "Know which calls were missed and whether they were called back.",
  ],
  [
    "Allocate & Track Market Leads",
    "Assign leads to marketing teams and truck whether they were caled and what was communicated.",
  ],
  [
    "WhatsApp Conversations",
    "Manage all WhatsApp conversations from one central dashboard.",
  ],
  [
    "Instagram Chats",
    "Respond to Instagram messages and keep all conversation in one place.",
  ],
  [
    "Manage Shifts Effectively",
    "Schedule and manage shifts to ensure there is no time clients are left unattended.",
  ],
];

export default function SolutionsPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <span className="eyebrow">OUR POWERFULL SOLUTIONS</span>

        <h1>For Your Business</h1>

        <p>
          Tools to help your team organise calls, manage enquiries
          and keep customer communication moving.
        </p>
      </section>

      {/* SOLUTIONS GRID */}
      <section className="section-wrap section-block">
        <div className="feature-grid">
          {solutions.map(([title, description], index) => (
            <article className="feature-card" key={title}>
              <span className="solution-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{title}</h3>

              <p>{description}</p>

              <Link
                href="/contact/"
                className="nav-contact"
              >
                Ask Us About This →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="cta-section section-wrap">
        <div>
          <h2>Find the right setup for your business.</h2>

          <p>
            Tell us about your team and communication needs.
          </p>
        </div>

        <Link
          href="/contact/"
          className="btn btn-primary"
        >
          Make an Enquiry →
        </Link>
      </section>
    </>
  );
}
