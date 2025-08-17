---
title: Computer Networking
data: 2025-07-25
categories: [网络工程]
description: 计算机网络分层模型，TCP/IP协议，网络检修工具和技术，相关网络服务，云计算和云存储
tag: [TCP/IP, DNS, DHCP]
comments: true
---



## 1 TCP/IP五层网络模型

![TCP/IP五层模型](/img/2025-08-01/image01.png){:width="500" hight="300"}
_TCP/IP五层模型_

> **物理层**类似装满货物的卡车在公路上行驶，**数据链路层**负责封装货物和本地运输，**网络层**负责路径选择和城际运输，**传输层**保证货物传输质量，**应用层**负责货物具体内容

> TCP/IP四层模型，将物理层和数据链路层合并为网络接口层




### 1.1 物理层
- **Pysical Layer**：传输**比特流**，依赖具体的物理媒介（管线、电缆、无线电波等）
- **主要技术**
    - 线路/信号编码（Line code）：通过调制将二进制数据（0和1）转换为适合在物理信道上传输的电信号或光信号，确保信号高效可靠传输。不改变数据内容，仅改变表示形式
    - 双工通信（Duplex communication）：全双工（Full-duplex）允许两个设备同时发送和接收信息。当连接出现问题时，将降级以半双工（Half-duplex）方式运行，即每个方向都可以通信，但一次只能有一个设备进行通信。
    - 双绞线以太网技术
        - **CAT线/双绞线电缆（Twisted pair cable）**
            - 最常见的电缆类型，一对绞合在一起的铜线，避免受到电磁干扰（electromagnetic interference, EMI）、射频干扰（radio frequency interference, RFI）和两根铜线之间的串扰（crosstalk）影响
            - 标准CAT 6电缆由4对双绞线（8根电线）组成，实际使用多少对取决于使用的传输技术
            - 应用于局域网
                - ISP提供的网关调制解调器通过双绞线以太网电缆将互联网连接传递到路由器或单台计算机
                - 路由器使用双绞线以太网电缆将有线网络连接在内部分配给企业或家庭（或路由器直接为内部网络提供无线网络连接）
        - **跳线/直通电缆（patch cables/Straight-through cables）**
            - 以太网电缆的主要类型，将计算机和路由器连接到集线器和以太网交换机，还可以将服务器连接到以太网交换机
        - **交叉电缆（Crossover cable）**：用于将两个计算机设备直接相互连接，还可以实现交换机互连、集线器互连、路由器互连

### 1.2 数据链路层（网络接口层）
- **Data Link Layer**：传输**传送帧**，定义解释物理层传输的信号的通用方式，负责通过单个链路获取数据
- **主要技术**
    - MAC地址（Media Access Control Address）：用于唯一标识网络接口的物理地址，6字节，2组6对十六进制数表示
    - 以太网协议（Ethernet）：用于跨单个链路发送数据，使用CSMA/CD（载波监听、多点接入、冲突检测）解决冲突域问题，使用MAC地址确保发送方和接收方的唯一性
    - 以太网传输方式
        - 单播（Unicast）：将数据传送给指定的一个接收方
        - 多播（Multicast）：将数据传送给本网段上所有的接收方（FF-FF-FF-FF-FF-FF）
        - 广播（Broadcast）：将数据传送给局域网内所有的接收方
    


### 1.3 网络层
- **Network Layer**：传输**包/数据报**，通过路由器使不同网络之间相互通信，负责通过网络集合获取数据，在两个单独节点之间传递数据
- **主要技术**
    

    ![传统IP地址类](/img/2025-08-01/image06.png){:width="500" hight="300"}
    _传统IP地址类_

    - 传统IP地址类：IP地址是一个32位的数字，通常使用点分十进制表示，每部分范围0-255（例如，192.168.1.1），将IP地址按照`network id + host id`分为五类，其中D用于多播，E用于测试

    - 子网划分（Subnetting）：将一个大的网络划分为多个小的网络，以便在网络中分配IP地址
        - IP地址：一个32位的数字，由网络ID和主机ID组成
        - 子网掩码：连续的1和0组成的32位数字，用于划分网络ID和主机ID
        - 子网ID：IP地址与子网掩码做AND运算得到的结果，同一子网内的设备可以直接通信，无需路由器转发

    - 无类别域间路由（Classless Inter-Domain Routing，CIDR）：在互联网上分配IP地址的技术，它允许路由器根据网络的需求自动分配IP地址，而无需预先分配IP地址
        - CIDR表示法：192.168.1.0/28，其中前28位是网络ID，后4位是主机ID
        - 灵活的地址分配：不局限于A/B/C类网络必须由固定位数的网络ID和主机ID组成
        - 路由聚合：将多个网络聚合为一个网络，减少路由表的大小，提高网络性能
        
    - 地址解析协议（Address Resolution Protocol, ARP）：将目标节点的IP地址转换成其对应的MAC地址，从而在数据链路层封装（encapsulated）成传输帧

    - 分段与重组（Fragmentation & Reassembly）：当数据报长度超过链路层的MTU（Maximum Transmission Unit，最大传输单元）时，将数据包分割成多个小的数据包，每个数据包都有一个唯一的标识符（Identifier）和一个偏移量（Offset），用于将所有部分按正确顺序重新组装
    

```c

为什么需要DNS
DNS工作原理
为什么DHCP是网络管理成为一项更简单的任务
DHCP工作原理
NAT技术如何确保网络安全
VPN和代理如何帮助用户连接和确保安全
    
    - 网际协议（Internet Protocol, IP）：用于在网络中标识和路由数据包，IP地址是一个32位的数字，通常使用点分十进制表示（例如，192.168.1.1）
    - 网际控制报文协议（Internet Control Message Protocol, ICMP）：用于检测网络中的错误和故障，如网络不可达、主机不可达等
    - 网际组管理协议（Internet Group Management Protocol, IGMP）：用于发现网络中的多播组，并将数据包发送给多播组中的所有成员
    - 路由协议
        - 路由选择协议（Routing Selection Protocol）：用于确定从源节点到目标节点的最佳路径，如路由选择协议（Routing Selection Protocol, RSP）
        - 边界网关协议（Border Gateway Protocol, BGP）：用于在不同的自治系统（Autonomous System, AS）之间交换路由信息，如边界网关协议（Border Gateway Protocol, BGP）
        - 开放最短路径优先（Open Shortest Path First, OSPF）：用于在自治系统内选择最佳路径，如开放最短路径优先（Open Shortest Path First, OSPF）
        - 距离矢量路由协议（Distance Vector Routing Protocol）：用于计算从源节点到目标节点的最短路径，如距离矢量路由协议（Distance Vector Routing Protocol, DV）
        - 链路状态路由协议（Link State Routing Protocol）：用于计算从源节点到目标节点的最短路径，如链路状态路由协议（Link State Routing Protocol, LS）
    - 网络地址转换（Network Address Translation, NAT）：用于将私有IP地址转换为公共IP地址，以便在互联网上访问本地网络
        - 静态NAT（Static NAT）：将私有IP地址映射到一个公共IP地址
        - 动态NAT（Dynamic NAT）：将私有IP地址映射到一个公共IP地址，并在一段时间后释放
        - 端口地址转换（Port Address Translation, PAT）：将私有IP地址和端口号映射到一个公共IP地址和端口号
        - 网络地址和端口转换（Network Address and Port Translation, NAPT）：将私有IP地址和端口号映射到一个公共IP地址和端口号，并在一段时间后释放
    - 子网划分（Subnetting）：用于将一个大的网络划分为多个小的网络，以便在网络中分配IP地址
    - 虚拟专用网络（Virtual Private Network, VPN）：用于在公共网络上建立一个安全的虚拟专用网络，以便在网络中传输敏感数据
    - 代理（Proxy）：用于在网络中转发数据，以便在网络中访问受限的资源
```




### 1.4 传输层
- **Transport Layer**：传输**段**，整理出需要获取数据的客户端和服务器，在两个节点之间提供端到端的可靠数据传输
- 常用协议
    - 传输控制协议（Transmission Control Protocol, TCP）
    - 用户数据报协议（User Datagram Protocol, UDP）


TCP端口和套接字
面向连接和无连接协议
如何使用TCP来确保数据完整性

### 1.5 应用层
- **Application Layer**：传输**消息**，直接面向用户，提供具体服务，数据格式由应用协议定义
- 常用协议：超文本传输协议（HyperText Transfer Protocol, HTTP）；文件传输协议（File Transfer Protocol, FTP）；电子邮件协议（Simple Mail Transfer Protocol, SMTP）


---

## 2 网络设备

![网络设备](/img/2025-08-01/image02.png){:width="500" hight="300"}
_各层对应的网络设备_

### 2.1 物理层——电缆&集线器
- cable：连接不同设备传输数据
    - copper：改变铜缆电压高低以传输信号，存在串扰crosstalk，易受电磁干扰
    - fiber：改变光纤中光脉冲以传输信号，传输距离更远，速度更快，抗干扰能力强
- hub：局域网内同时连接多台计算机，存在冲突域collision domain，通信速度慢
- 网络端口：直接连接到构成计算机网络的设备，交换机有多个网络端口，服务器只有一两个。两个指示灯，橙色（Link light）：两个设备都已通电）；绿色（Activity Light） ：数据通过电缆主动传输
- 配线架：包含许多网络端口，集中管理线缆，减少交换机端口占用

### 2.2 数据链路层——交换机
- switch：局域网内同时连接多台计算机，检查以太网协议数据内容，确定并直接发送到目标，消除冲突域，通信速度高


### 2.3 网络层——路由器
- router：在独立网络之间转发数据，小型路由器将流量转发给核心互联网服务提供商（Internet Service Provider, ISP）路由器，核心ISP路由器再使用边界网关协议（Border Gateway Protocol, BGP）协议，确定最佳路径转发流量


---

## 3 各层数据单元

![数据单元与封装](/img/2025-08-01/image05.png){:width="500" hight="300"}
_上层数据单元被封装为下层有效负载_

### 3.1 物理层——比特流
- 比特流（Bit Stream）
    - 由一传二进制数字（0和1）组成的数据流，**是计算机中处理和传输数据的基本形式**
    - 通常以电信号或电磁波的形式在计算机网络中传输
    - 信号的传输速率取决于物理层的传输速度

### 3.2 数据链路层——传输帧
- 以太网数据帧（Ethernet Frame）

    ![以太网数据帧](/img/2025-08-01/image03.png){:width="500" hight="300"}
    _以太网数据帧_

    1. 前导码（Preamble）：7 bytes，帧间缓冲区，用于同步发送方和接收方
    2. 起始帧定界符（Start of Frame Delimiter, SFD）：1 byte，用于标识帧的开始
    3. 目的MAC地址（Destination MAC Address）：6 bytes，用于指定接收方
    4. 源MAC地址（Source MAC Address）：6 bytes，用于指定发送方
    5. 类型字段（Type Field）：2 bytes，用于标识帧的类型，如ARP请求、ARP响应、IP数据包等
    6. VLAN header+Ether-type：6 bytes, 区分不同的VLAN，并描述帧内容
    7. 数据有效负载（Payload）：46-1500 bytes，包含来自上层所有数据（IP数据报头+TCP/UDP报头+应用层数据）
    8. 帧校验序列（Frame Check Sequence, FCS）：4 bytes，使用循环冗余校验（Cyclical redundancy check, CRC）检测帧中是否存在错误。如果存在错误则丢弃数据，由更高层协议来决定是否重新传输，以太网本身仅报告数据完整性，不执行数据恢复
    
### 3.3 网络层——数据报
- IP数据报头（IP Datagram Header）

    ![IP数据报头](/img/2025-08-01/image04.png){:width="400" hight="300"}
    _IP数据报头_

    1. 版本（Version）：4 bits，IP协议版本号，IPv4或IPv6
    2. 报头长度（Header Length）：4bits，IP数据报头的长度，IPv4通常为20bytes
    3. 服务类型（Service Type）：8 bits，有关服务质量或QoS技术的详细信息
    4. 总长度（Total Length）：16 bits，数据报总长度
    5. 标识（Identification）：16 bits，数据报被拆分后的每个分段的唯一标识符
    6. 标志（Flags）：3 bits，是否允许数据报分段，或数据报已分段
    7. 片偏移（Fragment Offset）：13 bits, 数据报被拆分后的每个分段相对于原始数据报的偏移量
    8. 生存时间（Time to Live, TTL）：8 bits，数据报每到达新路由器时该字段递减1，减到0则丢弃该数据报，避免进入无限循环
    9. 协议（Protocol）：8 bits，传输层使用的协议，通常为TCP或UDP
    10. 头部校验和（Header Checksum）：16 bits，检查IP数据报头的内容，由于TTL变化，该字段也会变化，用于检测数据报是否被修改或丢弃
    11. 源IP地址（Source IP Address）：32 bits
    12. 目的IP地址（Destination IP Address）：32 bits
    13. 选项（Options）：`可选字段`，用于测试目的主机是否支持IP选项，如时间戳、严格源路由等
    14. 填充（Padding）：`可选字段`，用于确保IP数据报的长度为4字节的倍数，通常由0填充

### 3.4 传输层
- 传输层数据
    - 段（segment）：
        - 传输层传输的数据包


### 3.5 应用层
- 应用层数据
    - 消息（message）：



## 4 互连网
   
> Internetwork：通过路由器连接在一起的网络集合是一个互连网（internet），其中最著名的是因特网（Internet）

互联网历史
如何演变
如何运作
连接到互连网的不同方式
定义WAN组件
概述无线和蜂窝网络的基础知识


## 5 检修工具与故障排除

使用流行操作系统对网络进行故障排除

## 6 计算机网络的未来





















[1] [Coursera - Google IT Support Professional Certificate - The Bits and Bytes of Computer Networking](https://www.coursera.org/learn/computer-networking)