(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{613:function(a,s,t){"use strict";t.r(s);var n=t(29),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"𝙓𝙩𝙚𝙣𝙨𝙖-基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#𝙓𝙩𝙚𝙣𝙨𝙖-基础"}},[a._v("#")]),a._v(" 𝙓𝙩𝙚𝙣𝙨𝙖 基础")]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),t("p",[a._v("Xtensa 的指令集架构类似于 RISC，并对嵌入式应用场合做了多种优化。在移植操作系统时要留意以下几方面：")]),a._v(" "),t("ol",[t("li",[a._v("变长指令")]),a._v(" "),t("li",[a._v("窗口（window）寄存器")]),a._v(" "),t("li",[a._v("处理器的可配置性")]),a._v(" "),t("li",[a._v("处理器的可扩展性（可通过 TIE 描述语言为 Xtensa 添加新的指令）")])])]),a._v(" "),t("h2",{attrs:{id:"xtensa-处理器的硬件抽象层-hal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xtensa-处理器的硬件抽象层-hal"}},[a._v("#")]),a._v(" Xtensa 处理器的硬件抽象层 HAL")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("HAL 向上提了供统一的接口，向下屏蔽了 Xtensa 处理器的不同配置。")])]),a._v(" "),t("h3",{attrs:{id:"编译时-hal（chal）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译时-hal（chal）"}},[a._v("#")]),a._v(" 编译时 HAL（CHAL）")]),a._v(" "),t("p",[a._v("包括 C 预处理器与汇编宏定义（用来表征 Xtensa 处理器的具体配置），确保源码级别的兼容性。")]),a._v(" "),t("h3",{attrs:{id:"链接时-hal（lhal）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#链接时-hal（lhal）"}},[a._v("#")]),a._v(" 链接时 HAL（LHAL）")]),a._v(" "),t("p",[a._v("对于 Xtensa 处理器的不同配置均适用，底层软件（如操作系统移植层）可以通过调用该层接口来处理 ISA 相关的操作（如保存现场 window frame ）。")]),a._v(" "),t("h2",{attrs:{id:"编写汇编代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写汇编代码"}},[a._v("#")]),a._v(" 编写汇编代码")]),a._v(" "),t("p",[a._v("示例 C 程序：计算斐波那契数列")]),a._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("unsigned")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("fib")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("unsigned")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" cur"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" cur1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" newval"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("val "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("val "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    val "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" val "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    cur "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" cur1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        newval "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" cur "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" cur1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        cur1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" cur"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        cur "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" newval"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        val"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" cur"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br")])]),t("p",[a._v("将该代码汇编后得到如下汇编程序：")]),a._v(" "),t("div",{staticClass:"language-asm line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    .text\t\t\t\t\t# 将以下代码编译进 .text 段\n    .align  1\t\t\t\t# 将下面的对象字节按照单字节对齐的方式存放\n    .literal_position\n    .type   fib, @function\t# 指定 fib 对象是一个函数，调试器根据此信息方可正确展示该对象\n    .align   4\t\t\t\t# 将下面的对象字节按 4 字节对齐的方式存放，只有这样，fib 才是可调用的\n    .global fib\t\t\t\t# 使 fib 符号能够被外部访问\nfib:\t\t\t\t\t\t# 声明 fib 符号\n    .frame  a1, 32\t\t\t# 让 a1 寄存器保存 stack frame 的指针，并设置 stack frame 的大小为 32 字节\n.LBB1_fib:\n    entry   a1,32\t\t\t# 所有函数都会以 entry 指令开头，\n    bnez    a2,.Lt_0_2\t\t# 函数的实参被传给了 a2 寄存器，若 a2 寄存器的值不为零则跳转\n    movi.n  a2,0\t\t\t# 返回值保存在 a2 寄存器中（返回值为 0）\n    retw.n\t\t\t\t\t# 函数返回\n\n.Lt_0_2:\n    bgeui   a2,3,.Lt_0_4\n\n    movi.n  a2,1\n    retw.n\n\n.Lt_0_4:\n    movi.n  a4,1\n    movi.n  a5,1\n    addi    a2,a2,-2\n\n.Lt_0_7:\n    add.n   a6,a5,a4\n    addi.n  a2,a2,-1\n    mov.n   a4,a5\n    mov.n   a5,a6\n    bnez    a2,.Lt_0_7\n\n    mov.n   a2,a6\n    retw.n\n\n    .size   fib, . - fib\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br"),t("span",{staticClass:"line-number"},[a._v("28")]),t("br"),t("span",{staticClass:"line-number"},[a._v("29")]),t("br"),t("span",{staticClass:"line-number"},[a._v("30")]),t("br"),t("span",{staticClass:"line-number"},[a._v("31")]),t("br"),t("span",{staticClass:"line-number"},[a._v("32")]),t("br"),t("span",{staticClass:"line-number"},[a._v("33")]),t("br"),t("span",{staticClass:"line-number"},[a._v("34")]),t("br"),t("span",{staticClass:"line-number"},[a._v("35")]),t("br"),t("span",{staticClass:"line-number"},[a._v("36")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("Xtensa 中的某些指令可以通过加后缀 .n 可以让编译器尽量使用 16 比特的指令，以冀获取更高的代码密度。")])]),a._v(" "),t("h2",{attrs:{id:"窗寄存器函数调用规范-windowed-calling-convention"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#窗寄存器函数调用规范-windowed-calling-convention"}},[a._v("#")]),a._v(" 窗寄存器函数调用规范 (Windowed Calling Convention)")]),a._v(" "),t("p",[a._v("现代处理器为了更好的支持高级编程语言的高效编译，通常处理器所拥有的通用寄存器的数目有16个甚至32个之多，如此多的寄存器在比较复杂的应用程序上实现深度嵌套调用的时候，为了保证程序的正确执行，寄存器要频繁地进行入栈和出栈的操作，这样频繁的堆栈memory的访问将明显恶化应用程序的性能。为了有效解决这一问题，Xtensa架构设计了一种"),t("code",[a._v("Windows旋转")]),a._v("方式的"),t("code",[a._v("寄存器管理")]),a._v("机制，"),t("strong",[a._v("将逻辑寄存器和物理寄存器分开")]),a._v("，在函数调用的时候通过windows滑动切换逻辑寄存器，从而避免寄存器覆盖，减少压栈和出栈的操作。")]),a._v(" "),t("h3",{attrs:{id:"ar物理寄存器环形buffer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ar物理寄存器环形buffer"}},[a._v("#")]),a._v(" AR物理寄存器环形Buffer")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://s2.ax1x.com/2019/01/07/Fbr9IO.png",alt:"AR物理寄存器环形buffer"}})]),a._v(" "),t("p",[a._v("基本实现原理：使用更多的物理AR寄存器组成一个环形的buffer。这些寄存器每4个为一组（pane），WindowStart中的每个比特依次表示该组是否作为逻辑寄存器窗口的起始位置或者被占用。当前的逻辑寄存器的起始位置则用WindowBase状态寄存器来表示。"),t("strong",[a._v("在发生函数调用的时候是通过修改WindowBase寄存器，滑动逻辑寄存器窗口")]),a._v("，从而父子函数看到的是不同的物理寄存器，避免了寄存器的压栈和出栈。")]),a._v(" "),t("p",[a._v("以每4个寄存器（pane）为单位，函数调用的时候窗口可以滑动4个，8个或者12个物理寄存器，分别可以用call4,call8,call12指令来实现，而最典型的应用则为call8。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://s2.ax1x.com/2019/01/07/Fb2cmd.png",alt:"call8 Windows ABI调用规范"}})]),a._v(" "),t("ul",[t("li",[a._v("a0用来保存函数返回地址")]),a._v(" "),t("li",[a._v("a1保存sp堆栈指针")]),a._v(" "),t("li",[a._v("a2～a7用来传递函数入参，参数超过6个的时候则需要使用堆栈")]),a._v(" "),t("li",[t("strong",[a._v("对调用者函数和被调用函数来说，a0~a7是独立的寄存器，可以自由使用，而a8~a15则为scratch寄存器，随时会被子函数使用，调用者函数如果要使用，则在调用子函数前进行压栈保存")])])]),a._v(" "),t("p",[a._v("为了方便寄存器正常的保存与恢复，还要调用栈的高效回溯，还有必要对函数的Frame栈空间做统一的安排。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://s2.ax1x.com/2019/01/07/FbOOEV.png",alt:"Window ABI 堆栈布局"}})]),a._v(" "),t("ul",[t("li",[a._v("Base Area用于存储其父函数的基本寄存器"),t("code",[a._v("a0")]),a._v("~"),t("code",[a._v("a3")])])]),a._v(" "),t("h3",{attrs:{id:"windows寄存器覆盖问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows寄存器覆盖问题"}},[a._v("#")]),a._v(" Windows寄存器覆盖问题")]),a._v(" "),t("p",[a._v("在发生函数调用，执行call指令的时候，窗递增值（call4，call8，call12分别对应1,2,3）存入PS处理器状态寄存器的"),t("code",[a._v("CALLINC")]),a._v("域，在进入函数的入口处用"),t("code",[a._v("entry")]),a._v("指令进行Window重叠检测，条件满足的时候将触发相应的windows overflow异常，引导程序进行覆盖寄存器的入栈保护。")]),a._v(" "),t("h3",{attrs:{id:"windows寄存器underflow问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows寄存器underflow问题"}},[a._v("#")]),a._v(" Windows寄存器underflow问题")]),a._v(" "),t("p",[a._v("当子函数返回时，RETW或者RETW.N指令执行，此时也仅此时处理器将进行上溢检查。如果当Windowbase所在的位置的前3个windows pane的WindowStart比特都为0，则意味着它返回后的父函数发生过WindowOverflow，父函数的窗口寄存器曾经被压入stack。如果不是全为0，则应该不为零0的点和正常window返回的点对应，就返回，如果不同，则说明发生了不正常的调用，a0被破坏掉了，要产生非法指令错误。")]),a._v(" "),t("h2",{attrs:{id:"参数传递"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数传递"}},[a._v("#")]),a._v(" 参数传递")]),a._v(" "),t("p",[t("code",[a._v("前6个参数会传递给 AR 寄存器，剩余的参数会被保存在stack中。")])]),a._v(" "),t("p",[a._v("对于"),t("code",[a._v("callN")]),a._v("指令（N取值4,8或者12）来说，函数调用者会将参数保存到寄存器AR[N+2]到AR[N+7]中（特别注意，"),t("code",[a._v("call12")]),a._v("指令是能用于调用只有两个或者更少参数的函数，只能使用AR[N+2]和AR[N+3]寄存器），函数被调用者会从寄存器AR[2]到AR[7]中接收这些参数。")]),a._v(" "),t("p",[a._v("如果参数的数量多于6个，剩下的参数就会被保存在函数调用者的堆栈，即第七个参数保存在[sp+0]处，第八个参数保存在[sp+4]处，依此类推。函数被调用者需要从内存的[sp+FRAMESIZE]处获取这些额外的参数，其中"),t("code",[a._v("FRAMESIZE")]),a._v("是被调用者的"),t("code",[a._v("stack frame")]),a._v("大小，通常会用"),t("code",[a._v("entry")]),a._v("指令指定。")]),a._v(" "),t("p",[a._v("以下C程序代码")]),a._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("func")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\t\t  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" g"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" h"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" i "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" j"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\tj "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" c "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" d "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" e "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" f "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" g "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" h "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" j"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("p",[a._v("对应的汇编程序代码为")]),a._v(" "),t("div",{staticClass:"language-assembly line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(".align 4\n\t.global func\nfunc:\n\t.frame a1, 32\n.LBB1_func:\n\tentry a1,32 // 此函数的 FRAMESIZE 是32字节\n\tl32i.n a10,a1,40\n.LBB2_func:\n\tl32i.n a8,a1,32\n\tadd.n a12,a5,a6\n\tadd.n a11,a2,a3\n\tl32i.n a2,a1,36\n\tadd.n a11,a4,a11\n\tadd.n a11,a11,a12\n\tadd.n a8,a8,a7\n\tadd.n a2,a2,a10\n\tadd.n a8,a8,a11\n\tadd.n a2,a2,a8\t//返回值如果不超过4字节，就会被保存在 a2 寄存器中\n\tretw.n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br")])]),t("h2",{attrs:{id:"函数调用与返回"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数调用与返回"}},[a._v("#")]),a._v(" 函数调用与返回")]),a._v(" "),t("p",[a._v("每个C语言函数的调用都会通过以下的指令来实现："),t("code",[a._v("call4")]),a._v("，"),t("code",[a._v("call8")]),a._v("，"),t("code",[a._v("call12")]),a._v("，"),t("code",[a._v("callx4")]),a._v("，"),t("code",[a._v("callx8")]),a._v("，"),t("code",[a._v("callx12")]),a._v("。为了给函数传递控制信息，这些指令会在"),t("code",[a._v("PS.CALLINC")]),a._v("中设置"),t("code",[a._v("Window Increment")]),a._v("（即逻辑窗旋转的量），同时也会将被调用者的"),t("code",[a._v("a0")]),a._v("寄存器（可能是调用者的a4，a8或者a12寄存器）设置返回地址（该寄存器的高两位会用来保存逻辑窗增量）。"),t("code",[a._v("return")]),a._v("指令会将逻辑窗重新旋转回原来的位置（通过读取返回地址的高两位来确定旋转量）。相反地，"),t("code",[a._v("entry")]),a._v("指令只能通过"),t("code",[a._v("PS.CALLINC")]),a._v("的值来旋转逻辑窗（因为它不知道究竟是哪一个寄存器会用来保存返回地址）。")]),a._v(" "),t("p",[a._v("每个函数都要分配一个堆栈帧（stack frame），其大小由两方面决定：")]),a._v(" "),t("ol",[t("li",[a._v("该函数用到的本地变量（如果有用到，就需要计算进去）")]),a._v(" "),t("li",[a._v("窗口保存区（window save area）")])]),a._v(" "),t("p",[a._v("每个函数必须要分配16字节给基本保存区（base save area)，如果一个函数还使用了"),t("code",[a._v("call8")]),a._v("或者"),t("code",[a._v("call12")]),a._v("指令，那就需要在堆栈帧中给附加保存区（extra save area)分配空间。如果是"),t("code",[a._v("call8")]),a._v("指令，需要额外分配16字节（总共32字节）；如果是"),t("code",[a._v("call12")]),a._v("指令，需要额外分配32字节（总共48字节）。如下表所示")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("函数中执行的操作")]),a._v(" "),t("th",[a._v("额外需要的堆栈帧空间（单位：字节）")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("No Calls")]),a._v(" "),t("td",[a._v("16")])]),a._v(" "),t("tr",[t("td",[a._v("call4")]),a._v(" "),t("td",[a._v("16")])]),a._v(" "),t("tr",[t("td",[a._v("call8,call4")]),a._v(" "),t("td",[a._v("32")])]),a._v(" "),t("tr",[t("td",[a._v("call12,call8,call4")]),a._v(" "),t("td",[a._v("48")])])])]),a._v(" "),t("h4",{attrs:{id:"entry指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entry指令"}},[a._v("#")]),a._v(" entry指令")]),a._v(" "),t("p",[a._v("主要做两件事情：")]),a._v(" "),t("ol",[t("li",[a._v("它根据调用者的堆栈指针计算被调用者的堆栈指针，并使用该命令后跟的立即数作为堆栈帧的大小。")]),a._v(" "),t("li",[a._v("根据"),t("code",[a._v("PS.CALLINC")]),a._v("的值旋转逻辑窗")])]),a._v(" "),t("h2",{attrs:{id:"xtensa汇编代码简单示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xtensa汇编代码简单示例"}},[a._v("#")]),a._v(" Xtensa汇编代码简单示例")]),a._v(" "),t("p",[a._v("部分底层驱动只能使用汇编语言编写，比如：")]),a._v(" "),t("ul",[t("li",[a._v("用户异常处理")]),a._v(" "),t("li",[a._v("内核异常处理")]),a._v(" "),t("li",[a._v("window处理")]),a._v(" "),t("li",[a._v("复位处理")])]),a._v(" "),t("h3",{attrs:{id:"使用汇编实现16比特点积运算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用汇编实现16比特点积运算"}},[a._v("#")]),a._v(" 使用汇编实现16比特点积运算")]),a._v(" "),t("div",{staticClass:"language-assembly line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('#include "dsls_dotprod_16s_m_ae32.S"\n#include "dsl_err_codes.h"\n\n\t.text //保存在代码段\n\t.align  4 // 与PC有关的跳转指令需要目标地址4字节对齐\n\t.global dsls_dotprod_16s_ae32 // 声明该函数全局可访问\n\t.type   dsls_dotprod_16s_ae32,@function // 声明符号是函数类型（方便调试器更好地展示信息）\n\n\n// 良好的习惯是在汇编函数开始前，注释其C语言原型\n// esp_err_t dsls_dotprod_16s_ae32(int16_t* src1, int16_t* src2, int16_t* dest, int len, int8_t shift);\ndsls_dotprod_16s_ae32: \n// src1 - a2\n// src2 - a3\n// dest - a4\n// len  - a5\n// shift - a6\n\n\tentry\ta1, 16\n\n\t// Check minimum length\n\tmovi a8, 4\n\tblt a5, a8, dsls_dotprod_16s_ae32_error\n\t\n\t// Clear accumulator\n\tmovi a8, 0\n\twsr a8, acchi\n\t\t\n\t// Prepare and load round value\n\tmovi a8, 0x7fff\n\tssr a6\n\tsrl a8, a8\n\twsr a8, acclo // initialize acc with shifted round value\n\n\t// Compensate for pre-increment \n\t// Right shift to 16 bits\n\t// RS = -shift + 15\n\tneg  a6, a6 \n\taddi a6, a6, 15\n\t\n\t/* number of loop iterations (see below):\n\t * a7 = count / 4 - 1\n\t */\n\t\n\tsrli a7, a5, 2\n\taddi a7, a7, -1\n\n\tmovi.n\ta10, 0 // load 0 to the a10 to increment second array\n\n\tdotprod_16s_ae32_full a2, a3, a7, a5\n\n\t/* Get accumulator */\n\tssr a6\n\trsr a2, acchi\n\trsr a3, acclo\n\tsrc a2, a2, a3\n\t\t\n\ts16i\ta2, a4, 0\n\tmovi.n\ta2, 0\t//返回值保存在 a2 寄存器中\n\tretw.n\ndsls_dotprod_16s_ae32_error:\n\tmovi.n\ta2, ESP_ERR_DSL_INVALID_LENGTH\n\tretw.n\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br"),t("span",{staticClass:"line-number"},[a._v("28")]),t("br"),t("span",{staticClass:"line-number"},[a._v("29")]),t("br"),t("span",{staticClass:"line-number"},[a._v("30")]),t("br"),t("span",{staticClass:"line-number"},[a._v("31")]),t("br"),t("span",{staticClass:"line-number"},[a._v("32")]),t("br"),t("span",{staticClass:"line-number"},[a._v("33")]),t("br"),t("span",{staticClass:"line-number"},[a._v("34")]),t("br"),t("span",{staticClass:"line-number"},[a._v("35")]),t("br"),t("span",{staticClass:"line-number"},[a._v("36")]),t("br"),t("span",{staticClass:"line-number"},[a._v("37")]),t("br"),t("span",{staticClass:"line-number"},[a._v("38")]),t("br"),t("span",{staticClass:"line-number"},[a._v("39")]),t("br"),t("span",{staticClass:"line-number"},[a._v("40")]),t("br"),t("span",{staticClass:"line-number"},[a._v("41")]),t("br"),t("span",{staticClass:"line-number"},[a._v("42")]),t("br"),t("span",{staticClass:"line-number"},[a._v("43")]),t("br"),t("span",{staticClass:"line-number"},[a._v("44")]),t("br"),t("span",{staticClass:"line-number"},[a._v("45")]),t("br"),t("span",{staticClass:"line-number"},[a._v("46")]),t("br"),t("span",{staticClass:"line-number"},[a._v("47")]),t("br"),t("span",{staticClass:"line-number"},[a._v("48")]),t("br"),t("span",{staticClass:"line-number"},[a._v("49")]),t("br"),t("span",{staticClass:"line-number"},[a._v("50")]),t("br"),t("span",{staticClass:"line-number"},[a._v("51")]),t("br"),t("span",{staticClass:"line-number"},[a._v("52")]),t("br"),t("span",{staticClass:"line-number"},[a._v("53")]),t("br"),t("span",{staticClass:"line-number"},[a._v("54")]),t("br"),t("span",{staticClass:"line-number"},[a._v("55")]),t("br"),t("span",{staticClass:"line-number"},[a._v("56")]),t("br"),t("span",{staticClass:"line-number"},[a._v("57")]),t("br"),t("span",{staticClass:"line-number"},[a._v("58")]),t("br"),t("span",{staticClass:"line-number"},[a._v("59")]),t("br"),t("span",{staticClass:"line-number"},[a._v("60")]),t("br"),t("span",{staticClass:"line-number"},[a._v("61")]),t("br"),t("span",{staticClass:"line-number"},[a._v("62")]),t("br"),t("span",{staticClass:"line-number"},[a._v("63")]),t("br")])]),t("ul",[t("li",[a._v("有些指令会以"),t("code",[a._v(".n")]),a._v("作为后缀，Xtensa处理器为了进一步提高代码密度，提供了一些常用指令的16比特版本，这里的"),t("code",[a._v("n")]),a._v("代表narrow")])]),a._v(" "),t("h4",{attrs:{id:"指定段名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指定段名"}},[a._v("#")]),a._v(" 指定段名")]),a._v(" "),t("div",{staticClass:"language-assembly line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('/*\n  KernelExceptionVector\n  This implements the kernel exception vector and transfers control to the KernelExceptionHandler.\n*/\n\t.section .KernelExceptionVector.text, "ax"\n\t.begin literal_prefix .KernelExceptionVector\n_KernelExceptionVector:\n\twsr.excsave1 a3\n\tmovi a3, _KernelExceptionHandler\n\tjx a3\n\t.end literal_prefix\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br")])]),t("ul",[t("li",[t("code",[a._v(".section")]),a._v("指令后需要跟上段名和附加信息（用于描述该段的属性），"),t("code",[a._v("x")]),a._v("表示可执行，"),t("code",[a._v("a")]),a._v("表示可分配")]),a._v(" "),t("li",[a._v("在"),t("code",[a._v(".begin literal_prefix")]),a._v("和"),t("code",[a._v(".end literal_prefix")]),a._v("之间的所有字面量会被放在特殊的段中（不是默认的.literal），这个段的前缀名由用户指定")])]),a._v(" "),t("h2",{attrs:{id:"编写高效的汇编代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写高效的汇编代码"}},[a._v("#")]),a._v(" 编写高效的汇编代码")]),a._v(" "),t("h3",{attrs:{id:"分支预测"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分支预测"}},[a._v("#")]),a._v(" 分支预测")]),a._v(" "),t("p",[a._v("经验法则："),t("strong",[a._v("进入分支比不进入分支的开销更大")])]),a._v(" "),t("h3",{attrs:{id:"手动调度指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手动调度指令"}},[a._v("#")]),a._v(" 手动调度指令")]),a._v(" "),t("p",[a._v("经验法则："),t("strong",[a._v("预测流水线气泡，将其替换成有用的工作")])]),a._v(" "),t("h3",{attrs:{id:"防止逻辑窗口溢出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#防止逻辑窗口溢出"}},[a._v("#")]),a._v(" 防止逻辑窗口溢出")]),a._v(" "),t("p",[a._v("经验法则："),t("strong",[a._v("优先使用最低编号的寄存器")])]),a._v(" "),t("p",[a._v("当逻辑窗口在物理寄存器文件中旋转时，有可能会发生窗口溢出，此时需要对其余函数的上下文进行保存，会带来额外的开销。所以如果函数仅仅使用两个寄存器，那就选择"),t("code",[a._v("a2")]),a._v("和"),t("code",[a._v("a3")]),a._v("，使用"),t("code",[a._v("a4")]),a._v("~"),t("code",[a._v("a15")]),a._v("中的任何一个都可能会造成窗口溢出。如果函数需要使用3个寄存器，选择"),t("code",[a._v("a2")]),a._v("，"),t("code",[a._v("a3")]),a._v("外加"),t("code",[a._v("a4")]),a._v("-"),t("code",[a._v("a7")]),a._v("中的任何一个，这四个寄存器是在同一片寄存器玻璃(window pane)上，所以他们触发窗口溢出的概率是一样的。")]),a._v(" "),t("h3",{attrs:{id:"获取程序计数器-pc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取程序计数器-pc"}},[a._v("#")]),a._v(" 获取程序计数器(PC)")]),a._v(" "),t("p",[a._v("Xtensa架构没有提供读取PC值的指令，推荐使用如下代码来读取PC值：")]),a._v(" "),t("div",{staticClass:"language-assembly line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("movi a2, 1f\n1:\n// a2 contains the value of label 1\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h3",{attrs:{id:"尽量使用coreasm-h中的宏定义来屏蔽不同处理器的差异"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#尽量使用coreasm-h中的宏定义来屏蔽不同处理器的差异"}},[a._v("#")]),a._v(" 尽量使用"),t("code",[a._v("coreasm.h")]),a._v("中的宏定义来屏蔽不同处理器的差异")]),a._v(" "),t("p",[a._v("常用的功能有：")]),a._v(" "),t("ol",[t("li",[a._v("查找寄存器中被设置的最高或者最低的有效位")]),a._v(" "),t("li",[a._v("循环构造器")]),a._v(" "),t("li",[a._v("有条件地读取和设置中断级别")]),a._v(" "),t("li",[a._v("窗口溢出功能")])]),a._v(" "),t("h2",{attrs:{id:"xtensa的异常架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xtensa的异常架构"}},[a._v("#")]),a._v(" Xtensa的异常架构")]),a._v(" "),t("h4",{attrs:{id:"程序状态（ps）寄存器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#程序状态（ps）寄存器"}},[a._v("#")]),a._v(" 程序状态（PS）寄存器")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://s2.ax1x.com/2019/01/09/FLb6Bt.png",alt:"FLb6Bt.png"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);