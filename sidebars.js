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
        "admin/property-verification",      // multi-mode only
        "admin/room-inventory",
        "admin/registration-fields",
        "admin/booking-management",
        "admin/reserved-bookings",           // multi-mode only
        "admin/pay-at-property",            // multi-mode only
        "admin/cancellations-refunds",       // multi-mode only
        "admin/user-management",
        "admin/events-and-inquiries",        // single-mode only
        "admin/review-removal-requests",     // multi-mode only
        "admin/removed-reviews",             // multi-mode only

        // ── Partners (multi-mode only) ──
        "admin/all-partners",
        "admin/partner-verification",
        "admin/partner-registration-fields",
        "admin/become-partner-faq",

        // ── Marketing ──
        "admin/promo-codes",
        "admin/refer-and-earn",
        "admin/marketing-notifications",

        // ── Payments & Finance ──
        "admin/payment-settings",
        "admin/payment-transactions",
        "admin/manual-refunds",
        "admin/commission-management",      // multi-mode only
        "admin/property-payout",            // multi-mode only
        "admin/withdrawal-requests",        // multi-mode only

        // ── Reports (multi-mode only) ──
        "admin/all-reports",

        // ── Staff & Access ──
        "admin/roles-and-staffs",

        // ── Settings & Integrations ──
        "admin/general-settings",
        "admin/notification-management",
        "admin/smtp-configurations",
        "admin/language",
        "admin/map-provider",
        "admin/api-currency-exchange",
        "admin/api-ip-geolocation",
        "admin/cron-jobs",
        "admin/image-upload-limits",

        // ── System ──
        "admin/update-system",
        "admin/other-pages",
        "admin/homepage-sections",          // multi-mode only
      ],

    },
    {
      type: "category",
      label: "eStay Partner Panel",
      items: [
        // Multi-mode only.
        "partner/overview",

        // ── Getting Started ──
        "partner/registration",
        "partner/login",
        "partner/setup-wizard",
        "partner/dashboard",

        // ── Bookings ── (mirrors PartnerPanelProvider's nav groups from here down)
        "partner/bookings",
        "partner/todays-checkins-checkouts",
        "partner/availability-calendar",

        // ── Room Management ──
        "partner/room-management",
        "partner/room-inventory",

        // ── Review Monitoring ──
        "partner/reviews",

        // ── Wallet Management ──
        "partner/wallet",

        // ── Property Management ──
        "partner/property-management",
        "partner/adding-a-property",

        // ── Cancellation Policy ──
        "partner/cancellation-policy",

        // ── Location Management ──
        "partner/location-management",

        // ── Settings ──
        "partner/settings",
        "partner/notifications",
        "partner/profile",
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
        "app/home-screen-settings",
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
        "web/enable-google-map",
        "web/map-api-key",
        "web/set-sitemap",
        "web/change-fonts",
        "web/payment-gateway",
        "web/manage-languages",
        "web/contact-us",
        "web/maintenance-mode",
        "web/analytics-clarity",
        "web/pwa-setup",
        "web/run-the-project",
        "web/server-deployment",
        "web/version-update",
      ],
    },
    "support",
    "faqs",
    "feedback",
    "contact",
  ],
};

module.exports = sidebars;
