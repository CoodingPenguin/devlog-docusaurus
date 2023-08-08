// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    "index",
    "articles",
    {
      type: "html",
      value:
        '<hr style="margin: 12px 0; background: var(--ifm-toc-border-color);" />',
    },
    {
      type: "category",
      label: "🖥️ Computer Science",
      link: {
        type: "generated-index",
        slug: "/computer-science",
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "🔻 Algorithm",
          description: "개발자 은퇴하기 전까지 공부해야 하는 알고리즘",
          link: {
            type: "generated-index",
            slug: "/algorithm",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "computer-science/algorithm",
            },
          ],
        },
        {
          type: "category",
          label: "💾 Database",
          link: {
            type: "doc",
            id: "computer-science/database",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "computer-science/database",
            },
          ],
        },
        {
          type: "category",
          label: "🕸️ Distributed System",
          link: {
            type: "doc",
            id: "computer-science/distributed-system",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "computer-science/distributed-system",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "🌨️ Data Engineering",
      link: {
        type: "doc",
        id: "data-engineering",
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "🐘 Hadoop",
          link: {
            type: "doc",
            id: "data-engineering/hadoop",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "data-engineering/hadoop",
            },
          ],
        },
        {
          type: "category",
          label: "✨ Spark",
          link: {
            type: "doc",
            id: "data-engineering/spark",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "data-engineering/spark",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "👩‍💻 Software Engineering",
      link: {
        type: "generated-index",
        slug: "/software-engineering",
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "💅 CSS",
          link: {
            type: "generated-index",
            slug: "/css",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "software-engineering/css",
            },
          ],
        },
        {
          type: "category",
          label: "🐋 Docker",
          link: {
            type: "doc",
            id: "software-engineering/docker",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "software-engineering/docker",
            },
          ],
        },
        {
          type: "category",
          label: "🌶️ Flask",
          link: {
            type: "doc",
            id: "software-engineering/flask",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "software-engineering/flask",
            },
          ],
        },
        {
          type: "category",
          label: "📥 Functional Programming",
          link: {
            type: "doc",
            id: "software-engineering/functional-programming",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "software-engineering/functional-programming",
            },
          ],
        },
        {
          type: "category",
          label: "🐙 GitHub",
          link: {
            type: "doc",
            id: "software-engineering/github",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "software-engineering/github",
            },
          ],
        },
        {
          type: "category",
          label: "🐍 Python",
          link: {
            type: "doc",
            id: "software-engineering/python",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "software-engineering/python",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "🎸 ETC.",
      link: {
        type: "generated-index",
        slug: "/etc",
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "🛠️ Devtool",
          link: {
            type: "generated-index",
            slug: "/devtool",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "etc/devtool",
            },
          ],
        },
        "etc/docusaurus",
        "etc/obsidian",
        {
          type: "category",
          label: "🍯 Tips",
          link: {
            type: "generated-index",
            slug: "/tips",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "etc/tips",
            },
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
