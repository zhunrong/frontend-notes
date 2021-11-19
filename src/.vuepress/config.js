const path = require("path");
const sidebarConf = require("./sidebar");

module.exports = {
  base: "/frontend-notes/",
  title: "Frontend Notes",
  description: "前端知识点",
  dest: path.resolve(__dirname, "../../docs"),
  port: 9494,
  themeConfig: {
    sidebar: sidebarConf,
    lastUpdated: '更新时间',
    sidebarDepth: 2
  },
  head: [
    ["link", { rel: "icon", href: "/logo.jpg" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
  ],
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      }
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          const moment = require('moment');
          return moment(timestamp).format('YYYY/MM/DD HH:mm:ss');
        }
      }
    ]
  ],
};
