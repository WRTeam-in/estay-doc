// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "eStay Documentation",
  tagline: "Documentation for eStay",
  favicon: "images/favicon.png",

  url: "https://wrteam-in.github.io",
  baseUrl: "/",
  trailingSlash: true,
  organizationName: "WRTeam-in",
  projectName: "estay-doc",
  deploymentBranch: "gh-pages",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  markdown: {
    hooks: {
      onBrokenMarkdownImages: "warn",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [require.resolve("@easyops-cn/docusaurus-search-local")],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "images/logo.png",
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        logo: {
          alt: "eStay Logo",
          src: "images/favicon.png",
        },
        items: [
          {
            to: "/docs/admin/installation",
            label: "Admin Panel",
            position: "left",
          },
          {
            to: "/docs/app/prerequisites",
            label: "Mobile App",
            position: "left",
          },
          {
            to: "/docs/web/setup",
            label: "Web Portal",
            position: "left",
          },
          {
            to: "/docs/support",
            label: "Support",
            position: "left",
          },
          {
            to: "/docs/faqs",
            label: "FAQs",
            position: "left",
          },
          {
            type: "search",
            position: "right",
          },
          {
            href: "https://www.wrteam.in/",
            label: "WRTeam",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} eStay App Documentation`,
      },
      prism: {
        theme: require("prism-react-renderer").themes.github,
        darkTheme: require("prism-react-renderer").themes.dracula,
      },
    }),
};

module.exports = config;
