// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Referenced in docusaurus.config.js
  gospelsSidebar: [
    // {
    //   type: 'html',
    //   value: '<div class="sidebar-category-title">📖 성경 공부</div>',
    //   className: 'sidebar-category-header',
    // },
    {
      type: 'doc',
      id: 'gospels/preface',
      label: '머리말',
    },
    {
      type: 'doc',
      id: 'gospels/toc',
      label: '목차',
    },
    {
      type: 'doc',
      id: 'gospels/bible-reading-chart',
      label: '성경읽기표',
    },


    {
      type: 'category',
      label: 'A. 복음서 소개',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'gospels/A/the-gospel-of-matthew-introduction',
        },
        {
          type: 'doc',
          id: 'gospels/A/the-gospel-of-mark-introduction',
        },
        {
          type: 'doc',
          id: 'gospels/A/the-gospel-of-luke-introduction',
        },
        {
          type: 'doc',
          id: 'gospels/A/the-gospel-of-john-introduction',
        },
      ],
    },

    {
      type: 'category',
      label: 'B. 복음서 서론',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'gospels/B/the-beginning-of-the-gospel',
        },
        {
          type: 'doc',
          id: 'gospels/B/the-genealogy-of-jesus-christ',
        },
        {
          type: 'doc',
          id: 'gospels/B/jesus-the-light-of-the-world',
        },
        {
          type: 'doc',
          id: 'gospels/B/the-testimony-of-the-gospel',
        },
      ],
    },

  ],
};

module.exports = sidebars;