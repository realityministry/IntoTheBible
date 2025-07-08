// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Into the Bible',
  tagline: 'Holistic Understanding of God\'s Word',
  favicon: 'img/favicon.ico',

  // Future flags for better compatibility
  future: {
    v4: true,
  },

  // Set the production url of your site here
  url: 'https://realityministry.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/IntoTheBible',

  // GitHub pages deployment config (update with your info)
  organizationName: 'REALITY Ministry', // Your GitHub username
  projectName: 'Into the Bible', // Your repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization config for Korean/English
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    localeConfigs: {
      ko: {
        label: '한국어',
        direction: 'ltr',
        htmlLang: 'ko-KR',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Edit URL for your repository
          editUrl: 'https://github.com/your-username/bible-study/tree/main/',
          // Show last update info
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,

        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/your-username/bible-study/tree/main/',
          // Blog best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // Add search functionality
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Social card image
      image: 'img/bible-study-social-card.jpg',
      
      // Search configuration
      algolia: {
        // You'll need to set this up with Algolia for search
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_SEARCH_API_KEY',
        indexName: 'bible-study',
        contextualSearch: true,
        searchPagePath: 'search',
      },

      navbar: {
        title: 'Into the Bible',
        logo: {
          alt: 'Bible Study Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo.svg', // Optional dark mode logo
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '성경 공부',
          },
          {
            to: '/blog', 
            label: '블로그', 
            position: 'left'
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          // {
          //   href: 'https://github.com/your-username/bible-study',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },

      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: '성경 공부',
        //     items: [
        //       {
        //         label: '시작하기',
        //         to: '/docs/intro',
        //       },
        //       {
        //         label: '복음서',
        //         to: '/docs/gospels/intro',
        //       },
        //       {
        //         label: '구약',
        //         to: '/docs/old-testament/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: '커뮤니티',
        //     items: [
        //       {
        //         label: '토론',
        //         href: 'https://github.com/your-username/bible-study/discussions',
        //       },
        //       {
        //         label: '이슈 신고',
        //         href: 'https://github.com/your-username/bible-study/issues',
        //       },
        //     ],
        //   },
        //   {
        //     title: '더보기',
        //     items: [
        //       {
        //         label: '블로그',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/your-username/bible-study',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} REALITY Ministry. All rights reserved.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        // Add additional languages if needed
        additionalLanguages: ['bash', 'json'],
      },

      // Table of contents configuration
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },

      // Color mode configuration
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      // Announcement bar (optional)
      // announcementBar: {
      //   id: 'welcome',
      //   content:
      //     '🎉 새로운 성경 공부 사이트에 오신 것을 환영합니다! <a target="_blank" rel="noopener noreferrer" href="/docs/intro">시작하기</a>',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: true,
      // },
    }),
};

export default config;