module.exports = [
  "/",
  {
    title: "JavaScript",
    path: "/javascript",
    children: [
      "/javascript/词法作用域",
      "/javascript/执行上下文",
      "/javascript/闭包",
      "/javascript/this",
      "/javascript/call&apply&bind",
      "/javascript/prototype",
      "/javascript/promise",
      "/javascript/深浅拷贝",
      "/javascript/事件循环",
      "/javascript/函数式编程",
    ],
  },
  {
    title: "TypeScript",
    path: "/typescript",
    children: ["/typescript/utility-types"],
  },
  {
    title: "浏览器",
    path: "/browser",
    children: ["/browser/ServiceWorker"],
  },
  {
    title: "框架",
    path: "/frame",
    children: ["/frame/React 实战技巧"],
  },
  {
    title: "工程化",
    path: "/project",
    children: ["/project/webpack", "/project/babel"],
  },
  {
    title: "网络",
    path: "/network",
    children: ["/network/http-cache"],
  },
];
