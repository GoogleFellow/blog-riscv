(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{230:function(_,v,i){"use strict";i.r(v);var l=i(4),t=Object(l.a)({},function(){var _=this,v=_.$createElement,i=_._self._c||v;return i("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[i("p",[_._v("title: W7500 Introduction\ncomments: true\ncategories:")]),_._v(" "),i("ul",[i("li",[_._v("Geek Hobbies\ntags:")]),_._v(" "),i("li",[_._v("W7500\nauthor: suda-morris\ndate: 2015-10-04 22:51:33")])]),_._v(" "),i("hr"),_._v(" "),i("h2",{attrs:{id:"wizwiki-w7500平台介绍"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#wizwiki-w7500平台介绍","aria-hidden":"true"}},[_._v("#")]),_._v(" WIZwiki-W7500平台介绍")]),_._v(" "),i("ol",[i("li",[_._v("W7500单芯片解决方案：ARM Cortex-M0，48MHz，128KB Flash，16KB RAM，硬件TCP/IP内核，32KB TCP/IP专属RAM，MII接口，8个socket")]),_._v(" "),i("li",[_._v("程序下载方法：\n"),i("ol",[i("li",[_._v("CMSIS-DAP USB下载")]),_._v(" "),i("li",[_._v("利用串口的ISP固件下载方式(按住boot键不放，按一下sw键进入boot模式)")])])]),_._v(" "),i("li",[_._v("SWD(Serial Wire Debug)调试")]),_._v(" "),i("li",[_._v("2路SPI接口，2路I2C接口，3路UART接口，8路ADC(12bit，1Msps)，6路DMA控制器，1个32位的RNG（随机数生成器）")]),_._v(" "),i("li",[_._v("外部PHY芯片：IP101GA\n"),i("ol",[i("li",[_._v("支持自动MDI / MDIX功能以简化网络的安装以及降低系统维护成本，即自动识别交叉线与直连线")]),_._v(" "),i("li",[_._v("提供媒体独立接口（MII）或简化媒体独立接口（RMII）与不同类型的10/100Mbps的媒体访问控制器（MAC）连接")]),_._v(" "),i("li",[_._v("支持MDC和MDIO与MAC沟通")])])]),_._v(" "),i("li",[_._v("CMSIS-DAP实现芯片：LPC11U35FHI33/501\n"),i("ol",[i("li",[_._v("CMSIS-DAP功能：\n"),i("ol",[i("li",[_._v("通过USB烧写固件到W7500")]),_._v(" "),i("li",[_._v("利用W7500的UART1，通过USB接口与外界进行串口通讯（PC端需要安装驱动，驱动安装成功后会虚拟出串口名如：mbed Seral Port(COMn)）")])])])])]),_._v(" "),i("li",[_._v("开发板框图："),i("img",{attrs:{src:"http://i.imgur.com/YbsZrdE.png",alt:"板子框图"}})]),_._v(" "),i("li",[_._v("W7500芯片框图："),i("img",{attrs:{src:"http://i.imgur.com/pLcN78g.png",alt:"W7500芯片框图"}})])]),_._v(" "),i("h2",{attrs:{id:"mii"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mii","aria-hidden":"true"}},[_._v("#")]),_._v(" MII")]),_._v(" "),i("ol",[i("li",[_._v("MII即媒体独立接口，也叫介质无关接口，它是IEEE-802.3定义的以太网行业标准，它包括一个数据接口，以及一个MAC和PHY之间的管理接口,MAC与PHY间的管理接口一般是MDIO")]),_._v(" "),i("li",[_._v("数据接口包括分别用于发送器和接收器的两条独立信道，每条信道都有自己的数据、时钟和控制信号。")]),_._v(" "),i("li",[_._v("管理接口是个双信号接口：一个是时钟信号，另一个是数据信号。通过管理接口，上层能监视和控制PHY")]),_._v(" "),i("li",[_._v("MII数据接口总共需要16个信号：\n"),i("img",{attrs:{src:"http://i.imgur.com/WkMJaE8.jpg",alt:"MII接口"}}),_._v(" "),i("ol",[i("li",[_._v("Tx_CLK/Rx_CLK：分别是Tx和Rx的时钟信号。均由PHY驱动")]),_._v(" "),i("li",[_._v("TxD[0···3]/RxD[0···3]：分别是Tx和Rx的数据传输线。TxD是控制器驱动，RxD是PHY驱动")]),_._v(" "),i("li",[_._v("Tx_EN/Rx_DV：分别是Tx和Rx的开关。这两根线都是PHY驱动。只有在Tx_EN有效时，TxD才会被PHY接收；只有在Rx_DV有效时，RxD才会被控制器接收")]),_._v(" "),i("li",[_._v("Tx_ER/Rx_ER：分别是Tx和Rx的报错线。这两根线都是PHY驱动。即使是在Tx_EN或Rx_DV期间，只要此两根线有效，则出错的那个周期所传数据无效。10Mb以太网传输时，ER信号不影响正常传输，若不使用ER线，需将其接地")]),_._v(" "),i("li",[_._v("CRS/COL：监听介质是否空闲/监听是否有冲突发生。这两根线都是由PHY驱动，并且只在半双工模式下有效")])])]),_._v(" "),i("li",[_._v("MII控制接口：MDC和MDIO。通过它，控制芯片可以访问PHY的寄存器(100M物理层芯片中介绍的寄存器组，但不仅限于100M物理层芯片，10M物理层芯片也可以拥有这些寄存器)，并通过这些寄存器来对物理层芯片进行控制和管理\n"),i("ol",[i("li",[_._v("MDC：管理接口时钟。它是由控制器驱动，与TX_CLK和RX_CLK无任何关系")]),_._v(" "),i("li",[_._v("MDIO：用来传送MAC层的控制信息和物理层的状态信息。它是一根双向的数据线。因MDIO在某个时钟周期内会空闲，呈高阻状态，故使用时须将其"),i("strong",[_._v("上拉")])])])]),_._v(" "),i("li",[_._v("事实上，一个控制器，可以通过Management Interface来管理32个PHY。即，MDC和MDIO是可以复用的。")]),_._v(" "),i("li",[_._v("MAC主要是通过MDIO（以MDC为时钟）来读写PHY的寄存器，MDIO上数据帧的格式如下：\n"),i("img",{attrs:{src:"http://i.imgur.com/BTLzrtr.jpg",alt:"MDIO上数据帧的格式"}})]),_._v(" "),i("li",[_._v("数据开始前，会发32个1，然后数据开始时先发送一个0，然后恢复到1；接下来两位，10表示读，01表示写；紧接着的5为是PHY地址；下面5位是寄存器地址；接下来两位表示状态转换域，若为读操作，则第一比特时MDIO为高阻态，第二比特时由物理层芯片使MDIO置“0”。若为写操作，则MDIO仍由MAC层芯片控制，其连续输出“10”两个比特。;接下来是16位的数据；空闲时线上为高阻")]),_._v(" "),i("li",[_._v("以前的10M的MAC层芯片和物理层芯片之间传送数据是通过一根数据线来进行的，其时钟是10M，在100M中，如果也用一根数据线来传送的话，时钟需要100M，这会带来一些问题，所以定义了MII接口，它是用4根数据线来传送数据的，这样在传送100M数据时，时钟就会由100M降低为25M，而在传送10M数据时，时钟会降低到2.5M，这样就实现了10M和100M的兼容。")]),_._v(" "),i("li",[_._v("MII接口的MAC模式定义：\n"),i("img",{attrs:{src:"http://i.imgur.com/e0vGKku.gif",alt:"MII接口MAC模式"}})]),_._v(" "),i("li",[_._v("MII接口PHY模式定义：\n"),i("img",{attrs:{src:"http://i.imgur.com/wB70rjr.gif",alt:"MII接口PHY模式"}})]),_._v(" "),i("li",[_._v("在MII接口的连线中，如果TX_ER信号线没有用到，必须将它下拉接地。")]),_._v(" "),i("li",[_._v("RXD_DV同步于RX_CLK，被PHY驱动，它的作用如同于发送通道中的TX_EN，不同的是在时序上稍有一点差别：为了让数据能够成功被RS接收，要求RXD_DV有效的时间必须覆盖整个FRAME的过程")]),_._v(" "),i("li",[_._v("MDC：管理接口的时钟，它是一个非周期信号，信号的最小周期（实际是正电平时间和负电平时间之和）为400ns，最小正电平时间和负电平时间为160ns，最大的正负电平时间无限制。它与TX_CLK和RX_CLK无任何关系。")]),_._v(" "),i("li",[_._v("MDIO是一根双向的数据线。用来传送MAC层的控制信息和物理层的状态信息。MDIO数据与MDC时钟同步，在MDC上升沿有效。")]),_._v(" "),i("li",[_._v("MDIO数据帧的时序关系：\n"),i("img",{attrs:{src:"http://i.imgur.com/S4p240T.gif",alt:"MDIO数据帧的时序关系"}})]),_._v(" "),i("li",[_._v("MII接口也有一些不足之处，主要是其接口信号线很多，发送和接收和指示接口有14根数据线(不包括MDIO接口的信号线，因为其被所有MII接口所共享)，当交换芯片的端口数据较多时，会造成芯片的管脚数目很多的问题，这给芯片的设计和单板的设计都带来了一定的问题。为了解决这些问题，人们设计了两种新的MII接口，它们是RMII接口(Reduced MII接口)和SMII接口(StreamMII接口)。这两种接口都减少了MII接口的数据线，不过它们一般只用在以太网交换机的交换MAC芯片和多口物理层芯片中，而很少用于单口的MAC层芯片和物理层芯片中。RMII接口和SMII接口都可以用于10M以太网和100M以太网，但不可能用于1000M以太网，因为此时时钟频率太高，不可能实现。")])]),_._v(" "),i("h2",{attrs:{id:"中断和事件"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#中断和事件","aria-hidden":"true"}},[_._v("#")]),_._v(" 中断和事件")]),_._v(" "),i("ol",[i("li",[_._v("W7500包含26路中断请求IRQ，一个非屏蔽中断NMI，一个事件信号")]),_._v(" "),i("li",[_._v("W7500可以处理内部事件以唤醒内核（WFE），唤醒事件可以通过如下方式产生：\n"),i("ol",[i("li",[_._v("DMA进程完成之后")])])])]),_._v(" "),i("h2",{attrs:{id:"供电"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#供电","aria-hidden":"true"}},[_._v("#")]),_._v(" 供电")]),_._v(" "),i("ol",[i("li",[_._v("W7500内部嵌入一个稳压器来提供内部1.5V的电压，稳压器没有掉电模式或者休眠模式")]),_._v(" "),i("li",[_._v("ADC参考电压和VDD相同")]),_._v(" "),i("li",[_._v("W7500在系统或电源复位后会处于工作模式，当CPU停止工作时可以采用两种低功耗模式(W7500没有掉电模式)：休眠模式(Sleep)和深度休眠(Deep Sleep)")]),_._v(" "),i("li",[_._v("休眠模式仅仅关闭了CPU时钟，总线时钟依旧开启，深度休眠模式中总线时钟和存储器时钟都被关闭")])]),_._v(" "),i("h2",{attrs:{id:"toe"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#toe","aria-hidden":"true"}},[_._v("#")]),_._v(" TOE")]),_._v(" "),i("ol",[i("li",[_._v("TCP/IP卸载引擎(TOE)是一个嵌入式全硬件TCP/IP以太网控制器，它可以提供更简洁的嵌入式网络接入方案。TOE提供WOL(网络唤醒)功能可以大大降低系统功耗")]),_._v(" "),i("li",[_._v("TOE框图：\n"),i("img",{attrs:{src:"http://i.imgur.com/Mvcx1hV.png",alt:"TOE区域框图"}})]),_._v(" "),i("li",[_._v("NCONFLR（网络配置锁存寄存器）用来锁定和解锁对网络配置寄存器(SIR,SUBR,GAR和SHAR)的访问。当LOCK处于ON，受保护的寄存器无法进行配置，在这种情况下，写入NCONFLR寄存器的值是0x01ACCE55，当LOCK处于OFF，受保护的寄存器可以进行配置，这是该寄存器的值为非0x01ACCE55的其他任意值。")]),_._v(" "),i("li",[_._v("TCKCNTR(Ticker计数寄存器)，用于向TOE内部定时器提供100us的Ticker计数。Ticker计数器单元是HCLK")])]),_._v(" "),i("h2",{attrs:{id:"启动顺序"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#启动顺序","aria-hidden":"true"}},[_._v("#")]),_._v(" 启动顺序")]),_._v(" "),i("ol",[i("li",[_._v("W7500有三种不同的启动模式，可以通过BOOT引脚和TEST引脚选定。TEST=0，BOOT=0，在主Flash存储器中执行用户代码；TEST=0，BOOT=1，W7500支持ISP功能以便于用串口控制flash")])]),_._v(" "),i("h2",{attrs:{id:"存储器"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#存储器","aria-hidden":"true"}},[_._v("#")]),_._v(" 存储器")]),_._v(" "),i("ol",[i("li",[_._v("Flash存储器由长度为32为宽的存储单元构成，可以用于存储代码或者数据")]),_._v(" "),i("li",[_._v("存储器的构成基于一个主Flash存储器块，包含256字节的512扇区，或者4KB的32个块。块和扇区停工读/写保护")])]),_._v(" "),i("h2",{attrs:{id:"时钟复位发生器crg"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#时钟复位发生器crg","aria-hidden":"true"}},[_._v("#")]),_._v(" 时钟复位发生器CRG")]),_._v(" "),i("ol",[i("li",[_._v("CRG包括PLL和POR")]),_._v(" "),i("li",[_._v("三种类型的复位：\n"),i("ol",[i("li",[_._v("外部复位，上电复位，系统复位")]),_._v(" "),i("li",[_._v("系统复位是当下面的情况发生时产生复位：\n"),i("ol",[i("li",[_._v("看门狗事件")]),_._v(" "),i("li",[_._v("重映射之后")]),_._v(" "),i("li",[_._v("软件复位(在Cortex-M0的SYSRESETREQ为)")])])])])]),_._v(" "),i("li",[_._v("两种时钟源可以用来驱动系统时钟：\n"),i("ol",[i("li",[_._v("外部振荡器时钟(8MHz~24MHz)(OCLK)")]),_._v(" "),i("li",[_._v("内部8MHz RC振荡器(RCLK)")])])]),_._v(" "),i("li",[_._v("RNGCLK只有一个源(pll输出)并且没有预分频器")]),_._v(" "),i("li",[_._v("CRG框图："),i("img",{attrs:{src:"http://i.imgur.com/xZTW330.png",alt:"CRG框图"}})]),_._v(" "),i("li",[_._v("监视时钟源：\n"),i("ol",[i("li",[_._v("监视引脚：PA_02")]),_._v(" "),i("li",[_._v("配置寄存器：MONCLK_SSR")])])])]),_._v(" "),i("h2",{attrs:{id:"随机数发生器rng"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#随机数发生器rng","aria-hidden":"true"}},[_._v("#")]),_._v(" 随机数发生器RNG")]),_._v(" "),i("ol",[i("li",[_._v("RNG是一个32位随机数发生器，当上电复位时，RNG会产生一个上电随机数，RNG可以通过软件来运行/停止。RNG的初始值和多项式值可以通过软件来更新")])]),_._v(" "),i("h2",{attrs:{id:"外部中断"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#外部中断","aria-hidden":"true"}},[_._v("#")]),_._v(" 外部中断")]),_._v(" "),i("ol",[i("li",[_._v("不管任何功能引脚功能设置，功能引脚都可以被用作一个外部中断源")]),_._v(" "),i("li",[_._v("外部中断控制器的中断极性分为上升沿和下降沿")])]),_._v(" "),i("h2",{attrs:{id:"pad控制器"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#pad控制器","aria-hidden":"true"}},[_._v("#")]),_._v(" Pad控制器")]),_._v(" "),i("ol",[i("li",[_._v("W7500具有数字I/O功能引脚和数字/模拟多路复用I/O功能引脚，功能引脚的可控性特性包括上拉，下拉，驱动强度，输入开启和CMOS/Schmitt触发输入缓存")])]),_._v(" "),i("h2",{attrs:{id:"gpio"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#gpio","aria-hidden":"true"}},[_._v("#")]),_._v(" GPIO")]),_._v(" "),i("ol",[i("li",[_._v("屏蔽寄存器可将端口位视为整体而其他位不变")]),_._v(" "),i("li",[_._v("访问屏蔽功能允许一位或者多位在单向传输过程中读或写，这避免了基于软件的读-修改-写操作的非线程安全问题。有了访问屏蔽操作，16-bit I/O被分成两半，低字节和高字节，这个位被定义为两个数组，每一个包含256字节")])]),_._v(" "),i("h2",{attrs:{id:"uart"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#uart","aria-hidden":"true"}},[_._v("#")]),_._v(" UART")]),_._v(" "),i("ol",[i("li",[_._v("发送的数据存储在一个32字节的FIFO中，将需要发送的数据写入发送FIFO中，如果UART被启用，它会按照UARTxLCR_H只是的参数开始发送数据帧。数据会持续发送，直到发送FIFO为空。当有数据被写入发送FIFO或当前处于发送的过程中时，UARTxFR的BUSY位会保持为“1”，表示FIFO中有数据。")]),_._v(" "),i("li",[_._v("接收的数据存储在一个32字节的FIFO里面。当接收到一个起始位，它开始运行，并对UART模式中计数器的第8个周期进行采样。如果UARTRXD为“1”，证实接收到了有效的停止位。当一个完整的字符数据被接收到，数据会被存储在接收FIFO中。错误位会被存储在UARTxCR的【10：8】位置，溢出的被存储在UARTxCR的【11】位")]),_._v(" "),i("li",[_._v("更改UART控制寄存器的步骤：\n"),i("ol",[i("li",[_._v("禁用UART")]),_._v(" "),i("li",[_._v("等待接收到或者发送完最后的字符")]),_._v(" "),i("li",[_._v("设置行控制寄存器中FEN位为0，从而刷新发送FIFO")]),_._v(" "),i("li",[_._v("更改UARTCR寄存器")]),_._v(" "),i("li",[_._v("使能UART")])])]),_._v(" "),i("li",[_._v("W7500有个Simple Uart，其实就是UART2，用来ISP烧写程序的，一般用户不直接拿来使用")])]),_._v(" "),i("h2",{attrs:{id:"udmac"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#udmac","aria-hidden":"true"}},[_._v("#")]),_._v(" uDMAC")]),_._v(" "),i("ol",[i("li",[_._v("共6个通道，每个通道用于管理来自某个或者多个外设的内存访问请求")]),_._v(" "),i("li",[_._v("不要给一个第优先级的 通道分配大不要给一个低优先级的通道分配大的R_power值，因为直到重仲裁之前来自控制器高优先级的请求都会被阻止")]),_._v(" "),i("li",[_._v("当N>2^R，并且不是2^R的整数倍时，控制器总是会执行2^R的传输序列，直到N<2^R时再传输，控制器会在DMA周期的末尾，再执行剩余N次传输")]),_._v(" "),i("li",[_._v("DMA周期类型：\n"),i("ol",[i("li",[_._v("Invalid")]),_._v(" "),i("li",[_._v("Basic")]),_._v(" "),i("li",[_._v("Auto-request")]),_._v(" "),i("li",[_._v("ping-pong")])])]),_._v(" "),i("li",[_._v("Ping-pong cycle\n"),i("ol",[i("li",[_._v("DMA控制器轮流切换主、副两个数据通道，直到接收到一个无效的数据结构或者是circle_type被设置成了basic模式，或者是控制器停止了该通道的工作")]),_._v(" "),i("li",[_._v("当DMA使用其中一个通道进行数据传输时候，处理器可以重新配置另外一个通道的参数")])])])]),_._v(" "),i("h2",{attrs:{id:"ssp"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ssp","aria-hidden":"true"}},[_._v("#")]),_._v(" SSP")]),_._v(" "),i("ol",[i("li",[_._v("SSP接口可以同具有以下接口的主句或者从机进行通讯\n"),i("ol",[i("li",[_._v("摩托罗拉SPI接口")]),_._v(" "),i("li",[_._v("TI的同步串行接口")]),_._v(" "),i("li",[_._v("国家半导体的Microware接口")])])]),_._v(" "),i("li",[_._v("SSP接口可作为主机或者从机接口，支持2MHz甚至更高的位速率")]),_._v(" "),i("li",[_._v("PrimeCell SSP复位之后默认是禁用状态，需要按照以下步骤进行配置：\n"),i("ol",[i("li",[_._v("更改SSP控制器SSPCR0和SSPCR1来配置SSP接口外设的主从工作模式以及工作的协议标准：Motorola SPI，Texas Instruments SSP，National Semiconductor")]),_._v(" "),i("li",[_._v("通过更改时钟预分频寄存器SSPCRSR来将外部SSPCLK时钟进行分频，从而可以更改位速率")])])]),_._v(" "),i("li",[_._v("有两种方法可以启动PrimeCell SSP：\n"),i("ol",[i("li",[_._v("激活发送FIFO：Prime Cell SSP禁用时，可以通过写入8个16位值发送FIFO")]),_._v(" "),i("li",[_._v("通过发送FIFO服务请求到CPU中断")])])]),_._v(" "),i("li",[_._v("在从机模式的操作中，为了确保正确的操作，SSPCLK必须必预期的SSPCLKIN最快频率快12倍；在主机模式的操作中，为了确保正确的操作，SSPCLK必须为预期的SSPCLKOUT最快频率的2倍。")]),_._v(" "),i("li",[_._v("SSPCLK的最低频率可以通过下列公式计算，两个条件必须同时被满足：\n"),i("ol",[i("li",[_._v("FSSPCLK(min) >= 2 x FSSPCLKOUT(max), for master mode")]),_._v(" "),i("li",[_._v("FSSPCLK(min) >= 12 x FSSPCLKIN(max), for slave mode.")])])]),_._v(" "),i("li",[_._v("SSPCLK的最高频率可以通过下列公式计算，两个条件必须被同时满足：\n"),i("ol",[i("li",[_._v("FSSPCLK(max) <= 254 x 256 x FSSPCLKOUT(min), for master mode")]),_._v(" "),i("li",[_._v("FSSPCLK(max) <= 254 x 256 x FSSPCLKIN(min), for slave mode.")])])]),_._v(" "),i("li",[_._v("SSPCR0寄存器被用来：\n"),i("ol",[i("li",[_._v("编写穿行时钟速率")]),_._v(" "),i("li",[_._v("在三个协议模式中进行选择")]),_._v(" "),i("li",[_._v("选择合适的数据长度")])])]),_._v(" "),i("li",[_._v("SSPCR1寄存器被用来：\n"),i("ol",[i("li",[_._v("选择主/从模式")]),_._v(" "),i("li",[_._v("启用loopback回环测试功能")]),_._v(" "),i("li",[_._v("启用PrimeCell SSP外设")])])]),_._v(" "),i("li",[_._v("位速率的产生\n"),i("ol",[i("li",[_._v("串行位速率通过将输入时钟SSPCLK分频获得。首先，使用范围在2~254的偶数分频值CPSDVSR对输入时钟进行分频，CPSDVSR的值在SSPCPSR寄存器中设置。然后再使用1~256的其中一个值（即1+SCR）对时钟进一步分频T，此处SCR在SSI控制SSPCR0寄存器中设置。")])])]),_._v(" "),i("li",[_._v("帧格式：根据所设置的数据大小，每个数据帧的长度均在4~16位之间，并且从最高有效位MSB开始发送。\n"),i("ol",[i("li",[_._v("德州仪器（TI）同步串行的帧格式\n"),i("ol",[i("li",[_._v("在该模式中，任何时候当SSP空闲时，SSPCLKOUT和SSPFSSOUT被强制为低电平，发送数据线SSPTx为三态。一旦发送FIFO的底部入口包含数据，SSPFSSOUT就会变为高电平并持续一个SSPCLKOUT周期。要发送的值也从发送FIFO传输到发送逻辑的穿行移位寄存器中")])])]),_._v(" "),i("li",[_._v("Motorola SPI的帧格式\n"),i("ol",[i("li",[_._v("4线接口，其中SSPFSSOUT信号用作从机选择。Motorola SPI格式的主要特性为：SSPCLKOUT信号的不活动状态和相位均通过SSPSCR0控制寄存器中的SPO和SPH来设置。")]),_._v(" "),i("li",[_._v("SPO，时钟极性位。当SPO时钟极性控制位为低时，它在SSPCLKOUT管脚上产生稳定的低电平值。如果SPO位为高，则在没有进行数据传输的情况下，在SSPCLKPUT管脚上产生一个稳定的高电平值。")]),_._v(" "),i("li",[_._v("SPH，相位控制位。SPH相位控制位用来选择捕获数据的时钟边沿并允许边沿改变状态。SPH在第一个传输位上的影响最大，因为它可以在第一个数据捕获边沿之前允许或不允许一次时钟转换。当SPH相位控制位为低时，在第一个时钟边沿转换时捕获数据。如果SPH位为高，则在第二个时钟边沿转换时捕获数据")])])]),_._v(" "),i("li",[_._v("National Semiconductor帧格式\n"),i("ol",[i("li",[_._v("National Semiconductor格式与SPI格式非常相似，不同的是其采用的是使用主-从消息传递技术的半双工模式而非全双工模式。")]),_._v(" "),i("li",[_._v("此穿行传输都由PrimeCell SSP向片外从器件发送8位控制字开始。在此传输过程中，PrimeCell SSP不会接收到输入的数据，在消息发送完毕后，片外从机对消息进行译码，并在PrimeCell SSP将8位控制消息的最后一位发送完成之后等待一个串行时钟周期，之后从机以请求的数据来响应。")])])])])])]),_._v(" "),i("h2",{attrs:{id:"i2c"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#i2c","aria-hidden":"true"}},[_._v("#")]),_._v(" I2C")]),_._v(" "),i("ol",[i("li",[_._v("支持标准模式100Kbps和高速模式400Kbps")]),_._v(" "),i("li",[_._v("SDA是双向的串行数据线，SCL是双向的串行时钟线。总线空闲时，这两根线都为高。每次操作都是9位，包括8个数据位和1个应答位，并且发送数据前必须先传输MSB")]),_._v(" "),i("li",[_._v("数据有效性：在时钟的高电平周期期间，SDA线上的数据必须保持稳定，SDA线上的数据仅可在时钟SCL为低电平时改变。")]),_._v(" "),i("li",[_._v("所有总线传输都带有所需的应答时钟周期，该时钟周期由主机产生。在相应周期内，发送器不能执行下一操作")]),_._v(" "),i("li",[_._v("I2C开始条件和结束条件\n"),i("ol",[i("li",[_._v("当SCL为高电平时，SDA线上由高到低的跳变被定义为开始条件，由低到高的跳变被定义为结束条件")]),_._v(" "),i("li",[_._v("开始条件和结束条件总是由主机产生")]),_._v(" "),i("li",[_._v("I2C总线在结束条件之后一段时间重新被释放。如果使用重新开始条件替代结束条件的话，I2C将会保持占用状态")])])]),_._v(" "),i("li",[_._v("放到SDA线上的每个数据字节应该都是8位，每个字节之后跟随一个应答位。")]),_._v(" "),i("li",[_._v("7位地址之后的第8位是数据方向位（R/W）,0代表写操作，1代表读操作")]),_._v(" "),i("li",[_._v("每个字节之后都有一个应答位，应答位可以使接收者在成功接收到本字节之后，告诉发送者此数据已经被成功接收，可以发送下个字节。主机产生所有的时钟脉冲，包括应答位(第9位)的时钟脉冲")])]),_._v(" "),i("h2",{attrs:{id:"w7500p芯片介绍"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#w7500p芯片介绍","aria-hidden":"true"}},[_._v("#")]),_._v(" W7500P芯片介绍")]),_._v(" "),i("ol",[i("li",[_._v("IOP4IoT（Internet Offload Processor for Internet of Things）芯片，集成ARM Cortex-M0，128KB Flash，硬件TCP/IP内核，10/100M 以太网MAC与PHY，PHY符合IEEE802.3u标准，硬件TCP/IP核支持TCP、UDP、IPv4、ICMP、ARP、IGMP和PPPoE")]),_._v(" "),i("li",[_._v("CPU最大支持48MHz的工作频率")]),_._v(" "),i("li",[_._v("硬件TCP/IP核支持8个套接字，总共可以使用32KB的专用内存，物理层与数据链路层的通信接口符合MII")]),_._v(" "),i("li",[_._v("PHY实际上是内嵌了IC+（IP101G）芯片")]),_._v(" "),i("li",[_._v("除了32KB的Socket专用内存外，还有16KB的通用内存")]),_._v(" "),i("li",[_._v("有6KB的ROM存放boot代码")]),_._v(" "),i("li",[_._v("内部8MHz的RC振荡器")]),_._v(" "),i("li",[_._v("8路12位的ADC，采样速率1Msps")]),_._v(" "),i("li",[_._v("6通道DMA控制器")]),_._v(" "),i("li",[_._v("1路看门狗（32位的向下计数器），4路定时器（32位或者16位的下降计数器），8路PWM控制器（32位计数器，其中6位为可编程的预分频器）")]),_._v(" "),i("li",[_._v("3路串口（其中两路带有FIFO与流控，另一个是简单串口），2路SPI，2路I2C（主从模式均可，最大支持400Kbps）")]),_._v(" "),i("li",[_._v("1个伪随机数产生器")]),_._v(" "),i("li",[_._v("程序内存，数据内存，寄存器和IO口统一被组织在4G的线型地址空间中，所有字节按照小端格式编写")]),_._v(" "),i("li",[_._v("当上电时BOOT引脚和TEST引脚都为低电平时，系统进入正常工作模式；当BOOT引脚为高电平，TEST引脚为低电平，系统进入Boot模式（ISP下载）")]),_._v(" "),i("li",[_._v("支持25路中断请求，1路非屏蔽中断，一路内部事件信号请求（当DMA传输结束后会触发）")]),_._v(" "),i("li",[_._v("VDD电压范围：2.7V~5.5V，ADC的参考电压同VDD")]),_._v(" "),i("li",[_._v("W7500P没有power-off模式，但是有Sleep和Deep Sleep模式,Sleep模式仅停止PCU工作，Deep Sleep模式还会切断所有外设的时钟\n"),i("img",{attrs:{src:"http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:overview:w7500_memory_map.png",alt:"W7500P内存映射图"}})])]),_._v(" "),i("h2",{attrs:{id:"syscfg-system-configuration-controller-的主要功能"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#syscfg-system-configuration-controller-的主要功能","aria-hidden":"true"}},[_._v("#")]),_._v(" SYSCFG(System Configuration Controller)的主要功能")]),_._v(" "),i("ol",[i("li",[_._v("控制内存重映射")]),_._v(" "),i("li",[_._v("可以使能系统锁死后自动复位")]),_._v(" "),i("li",[_._v("保存着最近一次系统复位的原因信息")])]),_._v(" "),i("p",[i("img",{attrs:{src:"http://i.imgur.com/Nn7Krru.gif",alt:"suda-morris"}})])])},[],!1,null,null,null);v.default=t.exports}}]);