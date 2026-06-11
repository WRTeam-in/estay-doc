// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "intro",
      label: "Introduction",
    },
    {
      type: "category",
      label: "eStay Admin Panel Setup",
      items: [
        // ── Getting Started ──
        "admin/overview",
        "admin/installation",
        "admin/countries",                 // moved up: cities/taxes live *inside* a country
        "admin/checklist-add-cities",
        "admin/checklist-tax-configuration",
        "admin/checklist-cancellation-policy",
        "admin/checklist-legal-policy",

        // ── Core Operations ──
        "admin/property-management",
        "admin/registration-fields",
        "admin/booking-management",
        "admin/user-management",
        "admin/events-and-inquiries",

        // ── Marketing ──
        "admin/promo-codes",
        "admin/refer-and-earn",
        "admin/marketing-notifications",

        // ── Payments & Finance ──
        "admin/payment-settings",
        "admin/payment-transactions",
        "admin/manual-refunds",

        // ── Staff & Access ──
        "admin/roles-and-staffs",

        // ── Settings & Integrations ──
        "admin/general-settings",
        "admin/notification-management",
        "admin/smtp-configurations",
        "admin/language",
        "admin/api-google-maps",
        "admin/api-currency-exchange",
        "admin/api-ip-geolocation",
        "admin/cron-jobs",

        // ── System ──
        "admin/update-system",
        "admin/other-pages",
      ],

    },
    {
      type: "category",
      label: "eStay App",
      items: [
        "app/prerequisites",
        "app/firebase-setup",
        "app/firebase-billing",
        "app/panel-url-deeplink",
        "app/change-package-name",
        "app/change-app-name",
        "app/change-app-logo",
        "app/change-theme-color",
        "app/change-app-font",
        "app/onboarding",
        "app/notification-settings",
        "app/map-api-key",
        "app/auth-methods",
        "app/payment-gateway",
        "app/manage-languages",
        "app/contact-us",
        "app/maintenance-mode",
        "app/change-app-version",
        "app/store-urls-force-update",
        "app/run-the-app",
        "app/deployment",
      ],
    },
    {
      type: "category",
      label: "eStay Web",
      items: [
        "web/prerequisites",
        "web/setup",
        "web/domain-url",
        "web/integrate-firebase",
        "web/auth-methods",
        "web/web-name",
        "web/set-logo-theme-color",
        "web/change-meta-info",
        "web/map-api-key",
        "web/set-sitemap",
        "web/change-fonts",
        "web/payment-gateway",
        "web/manage-languages",
        "web/contact-us",
        "web/maintenance-mode",
        "web/pwa-setup",
        "web/run-the-project",
        "web/server-deployment",
      ],
    },
    "support",
    "faqs",
    "feedback",
    "contact",
  ],
};

module.exports = sidebars;
