import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import clsx from "clsx";
import DocBanner from "../components/doc-banner/DocBanner.jsx";
import AskAi from "../components/ask-ai/AskAi.jsx";
import BrowserOnly from "@docusaurus/BrowserOnly";

const SECTIONS = [
  {
    title: "Admin Panel",
    description:
      "Manage properties, room types, bookings, staff, and guest communications from one dashboard.",
    to: "/docs/admin/installation",
    icon: "🏨",
    accent: "#1a73e8",
  },
  {
    title: "Mobile App",
    description:
      "Configure and publish the guest-facing Flutter app for Android and iOS.",
    to: "/docs/app/prerequisites",
    icon: "📱",
    accent: "#1a73e8",
  },
  {
    title: "Web Portal",
    description:
      "Set up and deploy the online booking portal built with Next.js.",
    to: "/docs/web/setup",
    icon: "🌐",
    accent: "#1a73e8",
  },
  {
    title: "Support",
    description:
      "Whether you're setting up your first project or need help with advanced features, our support team is here to assist you.",
    to: "/docs/support",
    icon: "🖥️",
    accent: "#1557b0",
  },
];

function HeroWave() {
  return (
    <div className={styles.heroWave} aria-hidden="true">
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z"
          className={styles.wavePath}
        />
      </svg>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={clsx("container", styles.heroContent)}>
        <p className={styles.heroEyebrow}>Hotel &amp; Stay Property Booking</p>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.heroButtons}>
          <Link
            className={clsx("button button--lg", styles.btnWhite)}
            to="/docs/intro"
          >
            Get Started
          </Link>
          {/*   <Link
            className={clsx("button button--lg", styles.btnGhost)}
            to="/docs/admin/installation"
          >
            Browse Docs
          </Link> */}
        </div>
      </div>
      <HeroWave />
    </header>
  );
}

function DocCard({ title, description, to, icon, accent }) {
  return (
    <div className={clsx("col col--3", styles.docCard)}>
      <Link to={to} className={styles.cardLink}>
        <div className={styles.card}>
          <div
            className={styles.cardIconWrap}
            style={{ backgroundColor: `${accent}18` }}
          >
            <span className={styles.cardIcon}>{icon}</span>
          </div>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDesc}>{description}</p>
          <span className={styles.cardArrow}>
            Explore
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </Link>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Complete documentation for the eStay hotel booking ecosystem"
    >
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <p className={styles.sectionEyebrow}>Documentation</p>
            <h2 className={styles.sectionTitle}>Everything in one place</h2>
            <p className={styles.sectionDesc}>
              Step-by-step guides for every part of the eStay ecosystem — from
              server setup to store publishing.
            </p>
            <div className="row">
              {SECTIONS.map((s) => (
                <DocCard key={s.title} {...s} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaBand}>
          <div className="container">
            <div className={styles.ctaBox}>
              <span className={styles.ctaIcon}>📖</span>
              <h2 className={styles.ctaTitle}>Ready to get started?</h2>
              <p className={styles.ctaText}>
                Begin with the introduction — it walks you through the full
                ecosystem and the recommended setup order.
              </p>
              <Link
                className={clsx("button button--lg", styles.ctaBtn)}
                to="/docs/intro"
              >
                Read the Introduction
              </Link>
            </div>
          </div>
          <DocBanner />
        </section>
      </main>
      <BrowserOnly>{() => <AskAi />}</BrowserOnly>
    </Layout>
  );
}
