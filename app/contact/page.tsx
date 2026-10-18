"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

const PHONE_DISPLAY = "0700 093 587";
const PHONE_LINK = "+254700093587";
const WHATSAPP_LINK = "254700093587";

const EMAIL_PRIMARY = "info@ringflow.co.ke";
const EMAIL_SECONDARY = "ringflowtechnologies@gmail.com";

const OFFICE_ADDRESS =
  "Mizpah Office Park, 3rd Floor, Room 6, opposite Quickmart, Kahawa Sukari, Kenya";

const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Mizpah+Office+Park+Kahawa+Sukari+Kenya";

const WHATSAPP_MESSAGE =
  "Hello Ring Flow Technologies, I would like to enquire about your services.";

const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_LINK}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase =
  supabaseUrl && supabaseKey
    ? createClient(supabaseUrl, supabaseKey)
    : null;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);

    if (!supabase) {
      setStatus({
        type: "error",
        message:
          "Our online enquiry form is temporarily unavailable. Please contact us through WhatsApp or email.",
      });
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
      setStatus({
        type: "error",
        message: "Please complete all required fields.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert([
          {
            name,
            email,
            phone: phone || null,
            company: company || null,
            subject,
            message,
          },
        ]);

      if (error) {
        console.error("Supabase contact form error:", error);

        setStatus({
          type: "error",
          message:
            "We could not submit your enquiry. Please try again or contact us directly.",
        });

        return;
      }

      form.reset();

      setStatus({
        type: "success",
        message:
          "Thank you! Your enquiry has been submitted successfully. We look forward to speaking with you.",
      });
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setStatus({
        type: "error",
        message:
          "Something went wrong. Please try again or contact us using WhatsApp or email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="contact-page">
      {/* HERO SECTION */}
      <section className="contact-hero">
        <div className="contact-hero-glow contact-hero-glow-one" />
        <div className="contact-hero-glow contact-hero-glow-two" />

        <div className="contact-hero-inner">
          <span className="contact-eyebrow">
            LET&apos;S CONNECT
          </span>

          <h1>
            Every conversation
            <span> starts here.</span>
          </h1>

          <p>
            Tell us what your business needs. Whether you want better
            call management, organised leads, or connected customer
            conversations, Ring Flow Technologies is ready to help.
          </p>

          <div className="contact-hero-actions">
            <a
              href="#contact-form"
              className="contact-primary-button"
            >
              Send an Enquiry <span aria-hidden="true">→</span>
            </a>

            <a
              href={WHATSAPP_URL}
              className="contact-secondary-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp ↗
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS AND FORM */}
      <section className="contact-main-section">
        <div className="contact-layout">

          {/* LEFT: CONTACT INFORMATION */}
          <aside className="contact-info-panel">
            <span className="contact-eyebrow">
              CONTACT OUR TEAM
            </span>

            <h2>Let&apos;s talk about your business.</h2>

            <p className="contact-info-intro">
              Choose the most convenient way to reach us. Call, send
              an email, chat on WhatsApp, or visit our office.
            </p>

            <div className="contact-info-list">

              {/* PHONE */}
              <div className="contact-info-item">
                <span
                  className="contact-info-icon"
                  aria-hidden="true"
                >
                  ☎
                </span>

                <div className="contact-info-content">
                  <h3>Call Our Team</h3>

                  <p>
                    Speak directly with us about your business needs
                    and communication solutions.
                  </p>

                  <a
                    href={`tel:${PHONE_LINK}`}
                    className="contact-direct-link"
                  >
                    {PHONE_DISPLAY} →
                  </a>
                </div>
              </div>

              {/* WHATSAPP */}
              <div className="contact-info-item">
                <span
                  className="contact-info-icon"
                  aria-hidden="true"
                >
                  W
                </span>

                <div className="contact-info-content">
                  <h3>WhatsApp</h3>

                  <p>
                    Send us a direct message to enquire about our
                    services or request a quotation.
                  </p>

                  <a
                    href={WHATSAPP_URL}
                    className="contact-direct-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message us on WhatsApp ↗
                  </a>
                </div>
              </div>

              {/* EMAIL ADDRESSES */}
              <div className="contact-info-item">
                <span
                  className="contact-info-icon"
                  aria-hidden="true"
                >
                  ✉
                </span>

                <div className="contact-info-content">
                  <h3>Email Our Team</h3>

                  <p>
                    Send your business enquiry, questions, or request
                    for a quotation.
                  </p>

                  <a
                    href={`mailto:${EMAIL_PRIMARY}`}
                    className="contact-direct-link"
                  >
                    {EMAIL_PRIMARY}
                  </a>

                  <a
                    href={`mailto:${EMAIL_SECONDARY}`}
                    className="contact-direct-link contact-email-secondary"
                  >
                    {EMAIL_SECONDARY}
                  </a>
                </div>
              </div>

              {/* PHYSICAL OFFICE */}
              <div className="contact-info-item">
                <span
                  className="contact-info-icon"
                  aria-hidden="true"
                >
                  ⌖
                </span>

                <div className="contact-info-content">
                  <h3>Visit Our Office</h3>

                  <p>{OFFICE_ADDRESS}</p>

                  <a
                    href={MAPS_LINK}
                    className="contact-direct-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Find Us on Google Maps ↗
                  </a>
                </div>
              </div>
            </div>

            {/* BRAND FOOTER IN CONTACT PANEL */}
            <div className="contact-info-bottom">
              <p>RING FLOW TECHNOLOGIES</p>

              <h3>Every call matters.</h3>

              <span>Simple. Connected. Powerful.</span>
            </div>
          </aside>

          {/* RIGHT: ENQUIRY FORM */}
          <section
            className="contact-form-panel"
            id="contact-form"
          >
            <div className="contact-form-heading">
              <span className="contact-form-label">
                SEND US A MESSAGE
              </span>

              <h2>How can we help?</h2>

              <p>
                Complete this form to tell us about your business
                needs. Fields marked with * are required.
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="contact-field-grid">

                <div className="contact-field">
                  <label htmlFor="contact-name">
                    Full name *
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    autoComplete="name"
                    maxLength={120}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">
                    Email address *
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    maxLength={254}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-phone">
                    Phone number
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    autoComplete="tel"
                    maxLength={40}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-company">
                    Company name
                  </label>

                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    placeholder="Your business name"
                    autoComplete="organization"
                    maxLength={160}
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">
                  What do you need? *
                </label>

                <select
                  id="contact-subject"
                  name="subject"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an enquiry type
                  </option>

                  <option value="Book an Appointment">
                    Book an Appointment
                  </option>

                  <option value="Business Communication">
                    Busness Communication
                  </option>

                  <option value="WhatsApp and Instagram">
                    WhatsApp and Instagram communication
                  </option>

                  <option value="Call & mesage Management">
                    Call & Message management
                  </option>

                  <option value="Pricing and quotation">
                    Pricing and quotation
                  </option>

                  <option value="Customer Support">
                    Customer Support
                  </option>

                  <option value="Team Dashboard">
                    Team dashboard
                  </option>

                  <option value="Request a demonstration">
                    Request a Demonstration
                  </option>

                  <option value="Website development">
                    Website development
                  </option>

                  <option value="Other enquiry">
                    Other enquiry
                  </option>
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">
                  Your message *
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your business and what you need..."
                  maxLength={5000}
                  required
                />
              </div>

              {status && (
                <div
                  className={`contact-status contact-status-${status.type}`}
                  role="status"
                  aria-live="polite"
                >
                  {status.message}
                </div>
              )}

              <button
                className="contact-submit-button"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Sending your enquiry..."
                  : "Submit Enquiry"}

                {!isSubmitting && (
                  <span aria-hidden="true">→</span>
                )}
              </button>

              <p className="contact-privacy-note">
                Your enquiry is submitted securely through our
                configured contact form. Please provide only the
                information needed to respond to your enquiry.
              </p>
            </form>

            {/* ALTERNATIVE CONTACT BUTTONS */}
            <div className="contact-alternative-actions">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-alternative-button contact-whatsapp-button"
              >
                Chat on WhatsApp
              </a>

              <a
                href={`tel:${PHONE_LINK}`}
                className="contact-alternative-button"
              >
                Call Us
              </a>

              <a
                href={`mailto:${EMAIL_PRIMARY}`}
                className="contact-alternative-button"
              >
                Email Us
              </a>
            </div>
          </section>
        </div>
      </section>

      {/* BOTTOM CALL TO ACTION */}
      <section className="contact-bottom-cta">
        <div>
          <span className="contact-eyebrow">
            READY TO GET STARTED?
          </span>

          <h2>Let&apos;s build better connections.</h2>

          <p>
            Discover communication solutions designed to help your
            business connect with customers and manage conversations.
          </p>
        </div>

        <Link
          href="/solutions/"
          className="contact-cta-button"
        >
          Explore Our Solutions →
        </Link>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={WHATSAPP_URL}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Ring Flow Technologies on WhatsApp"
      >
        <span aria-hidden="true">W</span>
        <span>Chat with us</span>
      </a>
    </main>
  );
}