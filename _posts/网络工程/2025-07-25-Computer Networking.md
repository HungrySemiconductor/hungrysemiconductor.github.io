---
title: Computer Networking
data: 2025-07-25
categories: [网络工程]
description: 计算机网络分层模型，TCP/IP协议，网络检修工具和技术，相关网络服务，云计算和云存储
tag: [TCP/IP, DNS, DHCP]
comments: true
---

## 1 TCP/IP 五层网络模型

![TCP/IP五层模型](/img/2025-08-01/image01.png){:width="500" hight="300"}
_TCP/IP 五层模型_

> **物理层**类似装满货物的卡车在公路上行驶，**数据链路层**负责封装货物和本地运输，**网络层**负责路径选择和城际运输，**传输层**保证货物传输质量，**应用层**负责货物具体内容

> TCP/IP 四层模型，将物理层和数据链路层合并为网络接口层

### 1.1 物理层

- **Pysical Layer**：传输**比特流**，依赖具体的物理媒介（管线、电缆、无线电波等）
- **主要技术**
  - 线路/信号编码（Line code）：通过调制将二进制数据（0 和 1）转换为适合在物理信道上传输的电信号或光信号，确保信号高效可靠传输。不改变数据内容，仅改变表示形式
  - 双工通信（Duplex communication）：全双工（Full-duplex）允许两个设备同时发送和接收信息。当连接出现问题时，将降级以半双工（Half-duplex）方式运行，即每个方向都可以通信，但一次只能有一个设备进行通信。
  - 双绞线以太网技术
    - **CAT 线/双绞线电缆（Twisted pair cable）**
      - 最常见的电缆类型，一对绞合在一起的铜线，避免受到电磁干扰（electromagnetic interference, EMI）、射频干扰（radio frequency interference, RFI）和两根铜线之间的串扰（crosstalk）影响
      - 标准 CAT 6 电缆由 4 对双绞线（8 根电线）组成，实际使用多少对取决于使用的传输技术
      - 应用于局域网
        - ISP 提供的网关调制解调器通过双绞线以太网电缆将互联网连接传递到路由器或单台计算机
        - 路由器使用双绞线以太网电缆将有线网络连接在内部分配给企业或家庭（或路由器直接为内部网络提供无线网络连接）
    - **跳线/直通电缆（patch cables/Straight-through cables）**
      - 以太网电缆的主要类型，将计算机和路由器连接到集线器和以太网交换机，还可以将服务器连接到以太网交换机
    - **交叉电缆（Crossover cable）**：用于将两个计算机设备直接相互连接，还可以实现交换机互连、集线器互连、路由器互连

### 1.2 数据链路层（网络接口层）

- **Data Link Layer**：传输**传送帧**，定义解释物理层传输的信号的通用方式，负责通过单个链路获取数据
- **主要技术**
  - MAC 地址（Media Access Control Address）：用于唯一标识网络接口的物理地址，6 字节，2 组 6 对十六进制数表示
  - 以太网协议（Ethernet）：用于跨单个链路发送数据，使用 CSMA/CD（载波监听、多点接入、冲突检测）解决冲突域问题，使用 MAC 地址确保发送方和接收方的唯一性
  - 以太网传输方式
    - 单播（Unicast）：将数据传送给指定的一个接收方
    - 多播（Multicast）：将数据传送给本网段上所有的接收方（FF-FF-FF-FF-FF-FF）
    - 广播（Broadcast）：将数据传送给局域网内所有的接收方

### 1.3 网络层

- **Network Layer**：传输**包/数据报**，通过路由器使不同网络之间相互通信，负责通过网络集合获取数据，在两个单独节点之间传递数据
- **主要技术**

  ![传统IP地址类](/img/2025-08-01/image06.png){:width="500" hight="300"}
  _传统 IP 地址类_

  - 传统 IP 地址类：IP 地址是一个 32 位的数字，通常使用点分十进制表示，每部分范围 0-255（例如，192.168.1.1），将 IP 地址按照`network id + host id`分为五类，其中 D 用于多播，E 用于测试

  - 子网划分（Subnetting）：将一个大的网络划分为多个小的网络，以便在网络中分配 IP 地址

    - IP 地址：一个 32 位的数字，由网络 ID 和主机 ID 组成
    - 子网掩码：连续的 1 和 0 组成的 32 位数字，用于划分网络 ID 和主机 ID
    - 子网 ID：IP 地址与子网掩码做 AND 运算得到的结果，同一子网内的设备可以直接通信，无需路由器转发

  - 无类别域间路由（Classless Inter-Domain Routing，CIDR）：在互联网上分配 IP 地址的技术，它允许路由器根据网络的需求自动分配 IP 地址，而无需预先分配 IP 地址

    - CIDR 表示法：192.168.1.0/28，其中前 28 位是网络 ID，后 4 位是主机 ID
    - 灵活的地址分配：不局限于 A/B/C 类网络必须由固定位数的网络 ID 和主机 ID 组成
    - 路由聚合：将多个网络聚合为一个网络，减少路由表的大小，提高网络性能

  - 地址解析协议（Address Resolution Protocol, ARP）：将目标节点的 IP 地址转换成其对应的 MAC 地址，从而在数据链路层封装（encapsulated）成传输帧

  - 路由基础知识

    - 路由器：用于转发数据包的网络设备，根据目标节点的 IP 地址选择最佳路径。至少有两个网络接口
    - 基本路由步骤：

      [基本路由步骤1]（图片待更新）
      [基本路由步骤2]（图片待更新）
     

      - A 网络中的主机想要发送数据到 B 网络中的主机
        1. A 网络中的主机与 B 网络中的主机不在同一个网域，所以通过路由器转发数据
        2. A 网络中的主机发送数据（以太网传输帧）到路由器
        3. 路由器剥离出数据中的 IP 数据报，检查报头中的目标 IP 地址，并检查路由表
        4. 路由器根据路由表中的信息确定最佳路径
        5. 路由器将 IP 数据报中的 TTL 减 1 并生成新的校验和，然后将 IP 数据报封装成以太网传输帧（修改其中的 MAC 源地址和 MAC 目标地址）
        6. 路由器将封装好的传输帧发送到 B 网络中的路由器

    - 路由表：
      [基本路由表]（图片待更新）
    - 自治系统（Autonomous System, AS）：由一个或多个路由器组成的网络

  - 路由相关协议：

    - 路由协议（Routing Protocol）：路由器间相互交换路由信息，以确定最佳路径

      - **内部网关协议**（Interior Gateway Protocol, IGP）：单个自治系统内共享信息，分为两种类型

        - 链路状态协议（Link State Protocol, LSP）：(如开放最短路径优先协议 Open Shortest Path First, OSFP)广播整个网络的链路状态信息，所有路由器构建相同的全局拓扑图。全局视角、收敛快但开销大，路由器之间需要交换大量信息。适合复杂网络

        - 距离矢量协议（Distance Vector Protocol, DVP）：(如路由信息协议 Routing Information Protocol, RIP)仅向邻居发送路由表（距离和方向），通过逐跳传递更新。局部视角、简单但扩展性差。适合简单网络

      - **外部网关协议**（Exterior Gateway Protocol, EGP）：在独立自治系统之间交换信息。核心互联网将数据传输到自治系统的边界是互联网运行的关键。

    - 互联网号码分配机构（Internet Number Allocation, IANA）：负责为互联网分配 IP 地址、自治系统编号 ASN 等信息

    - 不可路由地址空间（Unroutable Address Space）：
      - 保留地址：保留给特殊用途，如网络地址转换（Network Address Translation, NAT）、多播地址、保留地址等
      - 私有地址：用于本地网络，不分配给互联网，RFC 1918 定义了三个 IP 地址范围（10.0.0.0/8，172.16.0.0/12，192.168.0.0/16），核心路由器永远不会路由到的地方，这意味着它们不属于任何人，任何人都可以使用它们。只能在自治系统内部使用，不能用于互联网即外部网关。

### 1.4 传输层

- **Transport Layer**：传输**段**，整理出需要获取数据的客户端和服务器，在两个节点之间提供端到端的可靠数据传输
- **主要技术**
  - 核心机制
    - 多路复用/多路分解（Multiplexing/Demultiplexing）：用于在单个网络连接上同时处理多个数据流，提高传输效率。多个应用进程共享同一个传输层连接，通过端口号/连接标识符区分，接收端能正确分离并交付数据给目标进程
    - 端口（port）：16 bits，发送方每个应用进程绑定一个端口号；接收方根据端口号将数据交给正确的应用
    - 套接字（socket）：<IP address>:<port>
  - 主要协议
    - 传输控制协议（Transmission Control Protocol, TCP）
    - 用户数据报协议（User Datagram Protocol, UDP）
  - 网络安全基础知识
    - 防火墙（Firewalls）

TCP 端口和套接字
面向连接和无连接协议
如何使用 TCP 来确保数据完整性

### 1.5 应用层

- **Application Layer**：传输**消息**，直接面向用户，提供具体服务，数据格式由应用协议定义
- 常用协议：超文本传输协议（HyperText Transfer Protocol, HTTP）；文件传输协议（File Transfer Protocol, FTP）；电子邮件协议（Simple Mail Transfer Protocol, SMTP）

```c

为什么需要DNS
DNS工作原理
为什么DHCP是网络管理成为一项更简单的任务
DHCP工作原理
NAT技术如何确保网络安全
VPN和代理如何帮助用户连接和确保安全
```

---

## 2 网络设备

![网络设备](/img/2025-08-01/image02.png){:width="500" hight="300"}
_各层对应的网络设备_

### 2.1 物理层——电缆&集线器

- cable：连接不同设备传输数据
  - copper：改变铜缆电压高低以传输信号，存在串扰 crosstalk，易受电磁干扰
  - fiber：改变光纤中光脉冲以传输信号，传输距离更远，速度更快，抗干扰能力强
- hub：局域网内同时连接多台计算机，存在冲突域 collision domain，通信速度慢
- 网络端口：直接连接到构成计算机网络的设备，交换机有多个网络端口，服务器只有一两个。两个指示灯，橙色（Link light）：两个设备都已通电）；绿色（Activity Light） ：数据通过电缆主动传输
- 配线架：包含许多网络端口，集中管理线缆，减少交换机端口占用

### 2.2 数据链路层——交换机

- switch：局域网内同时连接多台计算机，检查以太网协议数据内容，确定并直接发送到目标，消除冲突域，通信速度高

### 2.3 网络层——路由器

- router：在独立网络之间转发数据，小型路由器将流量转发给核心互联网服务提供商（Internet Service Provider, ISP）路由器，核心 ISP 路由器再使用边界网关协议（Border Gateway Protocol, BGP）协议，确定最佳路径转发流量

---

## 3 各层数据单元

![数据单元与封装](/img/2025-08-01/image05.png){:width="500" hight="300"}
_上层数据单元被封装为下层有效负载_

### 3.1 物理层——比特流(Bit)

- 比特流（Bit Stream）
  - 由一传二进制数字（0 和 1）组成的数据流，**是计算机中处理和传输数据的基本形式**
  - 通常以电信号或电磁波的形式在计算机网络中传输
  - 信号的传输速率取决于物理层的传输速度

### 3.2 数据链路层——传输帧(Frame)

- 以太网数据帧（Ethernet Frame）

  ![以太网数据帧](/img/2025-08-01/image03.png){:width="500" hight="300"}
  _以太网数据帧_

  1. 前导码（Preamble）：7 bytes，帧间缓冲区，用于同步发送方和接收方
  2. 起始帧定界符（Start of Frame Delimiter, SFD）：1 byte，用于标识帧的开始
  3. 目的 MAC 地址（Destination MAC Address）：6 bytes，用于指定接收方
  4. 源 MAC 地址（Source MAC Address）：6 bytes，用于指定发送方
  5. 类型字段（Type Field）：2 bytes，用于标识帧的类型，如 ARP 请求、ARP 响应、IP 数据包等
  6. VLAN header+Ether-type：6 bytes, 区分不同的 VLAN，并描述帧内容
  7. 数据有效负载（Payload）：46-1500 bytes，包含来自上层所有数据（IP 数据报头+TCP/UDP 报头+应用层数据）
  8. 帧校验序列（Frame Check Sequence, FCS）：4 bytes，使用循环冗余校验（Cyclical redundancy check, CRC）检测帧中是否存在错误。如果存在错误则丢弃数据，由更高层协议来决定是否重新传输，以太网本身仅报告数据完整性，不执行数据恢复

### 3.3 网络层——数据报(Datagram)

- IP 数据报头（IP Datagram Header）

  ![IP数据报头](/img/2025-08-01/image04.png){:width="400" hight="300"}
  _IP 数据报头_

  1. 版本（Version）：4 bits，IP 协议版本号，IPv4 或 IPv6
  2. 报头长度（Header Length）：4bits，IP 数据报头的长度，IPv4 通常为 20bytes
  3. 服务类型（Service Type）：8 bits，有关服务质量或 QoS 技术的详细信息
  4. 总长度（Total Length）：16 bits，数据报总长度
  5. 标识（Identification）：16 bits，数据报被拆分后的每个分段的唯一标识符
  6. 标志（Flags）：3 bits，是否允许数据报分段，或数据报已分段
  7. 片偏移（Fragment Offset）：13 bits, 数据报被拆分后的每个分段相对于原始数据报的偏移量
  8. 生存时间（Time to Live, TTL）：8 bits，数据报每到达新路由器时该字段递减 1，减到 0 则丢弃该数据报，避免进入无限循环
  9. 协议（Protocol）：8 bits，传输层使用的协议，通常为 TCP 或 UDP
  10. 头部校验和（Header Checksum）：16 bits，检查 IP 数据报头的内容，由于 TTL 变化，该字段也会变化，用于检测数据报是否被修改或丢弃
  11. 源 IP 地址（Source IP Address）：32 bits
  12. 目的 IP 地址（Destination IP Address）：32 bits
  13. 选项（Options）：`可选字段`，用于测试目的主机是否支持 IP 选项，如时间戳、严格源路由等
  14. 填充（Padding）：`可选字段`，用于确保 IP 数据报的长度为 4 字节的倍数，通常由 0 填充

- 分段与重组（Fragmentation & Reassembly）：当数据报长度超过链路层的 MTU（Maximum Transmission Unit，最大传输单元）时，将数据包分割成多个小的数据包，每个数据包都有一个唯一的标识符（Identifier）和一个偏移量（Offset），用于将所有部分按正确顺序重新组装成完整的数据报

### 3.4 传输层——报文段(Segment)

- TCP 报文段头（TCP Segment Header）：

  [TCP报文段头]（图片待更新）

  1. 源端口号（Source port）：16 bits，
  2. 目标端口号（Destination port）：16 bits，
  3. 序列号（Sequence number）：32 bits，
  4. 确认应答号（Acknowledgment number）：32 bits，
  5. 头部长度（Header length）：4 bits，
  6. 保留（empty）：6 bits，
  7. 控制位（Control flags）：6 bits，
  8. 窗口大小（Window）：16 bits，
  9. 校验和（Checksum）：16 bits，
  10. 紧急指针（Urgent）：16 bits，
  11. 选项（Options）：`可选字段`，
  12. 填充（Padding）：`可选字段`，

### 3.5 应用层——

- 应用层数据
  - 消息（message）：

## 4 互连网

> Internetwork：通过路由器连接在一起的网络集合是一个互连网（Internet），其中最著名的是因特网（internet）

互联网历史
如何演变
如何运作
连接到互连网的不同方式
定义 WAN 组件
概述无线和蜂窝网络的基础知识

## 5 检修工具与故障排除

使用流行操作系统对网络进行故障排除

## 6 计算机网络的未来

[1] [Coursera - Google IT Support Professional Certificate - The Bits and Bytes of Computer Networking](https://www.coursera.org/learn/computer-networking)
