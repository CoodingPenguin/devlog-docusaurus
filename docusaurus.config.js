// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');
const pluginImageZoom = require('docusaurus-plugin-image-zoom');


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '코딩하는펭귄의 저장소',
  tagline: '코딩하는펭귄의 개발 이모저모',
  favicon: '/favicon.ico',
  titleDelimiter: '@',

  // Set the production url of your site here
  url: 'https://coodingpenguin.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // Set trailing slash option.
  // ref: https://melonicedlatte.com/2023/02/05/232900.html
  trailingSlash: false,

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
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  plugins: [
    pluginImageZoom,
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'wiki',
          routeBasePath: '/wiki',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          path: 'essay',
          routeBasePath: '/essay',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '끄적이는 중',
          postsPerPage: 3,
          showReadingTime: false,
          feedOptions: {
            type: 'all',
            title: '코딩하는펭귄의 끄적끄적',
            description: '코딩하는펭귄은 글쓰는 중',
            copyright: `Copyright © ${new Date().getFullYear()} 코딩하는펭귄(CoodingPenguin)`,
            language: 'ko',
          },
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: require.resolve('./src/css/global.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: [
            '/essay/tags/**',
            '/wiki/tags/**'
          ],
          filename: 'sitemap.xml',
        },
        gtag: {
          trackingID: 'G-53DQ06C3MB'
        }
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: '6GO6RGX99R',
        apiKey: '54416d3dc7a6a8a8f32b019a8b562fd7',
        indexName: 'coodingpenguin',
        contextualSearch: true,
        searchParameters: {
          attributesForFaceting: [
            'type',
            'lang',
            'language',
            'version',
            'docusaurus_tag',
          ],
        },
        searchPagePath: 'search',
        debug: false,
      },
      image: '/social-card.png',
      navbar: {
        title: '코딩하는펭귄의 저장소',
        logo: {
          alt: 'CoodingPenguin Devlog Logo',
          src: '/logo.png',
        },
        items: [
          {
            to: '/wiki',
            label: '개발위키',
            position: 'left',
          },
          {
            to: '/essay',
            label: '끄적끄적',
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
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      }
    }),
};

module.exports = config;
