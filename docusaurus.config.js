// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '코딩하는펭귄의 저장소',
  tagline: '코딩하는펭귄의 개발 이모저모',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'coodingpenguin', // Usually your GitHub org/user name.
  projectName: 'devlog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'wiki',
          routeBasePath: '/wiki',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '🤔 생각 중',
          postsPerPage: 3,
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            title: '코딩하는펭귄의 생각모음',
            description: '코딩하는펭귄은 생각 중',
            copyright: `Copyright © ${new Date().getFullYear()} 코딩하는펭귄(CoodingPenguin)`,
            language: 'ko',
          },
        },
        theme: {
          customCss: require.resolve('./src/css/global.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '코딩하는펭귄의 저장소',
        logo: {
          alt: 'CoodingPenguin Devlog Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            label: '📚 개발위키',
            position: 'left',
          },
          {
            to: '/blog',
            label: '💭 생각모음',
            position: 'left'
          },
          {
            href: 'https://github.com/coodingpenguin',
            position: 'right',
            className: 'header-link header-github-link'
          },
          {
            href: 'https://www.instagram.com/cooding_penguin',
            position: 'right',
            className: 'header-link header-instagram-link'
          }
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} 코딩하는펭귄(CoodingPenguin)`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
