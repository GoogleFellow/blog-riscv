(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{212:function(t,s,a){t.exports=a.p+"assets/img/knowledge_map.12bc9800.jpg"},213:function(t,s,a){t.exports=a.p+"assets/img/Von_Neumann_architecture.76984515.jpg"},214:function(t,s,a){t.exports=a.p+"assets/img/mips_instruction.b1ade5f8.jpeg"},215:function(t,s,a){t.exports=a.p+"assets/img/cpu_registers.cdba5c17.jpg"},216:function(t,s,a){t.exports=a.p+"assets/img/elf_format.276a740d.jpg"},217:function(t,s,a){t.exports=a.p+"assets/img/linker_process.f62da9b2.jpeg"},218:function(t,s,a){t.exports=a.p+"assets/img/memory_segmentation.57211af3.png"},219:function(t,s,a){t.exports=a.p+"assets/img/memory_paging.0cf2f08e.png"},220:function(t,s,a){t.exports=a.p+"assets/img/dynamic_link.8cab516a.jpeg"},221:function(t,s,a){t.exports=a.p+"assets/img/plt_got_table.1144d3a2.jpg"},222:function(t,s,a){t.exports=a.p+"assets/img/charset_encoding.9911c58d.jpg"},223:function(t,s,a){t.exports=a.p+"assets/img/gate_circuit.94194480.jpg"},224:function(t,s,a){t.exports=a.p+"assets/img/half_adder.5860fd8c.jpg"},225:function(t,s,a){t.exports=a.p+"assets/img/full_adder.3f11f278.jpg"},226:function(t,s,a){t.exports=a.p+"assets/img/8_bit_adder.68cd3891.jpeg"},227:function(t,s,a){t.exports=a.p+"assets/img/sequent_multiply.cb809de1.jpg"},228:function(t,s,a){t.exports=a.p+"assets/img/multiply_example.0615e5e4.jpeg"},229:function(t,s,a){t.exports=a.p+"assets/img/BCD_encoding.f5a0b0f2.jpg"},230:function(t,s,a){t.exports=a.p+"assets/img/ieee_float32.914b71bf.jpg"},301:function(t,s,a){"use strict";a.r(s);var _=a(2),r=Object(_.a)({},(function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"计算机组成原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#计算机组成原理"}},[t._v("#")]),t._v(" 计算机组成原理")]),t._v(" "),_("h2",{attrs:{id:"知识地图"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#知识地图"}},[t._v("#")]),t._v(" 知识地图")]),t._v(" "),_("p",[_("img",{attrs:{src:a(212),alt:"知识图谱"}})]),t._v(" "),_("h2",{attrs:{id:"冯诺依曼体系结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#冯诺依曼体系结构"}},[t._v("#")]),t._v(" 冯诺依曼体系结构")]),t._v(" "),_("p",[_("img",{attrs:{src:a(213),alt:"冯诺依曼体系结构"}})]),t._v(" "),_("h2",{attrs:{id:"提高-cpu-性能的方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提高-cpu-性能的方式"}},[t._v("#")]),t._v(" 提高 CPU 性能的方式")]),t._v(" "),_("ol",[_("li",[t._v("增加 CPU 核心的数量，通过并行计算来提升性能")]),t._v(" "),_("li",[t._v("使用更先进的 CPU 制造工艺")]),t._v(" "),_("li",[t._v("加速大概率事件（比如机器学习中，99% 都是向量和矩阵计算）")]),t._v(" "),_("li",[t._v("通过流水线提高性能，拆分 CPU 指令执行的过程，细化运行")]),t._v(" "),_("li",[t._v("通过预测提高性能")])]),t._v(" "),_("h2",{attrs:{id:"mips-指令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mips-指令"}},[t._v("#")]),t._v(" MIPS 指令")]),t._v(" "),_("p",[_("img",{attrs:{src:a(214),alt:"MIPS 指令"}})]),t._v(" "),_("p",[t._v("MIPS 指令是一个 32 位的整数，高 6 位叫操作码，代表这条指令具体是一条什么样的指令。")]),t._v(" "),_("ul",[_("li",[t._v("R 指令一般用来做算数和逻辑操作，里面有读取和写入数据的寄存器的地址。如果是逻辑位移操作，后面还有位移操作的位移量，而最后的功能码，则是在前面的操作码不够的时候，扩展操作码表示对应的具体指令的。")]),t._v(" "),_("li",[t._v("I 指令通常是用在数据传输、条件分支以及在运算的时候使用的并非变量而是常数。这个时候没有了位移量和功能码，也没有了第三个寄存器，而是把这三个部分直接合并成了一个地址值或者一个常数。")]),t._v(" "),_("li",[t._v("J 指令就是一个跳转指令，高 6 位之外的 26 位都是一个跳转后的地址。")])]),t._v(" "),_("h2",{attrs:{id:"cpu-内部寄存器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cpu-内部寄存器"}},[t._v("#")]),t._v(" CPU 内部寄存器")]),t._v(" "),_("p",[_("img",{attrs:{src:a(215),alt:"CPU 内部寄存器"}})]),t._v(" "),_("ul",[_("li",[t._v("条件码寄存器会记录下当前执行指令的条件判断状态，然后通过跳转指令读取对应的条件码，修改 PC 寄存器内的下一条指令的地址，最终实现 if...else 以及 for/while 这样的程序控制流程。")])]),t._v(" "),_("h2",{attrs:{id:"elf-文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#elf-文件"}},[t._v("#")]),t._v(" ELF 文件")]),t._v(" "),_("p",[_("img",{attrs:{src:a(216),alt:"ELF 文件格式"}})]),t._v(" "),_("p",[t._v("链接器会扫描所有输入的目标文件，然后把所有符号表里的信息收集起来，构成一个全局的符号表。然后在根据重定位表，把所有不确定要跳转地址的代码，根据符号表里存储的地址，进行一个修正。最后，把所有目标文件的对应段进行一个合并，变成了最终的可执行文件。")]),t._v(" "),_("p",[_("img",{attrs:{src:a(217),alt:"ELF 文件格式"}})]),t._v(" "),_("p",[t._v("装载器不再需要考虑地址跳转的问题，只需要解析 ELF 文件，把对应的指令和数据，加载到内存里面供 CPU 执行就可以了。")]),t._v(" "),_("p",[t._v("Linux 下可执行文件的格式是 "),_("code",[t._v("ELF")]),t._v("，Windows 下可执行文件的格式是 "),_("code",[t._v("PE")]),t._v("， Linux 下的装载器只能解析 ELF 格式而不能解析 PE 格式。")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("Linux 下著名的开源软件 Wine，就是通过兼容 PE 格式装载器，使得我们能直接在 Linux 下运行 Windows 程序。")]),t._v(" "),_("p",[t._v("Windows 的 WSL 可以解析和加载 ELF 格式的文件。")])]),t._v(" "),_("h2",{attrs:{id:"程序装载"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#程序装载"}},[t._v("#")]),t._v(" 程序装载")]),t._v(" "),_("h3",{attrs:{id:"虚实转换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#虚实转换"}},[t._v("#")]),t._v(" 虚实转换")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("我们把指令里用到的内存地址叫做"),_("strong",[t._v("虚拟内存地址")]),t._v("，实际在内存硬件里面的空间地址叫做"),_("strong",[t._v("物理内存地址")]),t._v("。")])]),t._v(" "),_("p",[t._v("对于任何一个程序来说，它看到的都是同样的内存地址，我们维护一个虚拟内存到物理内存的映射表，这样实际程序指令执行的时候，会通过虚拟内存地址，找到对应的物理内存地址，然后执行。因为是连续的内存地址空间，所有我们只需要维护映射关系的起始地址和对应的空间大小就可以了。")]),t._v(" "),_("h3",{attrs:{id:"内存分段-页"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内存分段-页"}},[t._v("#")]),t._v(" 内存分段/页")]),t._v(" "),_("p",[_("img",{attrs:{src:a(218),alt:"内存分段"}})]),t._v(" "),_("p",[t._v("如上图所示，内存分段会带来内存碎片的问题，解决办法是"),_("strong",[t._v("内存交换")]),t._v("。")]),t._v(" "),_("p",[t._v("硬盘的访问速度要比内存慢很多，如果内存交换的时候，交换的是一个很占内存空间的程序，这样整个机器都会显得卡顿。解决的办法是"),_("strong",[t._v("内存分页")]),t._v("，在需要进行内存交换的时候，让需要交换写入或者从磁盘装载的数据更少一点。")]),t._v(" "),_("p",[t._v("分段是将一整段连续连续的空间映射给程序，分页是把整个物理内存空间切成一段段固定尺寸的大小。对应的应用程序所需要占用的虚拟内存空间，也会同样切成一段段固定尺寸的大小。这样一个连续并且尺寸固定的内存空间称为"),_("strong",[t._v("页")]),t._v("。从虚拟内存到物理内存的映射，不再是拿整段连续内存的物理地址，而是按照一个一个页来的。在 Linux 下，我们通常只设置成 4KB。")]),t._v(" "),_("p",[_("img",{attrs:{src:a(219),alt:"内存分页"}})]),t._v(" "),_("p",[t._v("由于内存空间都是预先划分好的，也就没有了不能使用的碎片，而只有被释放出来的很多 4KB 的页。即使内存空间不够，需要让现有的、正在运行的其它程序通过内存交换释放出一些内存页来，一次性写入磁盘的也只有少数的一个页或者几个页。")]),t._v(" "),_("p",[t._v("更进一步，分页的方式使得我们在装载程序的时候，不再需要一次性把程序加载到物理内存中。我们完全可以在进行虚拟内存和物理内存的页之间的映射之后，并不真的把页加载到物理内存里，而是只在程序运行中，需要用到对应虚拟内存页里面的指令和数据时，再加载到物理内存里面去。")]),t._v(" "),_("h2",{attrs:{id:"动态链接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#动态链接"}},[t._v("#")]),t._v(" 动态链接")]),t._v(" "),_("p",[_("img",{attrs:{src:a(220),alt:"动态链接"}})]),t._v(" "),_("p",[t._v("想要在程序运行的时候共享代码，有一定的要求，就是这些机器码必须是"),_("strong",[t._v("地址无关")]),t._v("的，即编译出来的共享库文件的指令代码是地址无关码。常见的地址相关的代码：")]),t._v(" "),_("ul",[_("li",[t._v("绝对地址代码")]),t._v(" "),_("li",[t._v("利用重定位表的代码")])]),t._v(" "),_("h3",{attrs:{id:"plt-procedure-link-table-和-got-global-offset-table"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#plt-procedure-link-table-和-got-global-offset-table"}},[t._v("#")]),t._v(" PLT(Procedure Link Table) 和 GOT(Global Offset Table)")]),t._v(" "),_("p",[_("img",{attrs:{src:a(221),alt:"PLT和GOT"}})]),t._v(" "),_("p",[t._v("在动态链接对应的共享库时，我们在共享库的 data section 里面，保存了一张 GOT 表，GOT 表在内存里和对应的代码段之间的偏移量始终是确定的。**虽然共享库的代码部分的物理内存是共享的，但是数据部分是各个动态链接它的应用程序里面各加载一份的。**GOT 表里的数据，是在我们加载一个个共享库的时候写进去的。**不同的进程，调用同样的 lib.so，各自 GOT 里面指向最终加载的动态链接库里面的虚拟内存地址是不同的。**这有点像 C 语言里用函数指针来调用对应的函数，并不是通过预先已经确定好的函数名来调用，而是利用当时它在内存里面的动态地址来调用。")]),t._v(" "),_("h2",{attrs:{id:"二进制编码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二进制编码"}},[t._v("#")]),t._v(" 二进制编码")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("原码和补码的区别：")]),t._v(" "),_("p",[t._v("原码使用最高位来表示符号，且最高位不参与数值运算；")]),t._v(" "),_("p",[t._v("补码也使用最高位表示符号，但是最高位也会参与数值运算。")])]),t._v(" "),_("p",[t._v("用补码表示负数，使得整数相加变得更加容易，不需要特殊处理，也意味着它们是同样的电路。")]),t._v(" "),_("h2",{attrs:{id:"unicode-和-utf-8"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#unicode-和-utf-8"}},[t._v("#")]),t._v(" Unicode 和 UTF-8")]),t._v(" "),_("p",[t._v("Unicode 是一个字符集(Charset)，包含了 150 种语言的 14 万个不同的字符。")]),t._v(" "),_("p",[t._v("UTF-8 是一种字符编码(Character Encoding)，主要解决如何使用二进制来表示字符集里的字符。")]),t._v(" "),_("p",[_("img",{attrs:{src:a(222),alt:"字符集和字符编码"}})]),t._v(" "),_("p",[t._v("如果某些字符在 Unicode 中并不存在，那么 Unicode 会统一把这些字符记录为 U+FFFD 这个编码，如果使用 UTF-8 的格式存储下来，就是 \\xef\\xbf\\xbd。如果连续两个这样的字符放在一起，\\xef\\xbf\\xbd\\xef\\xbf\\xbd，这时如果用 GB2312 的方式进行 decode，就会变成“锟斤拷”。")]),t._v(" "),_("h2",{attrs:{id:"加法器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#加法器"}},[t._v("#")]),t._v(" 加法器")]),t._v(" "),_("p",[_("img",{attrs:{src:a(223),alt:"门电路符号"}})]),t._v(" "),_("h3",{attrs:{id:"半加器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#半加器"}},[t._v("#")]),t._v(" 半加器")]),t._v(" "),_("p",[_("img",{attrs:{src:a(224),alt:"半加器"}})]),t._v(" "),_("h3",{attrs:{id:"全加器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#全加器"}},[t._v("#")]),t._v(" 全加器")]),t._v(" "),_("p",[_("img",{attrs:{src:a(225),alt:"全加器"}})]),t._v(" "),_("h3",{attrs:{id:"_8-位加法器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-位加法器"}},[t._v("#")]),t._v(" 8 位加法器")]),t._v(" "),_("p",[_("img",{attrs:{src:a(226),alt:"8比特加法器"}})]),t._v(" "),_("h2",{attrs:{id:"乘法器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#乘法器"}},[t._v("#")]),t._v(" 乘法器")]),t._v(" "),_("p",[_("img",{attrs:{src:a(227),alt:"乘法器硬件结构"}})]),t._v(" "),_("p",[t._v("先拿乘数最右侧的个位乘以被乘数，把结果写入用来存放计算结果的开关里面，然后乘数左移一位，乘数右移一位，仍然用乘数去乘以被乘数，把结果加到刚才的结果上。反复重复这一步骤，直到不能再左移和右移位置。这样仅仅需要简单的加法器、一个左移一位的电路和右移一位的电路，就能完成整个乘法。")]),t._v(" "),_("p",[t._v("这种乘法器中的每一组加法都要依赖上一组加法后的结果，整个算法是"),_("strong",[t._v("顺序")]),t._v("的。")]),t._v(" "),_("h4",{attrs:{id:"示例-13x9-（二进制-1101-x-1001）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#示例-13x9-（二进制-1101-x-1001）"}},[t._v("#")]),t._v(" 示例 13x9 （二进制 1101 x 1001）")]),t._v(" "),_("p",[_("img",{attrs:{src:a(228),alt:"乘法器计算示例"}})]),t._v(" "),_("h2",{attrs:{id:"定点数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#定点数"}},[t._v("#")]),t._v(" 定点数")]),t._v(" "),_("p",[t._v("用 4 个比特来表示 0～9 的整数，那么 32 个比特就可以表示 8 个这样的整数。然后我们把最右边的 2 个 0～9 的整数当成小数部分；把左边 6 个 0～9 的整数当成整数部分，这样我们就可以用 32 个比特来表示从0～999999.99 这样 1 亿个实数。")]),t._v(" "),_("p",[t._v("这种用二进制来表示十进制的编码方式叫作"),_("strong",[t._v("BCD编码")]),t._v("，常用在超市、银行这样需要小数记录金额的情况里。")]),t._v(" "),_("p",[_("img",{attrs:{src:a(229),alt:"BCD 编码"}})]),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),_("p",[t._v("定点数的表示方式有几个缺点：")]),t._v(" "),_("ol",[_("li",[t._v("表示方式有点“浪费”")]),t._v(" "),_("li",[t._v("没有办法同时表示很大的数字和很小的数字")])])]),t._v(" "),_("h2",{attrs:{id:"浮点数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浮点数"}},[t._v("#")]),t._v(" 浮点数")]),t._v(" "),_("p",[t._v("计算机使用科学计数法来表示实数，浮点数的科学计数法表示有一个 IEEE 标准，它定义了两个基本的格式，一个是用 32 比特表示单精度的浮点数，另外一个是用 64 比特表示双精度的浮点数。")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("在浮点数里，我们不像整数分符号数和无符号数，所有额浮点数都是有符号的。")])]),t._v(" "),_("p",[_("img",{attrs:{src:a(230),alt:"IEEE float格式"}})]),t._v(" "),_("p",[t._v("浮点数可以表示成这样："),_("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[_("mjx-math",{staticClass:" MJX-TEX"},[_("mjx-mo",{staticClass:"mjx-n"},[_("mjx-c",{attrs:{c:"("}})],1),_("mjx-mo",{staticClass:"mjx-n"},[_("mjx-c",{attrs:{c:"2212"}})],1),_("mjx-mn",{staticClass:"mjx-n"},[_("mjx-c",{attrs:{c:"1"}})],1),_("mjx-msup",[_("mjx-mo",{staticClass:"mjx-n"},[_("mjx-c",{attrs:{c:")"}})],1),_("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[_("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[_("mjx-c",{attrs:{c:"s"}})],1)],1)],1),_("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[_("mjx-c",{attrs:{c:"D7"}})],1),_("mjx-mn",{staticClass:"mjx-n",attrs:{space:"3"}},[_("mjx-c",{attrs:{c:"1"}}),_("mjx-c",{attrs:{c:"."}})],1),_("mjx-mi",{staticClass:"mjx-i"},[_("mjx-c",{attrs:{c:"f"}})],1),_("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[_("mjx-c",{attrs:{c:"D7"}})],1),_("mjx-msup",[_("mjx-mn",{staticClass:"mjx-n"},[_("mjx-c",{attrs:{c:"2"}})],1),_("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[_("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[_("mjx-c",{attrs:{c:"e"}})],1)],1)],1)],1)],1)],1),t._v(" "),_("p",[_("code",[t._v("指数位 e")]),t._v("：8 个比特能够表示的整数空间是 0~255，IEEE 规定使用 "),_("strong",[t._v("1~254")]),t._v(" 映射到 "),_("strong",[t._v("-126~127")]),t._v(" 这 254 个有正有负的数上。因为浮点数不仅要表示很大的数，也要表示很小的数，所以指数位也会有负数。指数位的其他取值见下表：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("e")]),t._v(" "),_("th",[t._v("f")]),t._v(" "),_("th",[t._v("s")]),t._v(" "),_("th",[t._v("浮点数")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0 or 1")]),t._v(" "),_("td",[t._v("0")])]),t._v(" "),_("tr",[_("td",[t._v("0")]),t._v(" "),_("td",[t._v("!=0")]),t._v(" "),_("td",[t._v("0 or 1")]),t._v(" "),_("td",[t._v("0.f")])]),t._v(" "),_("tr",[_("td",[t._v("255")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("无穷大")])]),t._v(" "),_("tr",[_("td",[t._v("255")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("无穷小")])]),t._v(" "),_("tr",[_("td",[t._v("255")]),t._v(" "),_("td",[t._v("!=0")]),t._v(" "),_("td",[t._v("0 or 1")]),t._v(" "),_("td",[t._v("NAN")])])])]),t._v(" "),_("h2",{attrs:{id:"参考资料"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://www.coursera.org/learn/jisuanji-zucheng",target:"_blank",rel:"noopener noreferrer"}},[t._v("coursera 公开课《计算机组成》"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://www.bilibili.com/video/av24540152/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSAPP 深入理解计算机系统"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);