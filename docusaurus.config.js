// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'REALITY Ministry',
  tagline: 'REnew All LIving Things in Yeshua',
  favicon: 'img/favicon-little_seed.ico',

  // Future flags for better compatibility
  future: {
    v4: true,
  },

  // Set the production url of your site here
  url: 'https://realityministry.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config (update with your info)
  organizationName: 'realityministry', // Your GitHub username
  projectName: 'realityministry.github.io', // Your repo name

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization config for Korean/English
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
      ko: {
        label: '한국어',
        direction: 'ltr',
        htmlLang: 'ko-KR',
      },
    },
  },

  stylesheets: [
    {
      href: '/src/css/custom.css',
      type: 'text/css',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Edit URL for your repository
          editUrl: 'https://github.com/realityministry/realityministry.github.io/tree/main/',
          // Show last update info
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          // Add KaTeX support for math rendering
          remarkPlugins: [
            require('remark-math'),
          ],
          rehypePlugins: [require('rehype-katex')],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // editUrl: 'https://github.com/realityministry/realityministry.github.io/tree/main/',
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
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        // Local search configuration
        hashed: true,
        language: ['en', 'ko'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchBarPosition: 'right',
        docsRouteBasePath: ['docs'],
        blogRouteBasePath: ['blog'],
        docsDir: ['docs'],
        blogDir: ['blog'],
      },
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Social card image
      image: 'img/bible-study-social-card.jpg',

      navbar: {
        title: '',
        logo: {
          alt: 'REALITY Ministry',
          src: 'img/logo-reality.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'About',
            position: 'left',
            items: [
              {
                to: '/about/vision',
                label: 'Our Vision',
              },
              {
                to: '/about/team',
                label: 'Our Team',
              },
              {
                to: '/about/contact',
                label: 'Contact Us',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Ministry',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'evangelismSidebar',
                label: 'Street Outreach',
              },
              {
                to: '/ministry/mission-trips',
                label: 'Mission Trips',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Devotionals',
            position: 'left',
            items: [
              {
                href: 'https://cotlministry.com',
                label: 'Children of the Light',
              },
              {
                href: 'https://soundcloud.com/children-of-the-light/sets/praise-worship',
                label: 'Praise & Worship',
              },
              {
                type: 'docSidebar',
                sidebarId: 'gospelsSidebar',
                label: 'Into the Gospels (Korean)',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Technology', 
            position: 'left',
            items: [
              {
                to: '/technology/ai-initiative',
                label: 'AI Initiative',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Programs',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'lightprogramSidebar',
                label: 'LIGHT Program',
              },
            ],
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
        ],
      },

      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} REALITY Ministry Inc. All rights reserved.`,
      },

      prism: {
        theme: prismThemes.github,
        // Add additional languages if needed
        additionalLanguages: ['bash', 'json'],
      },

      // Table of contents configuration
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },

      // Color mode configuration - Disable dark mode
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
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