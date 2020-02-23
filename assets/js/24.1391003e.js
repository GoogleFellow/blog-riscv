(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{347:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"防火墙-𝙞𝙥𝙩𝙖𝙗𝙡𝙚𝙨-基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防火墙-𝙞𝙥𝙩𝙖𝙗𝙡𝙚𝙨-基础"}},[s._v("#")]),s._v(" 防火墙 𝙞𝙥𝙩𝙖𝙗𝙡𝙚𝙨 基础")]),s._v(" "),a("p",[a("code",[s._v("iptables")]),s._v(" 是一种"),a("strong",[s._v("包过滤防火墙")]),s._v("，用来对 IP，ICMP，TCP，UDP，端口号进行控制。")]),s._v(" "),a("p",[a("code",[s._v("iptables")]),s._v(" 是应用程序的接口，具体的数据包过滤需要配合内核提供的 "),a("code",[s._v("netfilter")]),s._v(" 模块。")]),s._v(" "),a("h2",{attrs:{id:"iptables-的表和链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iptables-的表和链"}},[s._v("#")]),s._v(" iptables 的表和链")]),s._v(" "),a("h3",{attrs:{id:"规则表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规则表"}},[s._v("#")]),s._v(" 规则表")]),s._v(" "),a("p",[a("code",[s._v("filter")]),s._v(" 表，"),a("code",[s._v("nat")]),s._v(" 表，"),a("code",[s._v("mangle")]),s._v(" 表，"),a("code",[s._v("raw")]),s._v(" 表")]),s._v(" "),a("h3",{attrs:{id:"规则链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规则链"}},[s._v("#")]),s._v(" 规则链")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("INPUT")]),s._v(" "),a("code",[s._v("OUTPUT")]),s._v(" "),a("code",[s._v("FORWARD")])]),s._v(" "),a("li",[a("code",[s._v("PREROUTING")]),s._v(" "),a("code",[s._v("POSTROUTING")])])]),s._v(" "),a("h2",{attrs:{id:"iptables-过滤规则的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iptables-过滤规则的使用"}},[s._v("#")]),s._v(" iptables 过滤规则的使用")]),s._v(" "),a("h3",{attrs:{id:"基本命令结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本命令结构"}},[s._v("#")]),s._v(" 基本命令结构")]),s._v(" "),a("ul",[a("li",[s._v("iptables -t filter 命令 规则链 规则")])]),s._v(" "),a("h3",{attrs:{id:"查看-filter-表中的已有规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看-filter-表中的已有规则"}},[s._v("#")]),s._v(" 查看 filter 表中的已有规则")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("➤ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" iptables -t filter -vnL                                                 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":04:32\nChain INPUT "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("policy ACCEPT "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1941")]),s._v(" packets, 11M bytes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n pkts bytes target     prot opt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("     out     "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v("               destination      \n\nChain FORWARD "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("policy ACCEPT "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" packets, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" bytes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n pkts bytes target     prot opt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("     out     "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v("               destination      \n\nChain OUTPUT "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("policy ACCEPT "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1728")]),s._v(" packets, 178K bytes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n pkts bytes target     prot opt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("     out     "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v("               destination\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"添加规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加规则"}},[s._v("#")]),s._v(" 添加规则")]),s._v(" "),a("ul",[a("li",[s._v("-I 插入到规则链的最前面")]),s._v(" "),a("li",[s._v("-A 插入到规则链的最后面")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 向 filter 表的 INPUT 规则链中添加新的规则，允许源 ip 为 10.0.0.1 的数据包进入")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" iptables -t filter -A INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.1 -j ACCEPT\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 向 filter 表的 INPUT 规则链中添加新的规则，阻止源 IP 网段为 10.0.0.0/24 的数据包进入")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" iptables -t filter -A INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.0/24 -j DROP\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许 10.0.0.2 的主机从本机的 eth0 接口访问 80 端口")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" iptables -t filter -A INPUT -i eth0 -s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.2 -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" -j ACCEPT\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"修改默认规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改默认规则"}},[s._v("#")]),s._v(" 修改默认规则")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 filter 表的 INPUT 规则链的默认规则修改为 DROP")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" iptables -t filter -P INPUT DROP\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"清除规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清除规则"}},[s._v("#")]),s._v(" 清除规则")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" iptables -t filter -F\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"删除指定的规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除指定的规则"}},[s._v("#")]),s._v(" 删除指定的规则")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除 filter 表的 INPUT 规则链中的第 5 条规则")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" iptables -t filter -D "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"自定义规则链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义规则链"}},[s._v("#")]),s._v(" 自定义规则链")]),s._v(" "),a("ul",[a("li",[s._v("-N 新建自定义规则链")]),s._v(" "),a("li",[s._v("-X 删除自定义规则链")]),s._v(" "),a("li",[s._v("-E 重命名自定义规则链")])]),s._v(" "),a("h2",{attrs:{id:"iptables-nat-表的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iptables-nat-表的使用"}},[s._v("#")]),s._v(" iptables NAT 表的使用")]),s._v(" "),a("h3",{attrs:{id:"基本命令结构-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本命令结构-2"}},[s._v("#")]),s._v(" 基本命令结构")]),s._v(" "),a("ul",[a("li",[s._v("iptables -t nat 命令 规则链 规则\n"),a("ul",[a("li",[s._v("PREROUTING 目的地址转换")]),s._v(" "),a("li",[s._v("POSTROUTING 源地址转换")])])])]),s._v(" "),a("h3",{attrs:{id:"目的地址转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目的地址转换"}},[s._v("#")]),s._v(" 目的地址转换")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将到 114.115.116.117 tcp 80 端口的访问转给内网的 10.0.0.1 主机")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" iptables -t nat -A PREROUTING -i eth0 -d "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("114.115")]),s._v(".116.117 -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" -j DNAT --to-destination "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"源地址转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源地址转换"}},[s._v("#")]),s._v(" 源地址转换")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 来自内网 10.0.0.0/24 的网络数据包的源地址都会被替换成 eth1 接口的 111.112.113.114，然后发往外网")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" iptables -t nat -A OSTROUTING -s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.0/24 -o eth1 -j SNAT --to-source "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("111.112")]),s._v(".113.114\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);