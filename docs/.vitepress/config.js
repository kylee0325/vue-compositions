const config = {
  title: "vue-compositions",
  base: "/vue-compositions/",
  lang: "ZH-CN",
  description: "Collection of Vue Composition Apis",
  header: [],
  themeConfig: {
    repo: "kylee0325/vue-compositions",
    docsRepo: "kylee0325/vue-compositions",
    docsBranch: "master",
    docsDir: "docs",
    editLinks: true,
    locales: {
      "/": {
        nav: [
          {
            text: "Changelog",
            link: "https://github.com/lmhcoding/vhook/blob/master/CHANGELOG.md",
          },
        ],
        sidebar: [
          { text: "Introduction", link: "/" },
          {
            text: "State",
            collapsable: false,
            children: [{ text: "useBoolean", link: "/state/useBoolean" }],
          },
        ],
      },
    },
  },
  locales: {
    "/": {
      lang: "ZH-CN",
      title: "vue-compositions",
      description: "Collection of Vue Composition Apis",
    },
  },
};

module.exports = config;
