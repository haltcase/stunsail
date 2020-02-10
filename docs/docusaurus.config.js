const { resolve } = require("path")

module.exports = {
  title: "stunsail",
  tagline: "the functional-ish javascript utility library",
  url: "https://citycide.github.io/stunsail",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "citycide",
  projectName: "stunsail",
  themeConfig: {
    navbar: {
      title: "stunsail",
      logo: {
        alt: "stunsail logo",
        src: "img/undraw_Container_ship_ok1c.svg"
      },
      links: [
        { to: "docs/quick-start", label: "quick start", position: "left" },
        { to: "docs/api", label: "api", position: "left" },
        { to: "docs/changelog", label: "changelog", position: "left" },
        {
          href: "https://github.com/citycide/stunsail",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Learn",
          items: [
            {
              label: "Quick Start",
              to: "docs/quick-start"
            },
            {
              label: "API Documentation",
              to: "docs/api"
            }
          ]
        },
        {
          title: "Contribute",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/citycide/stunsail"
            },
            {
              label: "Issues",
              href: "https://github.com/citycide/stunsail/issues"
            },
            {
              label: "Pull Requests",
              href: "https://github.com/citycide/stunsail/pulls"
            }
          ]
        },
        {
          title: "About",
          items: [
            {
              label: "Changelog",
              to: "docs/changelog"
            },
            {
              label: "License",
              to: "docs/license"
            }
          ]
        }
      ],
      copyright: "MIT Licensed | Copyright © 2017-present Bo Lingen"
    },
    prism: {
      theme: require("prism-react-renderer/themes/oceanicNext")
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/citycide/stunsail/edit/master/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ],
  plugins: [
    [resolve(__dirname, "./src/plugins/typedoc.js"), {
      paths: ["../src"]
    }]
  ]
}
