(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{579:function(t,s,a){"use strict";a.r(s);var n=a(33),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"位运算技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#位运算技巧"}},[t._v("#")]),t._v(" 位运算技巧")]),t._v(" "),a("h2",{attrs:{id:"基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[t._v("#")]),t._v(" 基础")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("符号")]),t._v(" "),a("th",[t._v("含义")]),t._v(" "),a("th",[t._v("规则")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("&")]),t._v(" "),a("td",[t._v("与")]),t._v(" "),a("td",[t._v("两个位都为 1 时，结果为 1，否则为 0")])]),t._v(" "),a("tr",[a("td",[t._v("|")]),t._v(" "),a("td",[t._v("或")]),t._v(" "),a("td",[t._v("有一个位为 1 时，结果为 1，否则为 0")])]),t._v(" "),a("tr",[a("td",[t._v("^")]),t._v(" "),a("td",[t._v("异或")]),t._v(" "),a("td",[t._v("与 0 异或值不变，与 1 异或值取反")])]),t._v(" "),a("tr",[a("td",[t._v("~")]),t._v(" "),a("td",[t._v("取反")]),t._v(" "),a("td",[t._v("0 变 1, 1 变 0")])]),t._v(" "),a("tr",[a("td",[t._v("<<")]),t._v(" "),a("td",[t._v("左移")]),t._v(" "),a("td",[t._v("所有位左移若干位，高位丢弃，低位补 0")])]),t._v(" "),a("tr",[a("td",[t._v(">>")]),t._v(" "),a("td",[t._v("算术右移")]),t._v(" "),a("td",[t._v("所有位右移若干位，高位补最高有效位的值")])]),t._v(" "),a("tr",[a("td",[t._v(">>")]),t._v(" "),a("td",[t._v("逻辑右移")]),t._v(" "),a("td",[t._v("所有位右移若干位，高位补 0")])])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("ol",[a("li",[t._v("位运算只支持整数，不支持 float 和 double")]),t._v(" "),a("li",[t._v("逻辑右移的符号各种语言不太相同")]),t._v(" "),a("li",[t._v("位运算的优先级比较低，建议使用括号来确保运算顺序")])])]),t._v(" "),a("h2",{attrs:{id:"应用实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用实例"}},[t._v("#")]),t._v(" 应用实例")]),t._v(" "),a("h3",{attrs:{id:"混合体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#混合体"}},[t._v("#")]),t._v(" 混合体")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("位运算")]),t._v(" "),a("th",[t._v("功能")]),t._v(" "),a("th",[t._v("示例")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("x >> 1")]),t._v(" "),a("td",[t._v("去掉最后一位")]),t._v(" "),a("td",[t._v("101101->10110")])]),t._v(" "),a("tr",[a("td",[t._v("x << 1")]),t._v(" "),a("td",[t._v("在最后加一个0")]),t._v(" "),a("td",[t._v("101101->1011010")])]),t._v(" "),a("tr",[a("td",[t._v("x << 1 | 1")]),t._v(" "),a("td",[t._v("在最后加一个1")]),t._v(" "),a("td",[t._v("101101->1011011")])]),t._v(" "),a("tr",[a("td",[t._v("x | 1")]),t._v(" "),a("td",[t._v("把最后一位变成1")]),t._v(" "),a("td",[t._v("101100->101101")])]),t._v(" "),a("tr",[a("td",[t._v("x & -2")]),t._v(" "),a("td",[t._v("把最后一位变成0")]),t._v(" "),a("td",[t._v("101101->101100")])]),t._v(" "),a("tr",[a("td",[t._v("x | (1 << (k-1))")]),t._v(" "),a("td",[t._v("把右数第k位变成1")]),t._v(" "),a("td",[t._v("101001->101101,k=3")])]),t._v(" "),a("tr",[a("td",[t._v("x & ~ (1 << (k-1))")]),t._v(" "),a("td",[t._v("把右数第k位变成0")]),t._v(" "),a("td",[t._v("101101->101001,k=3")])]),t._v(" "),a("tr",[a("td",[t._v("x ^(1 <<(k-1))")]),t._v(" "),a("td",[t._v("右数第k位取反")]),t._v(" "),a("td",[t._v("101001->101101,k=3")])]),t._v(" "),a("tr",[a("td",[t._v("x & 7")]),t._v(" "),a("td",[t._v("取末三位")]),t._v(" "),a("td",[t._v("1101101->101")])]),t._v(" "),a("tr",[a("td",[t._v("x & (1 << k-1)")]),t._v(" "),a("td",[t._v("取末k位")]),t._v(" "),a("td",[t._v("1101101->1101,k=5")])]),t._v(" "),a("tr",[a("td",[t._v("x >> (k-1) & 1")]),t._v(" "),a("td",[t._v("取右数第k位")]),t._v(" "),a("td",[t._v("1101101->1,k=4")])]),t._v(" "),a("tr",[a("td",[t._v("x | ((1 << k)-1)")]),t._v(" "),a("td",[t._v("把末k位变成1")]),t._v(" "),a("td",[t._v("101001->101111,k=4")])]),t._v(" "),a("tr",[a("td",[t._v("x ^ (1 << k-1)")]),t._v(" "),a("td",[t._v("末k位取反")]),t._v(" "),a("td",[t._v("101001->100110,k=4")])]),t._v(" "),a("tr",[a("td",[t._v("x & (x+1)")]),t._v(" "),a("td",[t._v("把右边连续的1变成0")]),t._v(" "),a("td",[t._v("100101111->100100000")])]),t._v(" "),a("tr",[a("td",[t._v("x | (x+1)")]),t._v(" "),a("td",[t._v("把右起第一个0变成1")]),t._v(" "),a("td",[t._v("100101111->100111111")])]),t._v(" "),a("tr",[a("td",[t._v("x | (x-1)")]),t._v(" "),a("td",[t._v("把右边连续的0变成1")]),t._v(" "),a("td",[t._v("11011000->11011111")])]),t._v(" "),a("tr",[a("td",[t._v("(x ^ (x+1)) >> 1")]),t._v(" "),a("td",[t._v("取右边连续的1")]),t._v(" "),a("td",[t._v("100101111->1111")])]),t._v(" "),a("tr",[a("td",[t._v("x & -x")]),t._v(" "),a("td",[t._v("去掉右起第一个1的左边")]),t._v(" "),a("td",[t._v("100101000->1000")])]),t._v(" "),a("tr",[a("td",[t._v("x&0x7F")]),t._v(" "),a("td",[t._v("取末7位")]),t._v(" "),a("td",[t._v("100101000->101000")])]),t._v(" "),a("tr",[a("td",[t._v("x& ~0x7F")]),t._v(" "),a("td",[t._v("是否小于127")]),t._v(" "),a("td",[t._v("001111111 & ~0x7F->0")])]),t._v(" "),a("tr",[a("td",[t._v("x & 1")]),t._v(" "),a("td",[t._v("判断奇偶")]),t._v(" "),a("td",[t._v("00000111&1->1")])])])]),t._v(" "),a("h3",{attrs:{id:"数据交换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据交换"}},[t._v("#")]),t._v(" 数据交换")]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("swap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^=")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^=")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^=")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h3",{attrs:{id:"绝对值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绝对值"}},[t._v("#")]),t._v(" 绝对值")]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"查找-32-位整数前导-0-的个数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查找-32-位整数前导-0-的个数"}},[t._v("#")]),t._v(" 查找 32 位整数前导 0 的个数")]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nlz")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h3",{attrs:{id:"二进制逆序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二进制逆序"}},[t._v("#")]),t._v(" 二进制逆序")]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverse_order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xAAAAAAAA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x55555555")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xCCCCCCCC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x33333333")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xF0F0F0F0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x0F0F0F0F")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xFF00FF00")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00FF00FF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xFFFF0000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x0000FFFF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h3",{attrs:{id:"二进制中-1-的个数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二进制中-1-的个数"}},[t._v("#")]),t._v(" 二进制中 1 的个数")]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("BitCount_e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解释下下面这句话代码，这句话求得两两相加的结果，例如 11 01 00 10")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 11 01 00 10 = 01 01 00 00 + 10 00 00 10，即由奇数位和偶数位相加而成")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 记 value = 11 01 00 10，high_v = 01 01 00 00， low_v = 10 00 00 10")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 则 value = high_v + low_v，high_v 右移一位得 high_v_1，")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 即 high_v_1 = high_v >> 1 = high_v / 2")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时 value 可以表示为 value = high_v_1 + high_v_1 + low_v，")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可见 我们需要 high_v + low_v 的和即等于 value - high_v_1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 写简单点就是 value = value & 0x55555555 + (value >> 1) & 0x55555555;")]),t._v("\n    value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x55555555")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 之后的就好理解了")]),t._v("\n    value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x33333333")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x33333333")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x0f0f0f0f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x0f0f0f0f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00ff00ff")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00ff00ff")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x0000ffff")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x0000ffff")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 另一种写法，原理一样，原因在最后一种解法中有提到")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//value = (value & 0x55555555) + (value >> 1) & 0x55555555;")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//value = (value & 0x33333333) + ((value >> 2) & 0x33333333);")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//value = (value & 0x0f0f0f0f) + ((value >> 4) & 0x0f0f0f0f);")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//value = value + (value >> 8);")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//value = value + (value >> 16);")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//return (value & 0x0000003f);")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);