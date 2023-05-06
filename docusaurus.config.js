// @ts-nocheck
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");
const pluginImageZoom = require("docusaurus-plugin-image-zoom");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "코딩하는펭귄의 저장소",
  tagline: "코딩하는펭귄의 개발 이모저모",
  favicon: "/favicon.ico",
  titleDelimiter: "@",
  url: "https://coodingpenguin.xyz",
  baseUrl: "/",
  organizationName: "coodingpenguin", // Usually your GitHub org/user name.
  projectName: "devlog", // Usually your repo name.
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

  plugins: [
    pluginImageZoom,
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "oss",
        path: "oss",
        routeBasePath: "/oss",
        sidebarPath: require.resolve("./sidebars/sidebarsOss.js"),
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      "@docusaurus/plugin-content-pages",
      {
        id: "book-review",
        path: "src/pages/BookReview",
        routeBasePath: "/book-review",
        mdxPageComponent: "@theme/MDXPage",
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "wiki",
          routeBasePath: "/wiki",
          sidebarPath: require.resolve("./sidebars/sidebarsWiki.js"),
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          path: "essay",
          routeBasePath: "/essay",
          blogSidebarCount: "ALL",
          blogSidebarTitle: "끄적이는 중",
          postsPerPage: 3,
          showReadingTime: false,
          feedOptions: {
            type: "all",
            title: "코딩하는펭귄의 끄적끄적",
            description: "코딩하는펭귄은 글쓰는 중",
            copyright: `Copyright © ${new Date().getFullYear()} 코딩하는펭귄(CoodingPenguin)`,
            language: "ko",
          },
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: require.resolve("./src/css/global.css"),
        },
        sitemap: {
          changefreq: "daily",
          priority: 0.5,
          ignorePatterns: ["/essay/tags/**", "/wiki/tags/**"],
          filename: "sitemap.xml",
        },
        gtag: {
          trackingID: "G-53DQ06C3MB",
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "6GO6RGX99R",
        apiKey: "54416d3dc7a6a8a8f32b019a8b562fd7",
        indexName: "coodingpenguin",
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: "search",
        debug: false,
      },
      image: "/social-card.png",
      navbar: {
        title: "코딩하는펭귄의 저장소",
        logo: {
          alt: "CoodingPenguin Devlog Logo",
          src: "/logo.png",
        },
        items: [
          {
            to: "/wiki",
            label: "개발위키",
            position: "left",
          },
          {
            to: "/oss",
            label: "오픈소스로 배우기",
            position: "left",
          },
          {
            to: "/book-review",
            label: "책 리뷰",
            position: "left",
          },
          {
            to: "/essay",
            label: "끄적끄적",
            position: "left",
          },
          {
            href: "https://github.com/coodingpenguin",
            position: "right",
            className: "header-link header-github-link",
          },
          {
            href: "https://www.instagram.com/cooding_penguin",
            position: "right",
            className: "header-link header-instagram-link",
          },
        ],
      },
      footer: {
        style: "light",
        copyright: `Copyright © ${new Date().getFullYear()} 코딩하는펭귄(CoodingPenguin)`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      zoom: {
        selector: ".markdown :not(em) > img",
        config: {
          background: {
            light: "rgb(255, 255, 255)",
            dark: "rgb(50, 50, 50)",
          },
        },
      },
    }),
};

module.exports = config;
