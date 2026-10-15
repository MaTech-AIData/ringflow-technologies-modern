"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const contactDetails = [
  {
    icon: "☎",
    title: "Call Us",
    description: "Speak with our team about your needs.",
    value: "0700093587",
    action: "Call us now",
    href: "tel:+254700093587",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: "✆",
    title: "WhatsApp Us",
    description: "Chat with our team directly.",
    value: "0700093587",
    action: "Chat on WhatsApp",
    href: "https://wa.me/254700093587",
    color: "bg-green-50 text-green-700",
  },
  {
    icon: "✉",
    title: "Email Us",
    description: "Send us your questions or enquiries.",
    value: "info@ringflow.co.ke",
    action: "Send an email",
    href: "mailto:info@ringflow.co.ke",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: "⌖",
    title: "Visit Our Office",
    description: "We would be happy to hear from you.",
    value: "Mizpah Office Park, Kahawa Sukari, Floor 3, Room 6",
    action: "Get directions",
    href: "https://www.google.com/maps/search/?api=1&query=Mizpah+Office+Park+Kahawa+Sukari",
    color: "bg-neutral-100 text-neutral-900",
  },
];

export default function ContactPage() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setNotice(
      "Your form is not connected to a submission service yet. Please contact us directly by WhatsApp or email."
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">
      {/* HERO */}
      <section className="relative bg-black px-5 py-20 text-white sm:py-24">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 font-semibold uppercase tracking-[0.25em] text-red-500">
            Contact Ring Flow Technologies
          </p>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Let&apos;s Get Your Business{" "}
            <span className="text-red-500">Connected.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg">
            Have a question about our business communication solutions?
            We are ready to help your team connect with customers, manage
            calls, and work smarter.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/254700093587"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-red-600 px-6 py-3 font-bold text-white transition hover:bg-red-700"
            >
              WhatsApp Our Team
            </a>

            <a
              href="tel:+254700093587"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-bold text-white transition hover:border-red-500 hover:bg-white/10"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="font-bold uppercase tracking-widest text-red-600">
              We Are Here for You
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Get in Touch
            </h2>

            <p className="mt-4 leading-7 text-neutral-600">
              Choose the easiest way to reach us. Call, chat on WhatsApp,
              send an email, or visit our office.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {contactDetails.map((item) => (
              <article
                key={item.title}
                className="flex min-w-0 flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-lg"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl text-3xl ${item.color}`}
                  aria-hidden="true"
                >
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {item.description}
                </p>

                <p className="mt-4 break-words text-base font-bold leading-6 text-black">
                  {item.value}
                </p>

                <a
                  href={item.href}
                  target={
                    item.title === "WhatsApp Us" ||
                    item.title === "Visit Our Office"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.title === "WhatsApp Us" ||
                    item.title === "Visit Our Office"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-5 inline-flex min-h-11 items-center font-bold text-red-600 transition hover:text-red-800 hover:underline"
                >
                  {item.action} <span className="ml-2" aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>

          {/* ADDITIONAL EMAIL */}
          <div className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-5">
            <p className="text-sm text-neutral-600">
              Prefer our alternative email?
            </p>
            <a
              href="mailto:ringflow@gmail.com"
              className="mt-1 inline-block break-all font-bold text-red-600 hover:underline"
            >
              ringflow@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT FORM AND INFORMATION */}
      <section className="bg-neutral-50 px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT INFORMATION */}
          <div className="min-w-0">
            <p className="font-bold uppercase tracking-widest text-red-600">
              Let&apos;s Talk Business
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Tell Us What You Need
            </h2>

            <p className="mt-5 leading-7 text-neutral-600">
              Whether you need business call management, team communication,
              call monitoring, or an integrated communication solution,
              Ring Flow Technologies is ready to discuss your needs.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-100 text-xl text-red-600">
                  ✓
                </span>
                <div>
                  <h3 className="font-bold">Practical Solutions</h3>
                  <p className="mt-1 text-sm leading-6 text-neutral-600">
                    Solutions designed around your business communication
                    needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-100 text-xl text-red-600">
                  ↗
                </span>
                <div>
                  <h3 className="font-bold">Better Customer Connections</h3>
                  <p className="mt-1 text-sm leading-6 text-neutral-600">
                    Keep track of customer conversations and help your team
                    stay connected.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-100 text-xl text-red-600">
                  ◎
                </span>
                <div>
                  <h3 className="font-bold">Support for Your Team</h3>
                  <p className="mt-1 text-sm leading-6 text-neutral-600">
                    Contact us to discuss your setup and requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border-l-4 border-red-600 bg-white p-5 shadow-sm">
              <p className="font-bold">Every call matters.</p>
              <p className="mt-1 text-sm leading-6 text-neutral-600">
                One number. One platform. Total control.
              </p>
            </div>
          </div>

          {/* RIGHT CONTACT FORM */}
          <div className="min-w-0 rounded-2xl border border-neutral-200 bg-white p-5 shadow-lg sm:p-8">
            <h2 className="text-2xl font-extrabold">Send Us a Message</h2>

            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Tell us a little about your enquiry.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-base text-black outline-none transition placeholder:text-neutral-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-base text-black outline-none transition placeholder:text-neutral-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Your phone number (optional)"
                  className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-base text-black outline-none transition placeholder:text-neutral-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="How can we help your business?"
                  className="w-full resize-y rounded-lg border border-neutral-300 bg-white px-4 py-3 text-base text-black outline-none transition placeholder:text-neutral-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </div>

              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-red-600 px-6 py-3 font-bold text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Submit Enquiry
              </button>

              {notice && (
                <p
                  role="status"
                  className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800"
                >
                  {notice}
                </p>
              )}

              <p className="text-xs leading-5 text-neutral-500">
                The form is currently a visual front end and does not send
                or save submissions. Connect it to your backend before
                accepting enquiries through this form.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-black px-5 py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-bold uppercase tracking-widest text-red-500">
            Ring Flow Technologies
          </p>

          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Ready to Connect Your Business?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-neutral-300">
            Talk to our team about a communication solution that fits
            your business.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/254700093587"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-red-600 px-6 py-3 font-bold text-white transition hover:bg-red-700"
            >
              Get in Touch
            </a>

            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black px-5 py-6 text-center text-sm text-neutral-400">
        <p>
          © {new Date().getFullYear()} Ring Flow{" "}
          <span className="font-semibold text-red-500">Technologies</span>.
          All rights reserved.
        </p>
        <p className="mt-2">Every call matters.</p>
      </footer>
    </main>
  );
}