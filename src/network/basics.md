# 网络基础

## TCP/IP

TCP/IP 协议族是网络通信中各种协议的集合，并且为了便于复用协议与适配各种网络场景，采用分层架构：

1. 应用层

> 应用层是直接面向应用程序的，这一层的常用协议包括：HTTP、WS、FTP、DNS等。

2. 传输层

> 传输层协议：TCP（Transmission Control Protocol，传输控制协议）、UDP（User Data Protocol，用户数据报协议）。

3. 网络层

> 网络层通过 IP 协议将数据包加上 IP 首部，交由链路层发出。

4. 链路层

> 链路层包括网络中的硬件部分以及相关驱动程序，比如：网卡、光纤、路由器等。

<ImageBox src="/frontend-notes/images/tcp-ip.jpg" title="TCP/IP 分层架构" />

<ImageBox src="/frontend-notes/images/tcp-ip-layer.jpg" title="TCP/IP 分层封装" />

## 协议栈&套接字

协议栈是在操作系统中实现的网络控制软件，其组成架构包含由 TCP 协议、UDP 协议组成的传输层和 IP 协议构成的网络层。有了协议栈，应用程序要通过网络收发数据时，只需要准备好数据，然后委托操作系统的协议栈将数据发送出去，不需要关心具体的操作细节。

具体来说，应用程序委托协议栈收发数据是通过创建套接字（Socket）实现的。所谓套接字，其实就是一块内存空间，它保存了一次网络连接中的一些关键状态信息，比如：通信对象的 IP 地址和端口号、本地的 IP 地址和端口号、使用的传输层协议类型（TCP 或 UDP）、连接的当前状态等。

<ImageBox src="/frontend-notes/images/socket.jpg" title="委托协议栈" />