// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Evangelism Sidebar
  evangelismSidebar: [
    {
      type: 'category',
      label: 'Street Outreach',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'ministry/evangelism/overview',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'ministry/evangelism/gospel-bookmark',
          label: 'Gospel Bookmark',
        },
        {
          type: 'doc',
          id: 'ministry/evangelism/praise-worship',
          label: 'Praise & Worship',
        },
        {
          type: 'category',
          label: 'Past Events',
          collapsible: true,
          items: [
            {
              type: 'doc',
              id: 'ministry/evangelism/past-events/2025-10-04',
              label: '2025-10-04',
            },
          ],
        },
      ],
    }
  ],

  // Gospels Sidebar
  gospelsSidebar: [
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
    {
      type: 'category',
      label: 'C. 구원의 서막',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'gospels/C/the-annunciation-of-john-the-baptists-birth',
        },
        {
          type: 'doc',
          id: 'gospels/C/the-annunciation-of-jesus-christs-birth',
        },
        {
          type: 'doc',
          id: 'gospels/C/the-meeting-of-mary-and-elizabeth',
        },
        {
          type: 'doc',
          id: 'gospels/C/the-birth-of-john-the-baptist',
        },
      ],
    },
  ],
};

module.exports = sidebars;