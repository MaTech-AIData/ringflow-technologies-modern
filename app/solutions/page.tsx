
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Our Solutions" };

const solutions = [
  ["Incoming Calls", "Manage incoming customer calls in a more organised workflow."],
  ["Outgoing Calls", "Support outbound calling and customer follow-ups."],
  ["Missed-Call Monitoring", "Identify missed opportunities and help your team follow up."],
  ["Lead Allocation & Tracking", "Assign leads to the right team members and monitor progress."],
  ["WhatsApp Conversations", "Keep customer messaging connected to your workflow."],
  ["Instagram Chats", "Manage social enquiries as part of customer communication."],
  ["Team Shift Management", "Coordinate team coverage and responsibilities."],
];

export default function SolutionsPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">OUR SOLUTIONS</span>
        <h1>One platform. Connected conversations.</h1>
        <p>
          Tools to help your team organise calls, manage enquiries
          and keep customer communication moving.
        </p>
      </section>

      <section className="section-wrap section-block">
        <div className="feature-grid">
          {solutions.map(([title, description], index) => (
            <article className="feature-card" key={title}>
              <span className="solution-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
              <a className="text-link" href="/contact">
                Ask us about this →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section section-wrap">
        <div>
          <h2>Find the right setup for your business.</h2>
          <p>Tell us about your team and communication needs.</p>
        </div>
        <a className="btn btn-primary" href="/contact">Make an Enquiry →</a>
      </section>
    </>
  );
}
