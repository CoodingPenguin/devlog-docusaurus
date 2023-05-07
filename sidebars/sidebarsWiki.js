// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    "index",
    "bookmark",
    {
      type: "html",
      value: '<hr style="margin: 10px 0;" />',
    },
    {
      type: "category",
      label: "💨 Airflow",
      link: {
        type: "generated-index",
        slug: "/airflow",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "airflow",
        },
      ],
    },
    {
      type: "category",
      label: "🔻 Algorithm",
      link: {
        type: "generated-index",
        slug: "/algorithm",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "algorithm",
        },
      ],
    },
    {
      type: "category",
      label: "👍 Code Quality",
      link: {
        type: "generated-index",
        slug: "/code-quality",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "code-quality",
        },
      ],
    },
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
          dirName: "css",
        },
      ],
    },
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
          dirName: "devtool",
        },
      ],
    },
    {
      type: "category",
      label: "🦖 Docusaurus",
      link: {
        type: "generated-index",
        slug: "/docusaurus",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "docusaurus",
        },
      ],
    },
    {
      type: "category",
      label: "🌶️ Flask",
      link: {
        type: "generated-index",
        slug: "/flask",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "flask",
        },
      ],
    },
    {
      type: "category",
      label: "🐘 Hadoop",
      link: {
        type: "generated-index",
        slug: "/hadoop",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "hadoop",
        },
      ],
    },
    {
      type: "category",
      label: "🍋 JavaScript",
      link: {
        type: "generated-index",
        slug: "/javascript",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "javascript",
        },
      ],
    },
    {
      type: "category",
      label: "🐍 Python",
      link: {
        type: "generated-index",
        slug: "/python",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "python",
        },
      ],
    },
    {
      type: "category",
      label: "⚛️ React",
      link: {
        type: "generated-index",
        slug: "/react",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "react",
        },
      ],
    },
    {
      type: "category",
      label: "🪜 Scala",
      link: {
        type: "generated-index",
        slug: "/scala",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "scala",
        },
      ],
    },
    {
      type: "category",
      label: "✨ Spark",
      link: {
        type: "generated-index",
        slug: "/spark",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "spark",
        },
      ],
    },
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
          dirName: "tips",
        },
      ],
    },
  ],
};

module.exports = sidebars;
