
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Ring Flow Technologies",
  description:
    "Discover Ring Flow Technologies, our mission, vision, values, and connected business communication solutions.",
};

const companyValues = [
  {
    number: "01",
    title: "Customer First",
    description:
      "We put customer communication at the heart of every solution and aim to help businesses deliver better customer experiences.",
  },
  {
    number: "02",
    title: "Innovation",
    description:
      "We embrace modern technology to simplify business communication and help teams work more efficiently.",
  },
  {
    number: "03",
    title: "Reliability",
    description:
      "We aim to provide dependable communication tools that help businesses stay connected with their customers.",
  },
  {
    number: "04",
    title: "Growth",
    description:
      "We support businesses with practical solutions designed to adapt as their teams and customer needs grow.",
  },
];

const services = [
  "Incoming and outgoing calls",
  "Missed-call monitoring",
  "Lead allocation and tracking",
  "WhatsApp conversations",
  "Instagram chats",
  "Team shift management",
];

const reasons = [
  {
    number: "01",
    title: "Track Every Call",
    description:
      "See incoming and outgoing calls and stay informed about your team's communication.",
    icon: "📞",
  },
  {
    number: "02",
    title: "Manage Your Leads",
    description:
      "Allocate market leads and track whether customers have been contacted.",
    icon: "🎯",
  },
  {
    number: "03",
    title: "Centralize Conversations",
    description:
      "Bring WhatsApp, Instagram and business communication together.",
    icon: "💬",
  },
  {
    number: "04",
    title: "Stronger Team Coordination",
    description:
      "Support team workflows and shift coordination so responsibilities are clearer and customer enquiries can be handled more consistently.",
    icon: "⌘",
  },
  {
    number: "05",
    title: "Gain Business Insights",
    description:
      "Understand your team's communication and use information to improve customer service.",
    icon: "📊",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-black px-6 py-20 text-white md:py-28">
        <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute -bottom-32 left-10 -z-10 h-80 w-80 rounded-full bg-red-500/15 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-red-500">
              About Ring Flow Technologies
            </p>

            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Connecting Businesses.
              <span className="mt-2 block text-red-500">
                Empowering People.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
              Ringflow Technologies is a smart call and communication management solution that gives you
              complete visibility and control over your business communications.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/solutions/"
                className="rounded-xl bg-red-600 px-6 py-3 font-bold text-white transition hover:bg-red-700"
              >
                Explore Our Solutions
              </Link>

              <Link
                href="/contact/"
                className="rounded-xl border border-white/30 px-6 py-3 font-bold text-white transition hover:border-red-500 hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-400">
              One Connected Platform
            </p>

            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              Everything Your Team Needs
            </h2>

            <p className="mt-4 leading-7 text-neutral-300">
              Bring calls, customer conversations, lead tracking, and team
              coordination into a more connected working experience.
            </p>

            <div className="mt-7 space-y-3">
              <div className="rounded-xl border border-white/5 bg-neutral-900 p-4">
                <p className="font-semibold">Business Calls</p>
                <p className="mt-1 text-sm text-neutral-400">
                  Manage incoming and outgoing calls.
                </p>
              </div>

              <div className="rounded-xl border border-white/5 bg-neutral-900 p-4">
                <p className="font-semibold">Customer Conversations</p>
                <p className="mt-1 text-sm text-neutral-400">
                  Organise digital communication and enquiries.
                </p>
              </div>

              <div className="rounded-xl border border-white/5 bg-neutral-900 p-4">
                <p className="font-semibold">Team Coordination</p>
                <p className="mt-1 text-sm text-neutral-400">
                  Support team workflows and customer follow-ups.
                </p>
              </div>
            </div>

            <p className="mt-6 text-center font-bold text-red-500">
              Simple. Connected. Powerful.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT THE COMPANY */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-red-600">
              Who We Are
            </p>

            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Ringflow Technologies.
            </h2>

            <p className="mt-6 leading-8 text-neutral-600">
              Ring Flow Technologies focuses on helping businesses manage
              communication in a more organised and efficient way. We believe
              that every call, message, and customer interaction is an
              opportunity to build a stronger relationship.
            </p>

            <p className="mt-4 leading-8 text-neutral-600">
              Our approach brings business communication and team management
              together, helping organisations improve visibility, coordinate
              their activities, and focus on their customers.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-red-600">
              Our Purpose
            </p>

            <h3 className="mt-4 text-2xl font-bold">
              Making business communication simpler.
            </h3>

            <p className="mt-4 leading-7 text-neutral-600">
              We aim to help businesses stay connected, manage customer
              interactions, and create a more coordinated experience for their
              teams and customers.
            </p>

            <div className="mt-8 border-t border-neutral-200 pt-6">
              <p className="text-2xl font-extrabold">One number.</p>
              <p className="mt-1 text-2xl font-extrabold text-red-600">
                One platform.
              </p>
              <p className="mt-1 text-2xl font-extrabold">Total control.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY RING FLOW */}
      <section className="why-ringflow-section">
        <div className="why-ringflow-inner">
          <div className="why-ringflow-heading">
            <span className="why-ringflow-eyebrow">WHY RING FLOW?</span>

            <h2>
              Turn Every Customer Conversation .
              <span> Into an Opportunity.</span>
            </h2>

            <p>
              Ringflow Technologies gives businesses beter visibility, control and accountability
              over their customer communication.
            </p>
          </div>

          <div className="why-ringflow-grid">
            {reasons.map((reason) => (
              <article className="why-ringflow-card" key={reason.number}>
                <div className="why-ringflow-card-top">
                  <span className="why-ringflow-icon" aria-hidden="true">
                    {reason.icon}
                  </span>
                  <span className="why-ringflow-number">
                    {reason.number}
                  </span>
                </div>

                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            ))}
          </div>

          <div className="why-ringflow-bottom">
            <div>
              <h3>Make every interaction count.</h3>
              <p>
                Discover how a more connected communication workflow could
                support your business.
              </p>
            </div>

            <Link href="/solutions/" className="why-ringflow-button">
              Discover Our Solutions <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="bg-neutral-50 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-red-600">
              Our Direction
            </p>

            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Driven by Purpose. Built for Connection.
            </h2>

            <p className="mt-4 leading-7 text-neutral-600">
              Our mission and vision guide our commitment to better business
              communication and smarter technology.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-neutral-200 bg-white p-8 md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-2xl font-bold text-red-600">
                M
              </div>

              <h3 className="mt-6 text-2xl font-extrabold">Our Mission</h3>

              <p className="mt-4 leading-8 text-neutral-600">
                To provide practical, reliable, and integrated communication
                solutions that help businesses connect with customers, manage
                their teams, and improve everyday operations.
              </p>
            </article>

            <article className="rounded-3xl border border-red-900 bg-black p-8 text-white md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-2xl font-bold text-red-400">
                V
              </div>

              <h3 className="mt-6 text-2xl font-extrabold">Our Vision</h3>

              <p className="mt-4 leading-8 text-neutral-300">
                To become a trusted provider of modern business communication
                solutions, helping organisations build stronger customer
                relationships and grow through connected technology.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* OUR SOLUTIONS */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-red-600">
              What We Do
            </p>

            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Everything Your Team Needs to Stay Connected
            </h2>

            <p className="mt-4 leading-7 text-neutral-600">
              Our communication capabilities are designed to support customer
              service, team coordination, and business productivity.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service}
                className="flex items-start gap-4 rounded-2xl border border-neutral-200 p-5 transition hover:border-red-400 hover:shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-sm font-bold text-red-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="pt-2 font-semibold leading-6">{service}</h3>
              </div>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Link
              href="/solutions/"
              className="inline-flex rounded-xl bg-black px-7 py-3.5 font-bold text-white transition hover:bg-red-600"
            >
              View All Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-black px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-red-400">
              Our Core Values
            </p>

            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              The Principles Behind Every Connection
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {companyValues.map((value) => (
              <article
                key={value.number}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-red-500/60"
              >
                <p className="text-sm font-bold text-red-400">
                  {value.number}
                </p>

                <h3 className="mt-4 text-xl font-bold">{value.title}</h3>

                <p className="mt-3 text-sm leading-7 text-neutral-300">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CALL TO ACTION */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-red-600 px-7 py-12 text-center text-white md:px-12 md:py-16">
          <h2 className="text-3xl font-extrabold md:text-5xl">
            Make Every Call Count.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/90">
            Discover how connected communication can help your business serve
            customers and coordinate your team more effectively.
          </p>

          <Link
            href="/contact/"
            className="mt-8 inline-flex rounded-xl bg-black px-7 py-3.5 font-bold text-white transition hover:bg-neutral-900"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </main>
  );
}
