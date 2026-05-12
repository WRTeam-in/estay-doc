// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "eStay App Documentation",
  tagline: "Documentation for eStay App",
  favicon: "images/favicon.png",

  url: "https://wrteam-in.github.io",
  baseUrl: "/estay-doc/",
  trailingSlash: true,
  organizationName: "WRTeam-in",
  projectName: "estay-doc",
  deploymentBranch: "gh-pages",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

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
        title: "eStay App",
        logo: {
          alt: "eStay App Logo",
          src: "images/favicon.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
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
