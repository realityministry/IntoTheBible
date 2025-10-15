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

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
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
            label: 'Ministry',
            position: 'left',
            items: [
              {
                to: '/ministry/evangelism',
                label: 'Evangelism',
              },
              {
                to: '/ministry/missionary',
                label: 'Missionary',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Arts & Media',
            position: 'left',
            items: [
              {
                to: '/arts-media/books',
                label: 'Books',
              },
              {
                to: '/arts-media/musicals',
                label: 'Musicals',
              },
              {
                to: '/arts-media/songs',
                label: 'Songs',
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
            to: '/programs', 
            label: 'Programs', 
            position: 'left',
          },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'gospelsSidebar',
          //   position: 'left',
          //   label: '복음서',
          // },
          // {
          //   to: '/blog', 
          //   label: 'Blog', 
          //   position: 'left'
          // },
          {
            type: 'dropdown',
            label: 'About',
            position: 'right',
            items: [
              {
                to: '/about/team',
                label: 'Team',
              },
              {
                to: '/about/contact',
                label: 'Contact',
              },
            ],
          },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
          // {
          //   href: 'https://github.com/realityministry/realityministry.github.io',
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