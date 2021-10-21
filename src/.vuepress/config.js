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
  }
};