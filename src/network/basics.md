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

具体来说，应用程序委托协议栈收发数据是通过创建套接字（Socket）实现的。所谓套接字，其实就是一块内存空间，它保存了一次网络连接中的一些关键控制信息，比如：通信对象的 IP 地址和端口号、本地的 IP 地址和端口号、使用的传输层协议类型（TCP 或 UDP）、连接的当前状态等。其实网络连接可以简单的想象为在通信双方两台计算机中的某个套接字之间创建了一个条管道，然后数据经由这条管道流通，最终交给对应的应用程序进行处理。

<ImageBox src="/frontend-notes/images/socket.jpg" title="委托协议栈" />

应用程序向套接字写入数据（即发送数据）时，并不是立刻将数据发送出去，而是将数据暂时存在缓冲区中，等累计达到一个阈值后再合成一个网络包发送，这样可以避免频繁的发送过小的网络包，提升网络传输效率。一个网络包中，除了真正的数据，还有包含头部数据（TCP 头部和 IP 头部），数据被拆分成网络包的数量越多，需要重复发送的头部也就越多，效率也就越低。

上面提到的阈值是怎么确定的呢？协议栈会根据一个叫作 MTU（Maximum Transmission Unit，最大传输单元） 的参数来确定，MTU 表示一个网络包的最大长度，在以太网中一般是 1500 字节。然后用 MTU 减去头部的长度之后就是一个网络包所能容纳的最大数据长度，叫做 MSS（Maximum Segment Size，最大分段大小），TCP 头部和 IP 头部总长一般是 40 字节，因此 MSS 一般就是 1460 字节，这个值就上面提到的阈值。

<ImageBox src="/frontend-notes/images/mtu-mss.jpg" title="MTU 与 MSS" />

如果数据在缓冲区的存放时间太长，就会导致网络延迟很高。因此，协议栈内部会有一个计时器，达到一定时间也会立刻将数据发送出去，一般也就是毫秒级。

## TCP 协议

采用 TCP 协议发送数据时，需要在数据前面加上 TCP 头部。

<ImageBox src="/frontend-notes/images/tcp-head.jpg" title="TCP 头部格式" />

在发送数据之前，必须在通信双方之间建立 TCP 连接，即握手，分为 3 个步骤：

1. 客户端（即连接发起方）创建一个 TCP 头部，将控制位的 SYN 设置为 1，委托 IP 模块发送网络包；
2. 服务器收到之后，创建一个 TCP 头部，将控制位的 SYN 和 ACK 设置为 1，委托 IP 模块发送网络包；
3. 客户端收到之后，再次创建一个 TCP 头部，将控制位的 ACK 设置为 1，委托 IP 模块将网络包发出；

经历这 3 次握手阶段之后，TCP 连接才算建立完成，可以开始发送数据了。

发送数据过程中，TCP 会确认对方是否成功收到网络包，如果对方没有收到则会及时重发，所以这里存在一个确认的机制。具体来说，在 TCP 头部中有一个序号字段，表示当前网络包中的数据相当于所有发送数据中的第几个字节，如果接收方顺利收到网络包，接收方会将这个序号值加上数据的长度，并将得到的结果设置到 TCP 头部的 ACK 字段（接收数据序号）中，返回网络包给发送方，表示这个序号之前的数据已经收到，如果发送方一直等不到返回的 ACK 确认网络包（等待时间是动态调节的，一般至少是 0.5 到 1 秒），则会重新发送网络包。另外，其实在 TCP 握手第一阶段，客户端发送的 TCP 头部中就已经包含了一个初始序号值（随机产生的），后续的序号值是从初始序号值的基础上进行增加的，由于 TCP 是允许双向通讯的，所以在握手第二阶段，服务器返回的 TCP 头部中也包含了从服务器发送到客户端的数据初始序号值。

<ImageBox src="/frontend-notes/images/tcp-ack.jpg" title="序号和 ACK 号交互" />

在实际的 TCP 连接中，一方发送完一个网络包后，并不会等待对方的 ACK 号，而是可能按顺序连续发送多个网络包，这样对方只需要返回一个最新的 ACK 号即可确认收到了该序号之前的所有数据。那么应该连续发送多少网络包呢？首先答案肯定不是越多越好，因为 TCP 的接收方的接收缓冲区是有限的，如果发送的数据量超出了对方的接收缓冲区容量，那么超出的数据就丢失了。所以，发送方要根据接收方目前接收缓冲区的剩余容量来决定最多发送多少数据。对此，TCP 采用滑动窗口的方式来优化网络包的发送。具体来说，TCP 连接中的任何一方发出网络包时，都会通过在 TCP 头部中窗口字段设置当前窗口大小（即无需等待 ACK 号连续发送的数据量）来告诉对方，包括握手阶段中的网络包。

<ImageBox src="/frontend-notes/images/tcp-slide-window.jpg" title="滑动窗口" />

当所有数据发送完毕，可以由任意一方发起断开 TCP 连接的操作，即挥手，分为 4 个步骤：

1. 客户端创建一个 TCP 头部，将控制位的 FIN 设置为 1，委托 IP 模块发送网络包；
2. 服务器收到之后，创建一个 TCP 头部，将控制位的 ACK 设置为1，委托 IP 模块发送网络包；
3. 服务器创建一个 TCP 头部，将控制位的 FIN 设置为 1，委托 IP 模块发送网络包；
4. 客户端收到之后，创建一个 TCP 头部，将控制位的 ACK 设置为1，委托 IP 模块发送网络包。

经历这 4 次挥手之后，TCP 连接完全断开，通信双方的套接字不再使用，并在保留一段时间后被删除。

<ImageBox src="/frontend-notes/images/tcp-close.jpg" title="TCP 断开连接" />

## UDP 协议

前面提到 TCP 连接中有很多复杂的交互过程，保证了数据可靠的发送到通讯目标处，当通讯过程中丢失一个网络包时，只需要补发丢失的那一个，如果因为丢失一个网络包而补发全部数据就太得不偿失了。与 TCP 协议相比较而言，UDP 协议就显得非常简单。在 UDP 通讯中，只需要在数据前面加上 UDP 头部，然后交给 IP 模块发出就可以了，既不用确认数据是否送达，也不用先建立连接。其实在数据量非常小的情况下（小于一个网络包的大小）是很适合用 UDP 协议的，因为即使网络包丢失了，全部补发即可，而判断是否丢失的逻辑可以很容易在应用程序中实现。另外在音视频传输这种有实时性要求的场景中，不适合用 TCP 协议，因为 TCP 复杂的交互会导致一定的时延，另外如果出现网络包丢失，即便进行了补发也会错过播放时机，而丢失一些数据对于音视频不会有很大影响，所以用 UDP 协议更加合适。

<ImageBox src="/frontend-notes/images/udp-head.jpg" title="UDP 头部格式" />

## IP 模块

无论是 TCP 还是 UDP，发送数据时都要委托 IP 模块将数据封装成包再发送给通讯对象。所谓网络包，其实可以分为两个部分，前面的是头部，后面的是数据，头部是包含目的地址的控制信息，就像是写了地址的信封，而数据就是信封里面装的信，所以要把数据正确送达目的地，头部是必不可少的。经过协议栈中 IP 模块的处理后，数据被附加了 IP 头部和 MAC 头部。

<ImageBox src="/frontend-notes/images/net-packet.jpg" title="网络包" />

<ImageBox src="/frontend-notes/images/ip-head.jpg" title="IP 头部格式" />

<ImageBox src="/frontend-notes/images/max-head.jpg" title="MAC 头部格式" />

#### IP 地址与 MAC 地址分别有什么作用？

IP 地址和 MAC 地址是两种形式完全不同的地址，IP 地址作用于互联网中，一台计算机（假设只有一张网卡）的 IP 地址是动态分配，而 MAC 地址作用于以太网，一台计算机的 MAC 地址是写死在网卡中的，是不变的。以太网是一种局域网络，在以太网中，所有终端都通过网线连接到交换机的一个端口，一台终端想向另一台终端发送消息时，会将带有目标 MAC 地址的网络包发出到达交换机，交换机通过查询 MAC 地址表将网络包从正确的端口转发出去，而每个终端收到网络包后会根据目标 MAC 地址判断是不是发给自己的，如果不是直接忽略掉，如果是就交给协议栈处理。以太网的这种通讯原理，只适合在一个子网内使用，因为交换机的端口是有限的。要想实现全世界的终端互联互通，只能将一个个子网连接起来，形成互联网。在互联网中，一个网络包要从一个子网发送到另一个子网，只靠 MAC 地址是行不通的，因为交换机并不知道其他子网中终端的 MAC 地址。因此，在互联网中需要先通过 IP 地址将网络包转发到对应的子网，然后在子网内通过 MAC 地址转发到终端。之所以用 IP 地址，是因为 IP 地址是与地域相关，可以逐步缩小范围，就像是发送快递，可以先发到省，然后发到市，再到小区，最后打电话通知到个人。总结来说，IP 地址是真正意义上的地址，根据 IP 地址可以确定一条发送路线，而 MAC 地址更像是一个身份证号码，只看身份证号码是无法找到目的地的。

> 交换机：交换机的 MAC 地址表是动态维护的，当终端向交换机发送网络包时，该终端的 MAC 地址和端口号就会记录在表中，表中的数据每隔几分钟就会清理掉，主要是为了应对终端切换端口。交换机在转发包时，如果 MAC 地址表中找不到对应记录，则会把包发送到所有端口上，这样也不会有问题，因为终端会判断包的接收方地址是不是自己的。

<ImageBox src="/frontend-notes/images/network.jpg" title="网络结构" />

#### IP 地址原理

IP 地址是由 4 组 8 比特的数字组成（通过十进制数字表示并用圆点隔开），所以总共是 32 比特，而这 32 比特中又分为**网络号**和**主机号**，具体分配规则是不固定的，因此要完整表示 IP 地址的结构还需要一个信息——**子网掩码**。

<ImageBox src="/frontend-notes/images/ip-format.jpg" title="IP 地址结构" />

子网掩码也是 32 比特的数字，左边全部为 1，右边全部为 0，左边为 1 的位数表示 IP 地址中用于表示网络号的位数，剩余的就是主机号的位数。

两种特殊的主机号：

1. 全部为 0 时。表示整个子网而不是某台设备。
2. 全部为 1 时。表示广播到子网中所有的设备。
