import Link from "next/link";

const features = [
  {
    icon: "☎",
    title: "One Business Number",
    description:
      "One professional number for all your business communication, making it easier for customers to reach your team.",
  },
  {
    icon: "◉",
    title: "Real-Time Call Monitoring",
    description:
      "Monitor calls in real time and manage your team's communication through a powerful and easy-to-use dashboard.",
  },
  {
    icon: "▤",
    title: "Detailed Call Reports",
    description:
      "Get detailed reports and performance analytics that help you understand activity and make better business decisions.",
  },
  {
    icon: "♡",
    title: "Better Customer Experience",
    description:
      "Improve customer interactions while giving your team the tools they need to communicate and work more efficiently.",
  },
  {
    icon: "↗",
    title: "Scalable & Easy to Use",
    description:
      "A simple communication platform that grows with your business, from a small team to a growing organization.",
  },
  {
    icon: "◇",
    title: "Secure & Reliable Platform",
    description:
      "Dependable communication built to keep your business connected with security and reliability at its core.",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">
      {/* Pricing hero */}
      <section className="relative isolate overflow-hidden bg-black">
        <div className="absolute -right-20 -top-24 -z-10 h-80 w-80 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute -bottom-32 left-10 -z-10 h-80 w-80 rounded-full bg-red-500/15 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              Transparent Pricing
            </span>

            <h1 className="mt-7 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
              SIMPLE
              <span className="block text-red-500">PRICING</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
              Everything your business needs to stay connected, manage
              customer communication, and keep your team productive.
            </p>

            <a
              href="#pricing-details"
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-red-600 px-6 py-4 font-bold text-white transition hover:bg-red-700"
            >
              View Pricing <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing details */}
      <section
        id="pricing-details"
        className="scroll-mt-8 px-6 py-16 sm:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Our Pricing
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Straightforward pricing for your business
            </h2>

            <p className="mt-4 leading-7 text-neutral-600">
              Get started with a one-off installation, a monthly
              fee per agent, and airtime billed according to usage.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">
            {/* Installation */}
            <article className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-400 hover:shadow-xl sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-3xl text-red-600">
                ⚙
              </div>

              <p className="mt-7 text-sm font-bold uppercase tracking-wider text-red-600">
                One-off payment
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Installation (One-off)
              </h3>

              <div className="mt-6">
                <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                  KSh 40,000
                </p>
                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  Inclusive of training
                </p>
              </div>

              <div className="mt-7 flex-1 border-t border-neutral-100 pt-6">
                <p className="flex items-start gap-3 text-sm leading-6 text-neutral-600">
                  <span className="font-bold text-red-600">✓</span>
                  Installation with training included
                </p>
              </div>

              <Link
                href="/contact"
                className="mt-8 flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-black px-4 py-3.5 text-center font-semibold text-white transition hover:bg-red-600"
              >
                Enquire Now <span aria-hidden="true">→</span>
              </Link>
            </article>

            {/* Monthly fee */}
            <article className="relative flex h-full flex-col rounded-3xl border-2 border-red-600 bg-black p-7 text-white shadow-xl shadow-red-900/10 transition duration-300 hover:-translate-y-1 sm:p-8">
              <span className="absolute -top-3 left-7 rounded-full bg-red-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                Per Agent
              </span>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-3xl text-red-400">
                👥
              </div>

              <p className="mt-7 text-sm font-bold uppercase tracking-wider text-red-400">
                Recurring payment
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Monthly Fee per Agent
              </h3>

              <div className="mt-6">
                <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                  KSh 9,500
                </p>
                <p className="mt-3 text-sm leading-6 text-neutral-300">
                  Minimum of 2 agents
                </p>
              </div>

              <div className="mt-7 flex-1 border-t border-white/10 pt-6">
                <p className="flex items-start gap-3 text-sm leading-6 text-neutral-200">
                  <span className="font-bold text-red-400">✓</span>
                  Monthly fee per agent
                </p>
                <p className="mt-4 flex items-start gap-3 text-sm leading-6 text-neutral-200">
                  <span className="font-bold text-red-400">✓</span>
                  Minimum of 2 agents
                </p>
              </div>

              <Link
                href="/contact"
                className="mt-8 flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3.5 text-center font-semibold text-white transition hover:bg-red-700"
              >
                Get Started <span aria-hidden="true">→</span>
              </Link>
            </article>

            {/* Airtime */}
            <article className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-400 hover:shadow-xl sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-3xl text-red-600">
                ◷
              </div>

              <p className="mt-7 text-sm font-bold uppercase tracking-wider text-red-600">
                Flexible usage
              </p>

              <h3 className="mt-3 text-xl font-bold">Airtime</h3>

              <div className="mt-6">
                <p className="text-2xl font-bold tracking-tight sm:text-3xl">
                  PAY AS YOU USE
                </p>
                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  Billed on usage
                </p>
              </div>

              <div className="mt-7 flex-1 border-t border-neutral-100 pt-6">
                <p className="flex items-start gap-3 text-sm leading-6 text-neutral-600">
                  <span className="font-bold text-red-600">✓</span>
                  Airtime billed according to usage
                </p>
              </div>

              <Link
                href="/contact"
                className="mt-8 flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-black px-4 py-3.5 text-center font-semibold text-white transition hover:bg-red-600"
              >
                Make an Enquiry <span aria-hidden="true">→</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-neutral-50 px-6 py-16 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              WHAT YOU GET
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              Everything Your Business Needs
            </h2>

            <p className="mt-5 leading-8 text-neutral-600">
              Powerful communication tools designed to keep your team
              connected, productive and focused on your customers.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group rounded-2xl border border-neutral-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-red-400 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-2xl text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                  {feature.icon}
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing message */}
      <section className="px-6 py-16 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-black px-7 py-14 text-center sm:px-12 sm:py-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
            READY TO TAKE CONTROL?
          </p>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Make Every Call Count.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-neutral-300">
            Give your business one connected communication experience
            with Ring Flow Technologies.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-red-600 px-7 py-4 font-bold text-white transition hover:bg-red-700"
          >
            Contact Us Today <span aria-hidden="true">→</span>
          </Link>

          <p className="mt-8 text-sm font-medium tracking-wide text-neutral-400">
            One number. One platform. Total control.
          </p>

          <p className="mt-2 text-sm text-neutral-500">
            Grow your business with every call.
          </p>
        </div>
      </section>

      {/* Page footer */}
      <footer className="border-t border-neutral-200 bg-white px-6 py-8 sm:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-bold text-black">
              Ring Flow Technologies
            </p>
            <p className="mt-1 text-sm text-neutral-500">
              One number. One platform. Total control.
            </p>
          </div>

          <p className="text-sm text-neutral-500">
            © 2026 Ring Flow Technologies. All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}