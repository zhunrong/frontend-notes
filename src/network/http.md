# HTTP

HTTP（HyperText Transfer Protocol，超文本传输协议）是一种基于文本的、无状态的通信协议，使用 HTTP 协议时，总是由客户端发起请求，然后由服务端返回响应。

<ImageBox src="/frontend-notes/images/http.jpg" title="HTTP 交互" />

HTTP 请求报文由请求行、请求首部、请求实体（请求首部与请求实体用空行隔开）组成。

<ImageBox src="/frontend-notes/images/http-request.jpg" title="HTTP 请求报文" />

HTTP 响应报文由状态行、响应首部、响应实体（响应首部与响应实体用空行隔开）组成。

<ImageBox src="/frontend-notes/images/http-response.jpg" title="HTTP 响应报文" />

## HTTP/1.1

### 持久连接（keep-alive）

在 HTTP/1.1 之前，浏览器每次请求完毕后都会立即断开 TCP 连接，下次请求时再重新建立，这种方式对于以前简单的网页是没有问题的，但是如今的网页包含大量的资源，渲染一个完整的页面往往需要发送多次请求，于是在 HTTP/1.1 中实现了持久连接的技术，在一次请求完毕后不会立即断开 TCP 连接，在等待时间内如果浏览器发起了新的请求，则会复用同一个 TCP 连接，这样做的好处是减少了 TCP 连接握手与挥手的次数，加快了资源的请求速度。

<ImageBox src="/frontend-notes/images/keep-alive.jpg" title="HTTP 持久连接" />

### 管线化（pipelining）

在持久连接技术的基础上，管线化技术使得 HTTP 的请求效率再次提高。在管线化技术之前，必须要等待前一次请求返回响应之后才能再次发送请求，而管线化技术可以并行发送多个请求，然后再等待服务器按发送顺序依次返回响应。

<ImageBox src="/frontend-notes/images/pipelining.jpg" title="HTTP 管线化" />

### Cookie

HTTP 本身是无状态的协议，但是业务开发中却经常需要管理用户的请求状态，遂提出了基于 Cookie 的状态管理技术。在需要状态管理的请求中，服务端返回响应时通过 **Set-Cookie** 首部字段将 Cookie 发送给客户端并保存下来，客户端下次请求时通过 **Cookie** 首部字段将 Cookie 发给服务端，服务端解析 Cookie 之后便能得知用户状态。

<ImageBox src="/frontend-notes/images/cookie-before.jpg" title="获取 Cookie 之前" />

<ImageBox src="/frontend-notes/images/cookie-after.jpg" title="获取 Cookie 之后" />

### 虚拟主机

HTTP/1.1 虚拟主机技术允许在一台物理主机上部署多个站点，在客户端看来就像是多台服务器。这项技术实现的关键在于客户端请求时，要通过首部 **Host** 字段指定主机名或域名，服务端根据该字段做出判断使用对应的服务进行处理。

<ImageBox src="/frontend-notes/images/virtual-host.jpg" title="虚拟主机技术" />

## 状态码

状态码用于告知客户端本次请求的结果如何，是成功还是失败。

状态码 | 原因短语 | 意义 
----- | -------- | ----
2XX   |          |          
200   | OK       | 请求成功
204   | No Content | 请求成功了但是没有实体返回
206   | Partial Content | 请求成功并返回实体的一部分
3XX   |          |
301   | Moved Permanently | 永久性重定向，客户端应该更新书签中资源的URI
302   | Found    | 临时性重定向，客户端本次应使用新的URI访问
303   | See Other | 要求客户端用新的URI访问资源
304   | Not Modified | 表示资源未修改，客户端可以使用缓存
307   | Temporary Redirect | 与302相同
4XX   |          |
400   | Bad Request | 请求报文错误
401   | Unauthorized | 用户认证失败
403   | Forbidden | 资源被禁止访问
404   | Not Found | 资源未找到
5XX   |           |
500   | Internal Server Error | 服务器内部发生错误
503   | Service Unavailable | 服务不可用

## HTTP/2.0

## HTTPS

