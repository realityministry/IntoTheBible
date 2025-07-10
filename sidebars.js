// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Main tutorial sidebar - referenced in docusaurus.config.js
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
    
    // 복음서 섹션
    {
      type: 'category',
      label: 'A. 복음서 소개',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'gospels/A/matthew',
        },
        {
          type: 'doc',
          id: 'gospels/A/mark',
        },
        {
          type: 'doc',
          id: 'gospels/A/luke',
        },
        {
          type: 'doc',
          id: 'gospels/A/john',
        },
      ],
    },

    // Tutorial basics section
    {
      type: 'category',
      label: '튜토리얼',
      collapsible: true,
      collapsed: true,
      items: [
        'tutorial-basics/congratulations',
        'tutorial-basics/create-a-blog-post',
        'tutorial-basics/create-a-document',
        'tutorial-basics/create-a-page',
        'tutorial-basics/deploy-your-site',
        'tutorial-basics/markdown-features',
      ],
    },

    // Tutorial extras section
    {
      type: 'category',
      label: '고급 기능',
      collapsible: true,
      collapsed: true,
      items: [
        'tutorial-extras/manage-docs-versions',
        'tutorial-extras/translate-your-site',
      ],
    },
  ],
};

module.exports = sidebars;