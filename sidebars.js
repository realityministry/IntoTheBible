// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Main tutorial sidebar - referenced in docusaurus.config.js
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '시작하기',
    },
    
    // 복음서 섹션
    {
      type: 'category',
      label: '복음서',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: '마가복음',
          collapsible: true,
          collapsed: false,
          items: [
            'gospels/mark/gospel-beginning',
          ],
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