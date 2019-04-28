(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{242:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("title: Javascript Basic\ntags:")]),t._v(" "),a("ul",[a("li",[t._v("Javascript\ncategories:")]),t._v(" "),a("li",[t._v("Web\nauthor: suda-morris\ndate: 2015-09-28 12:20:50 +0800")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"与-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与-的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" ==与===的区别")]),t._v(" "),a("ol",[a("li",[t._v("对于string,number等基础类型，==和===是有区别的\n"),a("ol",[a("li",[t._v("不同类型间比较，==之比较“转化成同一类型后的值”看“值”是否相等，===如果类型不同，其结果就是不等")]),t._v(" "),a("li",[t._v("同类型比较，直接进行“值”比较，两者结果一样")])])]),t._v(" "),a("li",[t._v("对于Array,Object等高级类型，==和===是没有区别的\n"),a("ul",[a("li",[t._v("进行“指针地址”比较")])])]),t._v(" "),a("li",[t._v("基础类型与高级类型，==和===是有区别的\n"),a("ol",[a("li",[t._v("对于==，将高级转化为基础类型，进行“值”比较")]),t._v(" "),a("li",[t._v("因为类型不同，===结果为false")])])])]),t._v(" "),a("h2",{attrs:{id:"事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),a("ol",[a("li",[t._v("常用事件\n"),a("ul",[a("li",[t._v("onClick单击事件")]),t._v(" "),a("li",[t._v("onMouseOver鼠标经过事件")]),t._v(" "),a("li",[t._v("onMouseOut鼠标移出事件")]),t._v(" "),a("li",[t._v("onChange文本内容改变事件")]),t._v(" "),a("li",[t._v("onSelect文本框选中事件")]),t._v(" "),a("li",[t._v("onFocus光标聚集事件")]),t._v(" "),a("li",[t._v("onBlur移开光标事件")]),t._v(" "),a("li",[t._v("onLoad网页加载事件")]),t._v(" "),a("li",[t._v("onUnload关闭网页事件")])])]),t._v(" "),a("li",[t._v("事件冒泡\n"),a("ul",[a("li",[t._v("由最具体的元素接收，然后逐级向上传播至最不具体的元素的节点(文档)")])])]),t._v(" "),a("li",[t._v("事件捕获\n"),a("ul",[a("li",[t._v("最不具体的节点先接收事件，而最具体的节点应该是最后接收事件")])])]),t._v(" "),a("li",[t._v("事件处理\n"),a("ol",[a("li",[t._v("HTML事件处理\n"),a("ul",[a("li",[t._v("直接添加到HTML结构中")])])]),t._v(" "),a("li",[t._v("DOM0级事件处理\n"),a("ul",[a("li",[t._v("把一个函数赋值给一个事件处理程序")]),t._v(" "),a("li",[t._v("同一个元素多个事件会被覆盖，只有最后一个事件起作用")])])]),t._v(" "),a("li",[t._v("DOM2级事件处理\n"),a("ul",[a("li",[t._v("addEventListener(“事件名”，“事件处理函数”，“布尔值”)；")]),t._v(" "),a("li",[t._v("true：事件捕获")]),t._v(" "),a("li",[t._v("false：事件冒泡")]),t._v(" "),a("li",[t._v("removeEventListen();")])])]),t._v(" "),a("li",[t._v("IE事件处理程序(IE8及以下)\n"),a("ul",[a("li",[t._v("attachEvent")]),t._v(" "),a("li",[t._v("detachEvent")])])])])]),t._v(" "),a("li",[t._v("事件对象\n"),a("ol",[a("li",[t._v("在触发DOM事件的时候都会产生一个对象")]),t._v(" "),a("li",[t._v("事件对象event\n"),a("ol",[a("li",[t._v("type：获取事件类型")]),t._v(" "),a("li",[t._v("target：获取事件目标")]),t._v(" "),a("li",[t._v("stopPropagation()；阻止事件冒泡")]),t._v(" "),a("li",[t._v("preventDefault()；阻止事件默认行为(比如超链接)")])])])])])]),t._v(" "),a("h2",{attrs:{id:"dom对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom对象","aria-hidden":"true"}},[t._v("#")]),t._v(" DOM对象")]),t._v(" "),a("ol",[a("li",[t._v("当网页被加载时，浏览器会创建页面的文档对象模型(Document Object Model)\n"),a("img",{attrs:{src:"http://i.imgur.com/EwSndVS.png",alt:"DOM对象模型"}})]),t._v(" "),a("li",[t._v("DOM操作HTML\n"),a("ol",[a("li",[t._v("改变HTML输出流：\n"),a("ul",[a("li",[t._v("注意，绝对不要在文档加载完成后使用document.write(),这会覆盖该文档")])])]),t._v(" "),a("li",[t._v("寻找元素：\n"),a("ul",[a("li",[t._v("通过id找到HTML元素,document.getElementById();")]),t._v(" "),a("li",[t._v("通过标签名找到HTML元素,document.getElementByTagName();")])])]),t._v(" "),a("li",[t._v("改变HTML内容\n"),a("ul",[a("li",[t._v("使用属性：innerHTML")])])]),t._v(" "),a("li",[t._v("改变HTML属性\n"),a("ul",[a("li",[t._v("使用属性：attribute，例如："),a("code",[t._v('document.getElementById("aid").href="http://www.baid.com";')])])])]),t._v(" "),a("li",[t._v("常用方法：\n"),a("ol",[a("li",[t._v("getElementsByName();获取name")]),t._v(" "),a("li",[t._v("getElementsByTagName();获取元素")]),t._v(" "),a("li",[t._v("getAttribute();获取元素属性")]),t._v(" "),a("li",[t._v("setAttribute();设置元素属性")]),t._v(" "),a("li",[t._v("childNodes();访问子节点")]),t._v(" "),a("li",[t._v("parentNode();访问父节点")]),t._v(" "),a("li",[t._v("createElement();创建元素节点")]),t._v(" "),a("li",[t._v("createTextNode();创建文本节点")]),t._v(" "),a("li",[t._v("insertBefore();插入节点")]),t._v(" "),a("li",[t._v("removeChild();删除节点")]),t._v(" "),a("li",[t._v("offsetHeight;网页尺寸,例如："),a("code",[t._v("var width=document.body.offsetWidth;")])]),t._v(" "),a("li",[t._v("crollHeight;网页尺寸")])])]),t._v(" "),a("li",[t._v("创建节点示例\n"),a("code",[t._v('var body=document.body;var input=document.creatElement("input");input.type="button";input.value="按钮"；body.appendChild(input);')])])])]),t._v(" "),a("li",[t._v("DOM操作CSS\n"),a("ol",[a("li",[t._v("基本语法："),a("code",[t._v("document.getElementById(id).style.property=new style;")])])])]),t._v(" "),a("li",[t._v("DOM操作事件句柄\n"),a("ol",[a("li",[t._v("addEventListener();向指定元素添加事件句柄")]),t._v(" "),a("li",[t._v("removeEventListener();移出方法添加的事件句柄")])])])]),t._v(" "),a("h2",{attrs:{id:"内置对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 内置对象")]),t._v(" "),a("ol",[a("li",[t._v("String对象\n"),a("ol",[a("li",[t._v("字符串可以使用使用单引号或者双引号")]),t._v(" "),a("li",[t._v("获取字符串长度：length属性")]),t._v(" "),a("li",[t._v("在字符串中查找字符串的方法：indexOf(),成功返回位置，失败返回-1")]),t._v(" "),a("li",[t._v("内容匹配的方法：match(),成功返回匹配成功的字符串，失败返回空")]),t._v(" "),a("li",[t._v("替换内容的方法：replace()")]),t._v(" "),a("li",[t._v("字符串大小写转换：toUpperCase()/toLowerCase()")]),t._v(" "),a("li",[t._v("字符串转为数组：split")])])]),t._v(" "),a("li",[t._v("Date对象\n"),a("ol",[a("li",[t._v("常用方法：\n"),a("ol",[a("li",[t._v("getFullYear():获取年份")]),t._v(" "),a("li",[t._v("getTime():获取毫秒")]),t._v(" "),a("li",[t._v("setFullYear():设置具体的日期")]),t._v(" "),a("li",[t._v("getDay():获取星期")])])])])]),t._v(" "),a("li",[t._v("Array数组对象\n"),a("ol",[a("li",[t._v("数组的创建\n"),a("ul",[a("li",[a("code",[t._v('var myArray=["Hello","iwen","ime"];')])])])]),t._v(" "),a("li",[t._v("数组的访问\n"),a("ul",[a("li",[t._v("通过指定数组名以及索引号码(下标从0开始)，可以访问某个特定的元素")])])]),t._v(" "),a("li",[t._v("常用方法\n"),a("ul",[a("li",[t._v("concat();合并数组")]),t._v(" "),a("li",[t._v("sort();排序")]),t._v(" "),a("li",[t._v("push();末尾追加元素")]),t._v(" "),a("li",[t._v("reverse();数组元素翻转")])])])])]),t._v(" "),a("li",[t._v("Math对象\n"),a("ol",[a("li",[t._v("常用方法\n"),a("ul",[a("li",[t._v("round():四舍五入;例如Math.round(2.5)等于3")]),t._v(" "),a("li",[t._v("random();返回0~1之间的随机数;例如parseInt(Math.random()*10);")]),t._v(" "),a("li",[t._v("max();返回最高值")]),t._v(" "),a("li",[t._v("min();返回最低值")]),t._v(" "),a("li",[t._v("abs();返回绝对值")])])])])])]),t._v(" "),a("h2",{attrs:{id:"浏览器对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器对象")]),t._v(" "),a("ol",[a("li",[t._v("Window对象\n"),a("ul",[a("li",[t._v("window对象时BOM的核心，window对象指当前的浏览器窗口。所有JavaScript全局对象，函数以及变量均自动成为window对象的成员；全局变量是window对象的属性，全局函数是window对象的方法，甚至HTML DOM的document也是window对象的属性之一")]),t._v(" "),a("li",[t._v("window.innerHeight:浏览器窗口的内部高度")]),t._v(" "),a("li",[t._v("window.innerWidth:浏览器窗口的内部宽度")]),t._v(" "),a("li",[t._v('window.open("url"，“windowname”，“style”):打开新的网页')])])]),t._v(" "),a("li",[t._v("计时器\n"),a("ol",[a("li",[t._v("方法\n"),a("ol",[a("li",[t._v("setInterval();间隔指定的好描述不同的执行指定的代码")]),t._v(" "),a("li",[t._v("clearInterval();停止setInterval()方法执行的函数代码")]),t._v(" "),a("li",[t._v("setTimeout();暂停指定的毫秒数后执行指定的代码")]),t._v(" "),a("li",[t._v("clearTimeout();停止之慈宁宫setTimeout()方法的函数代码")])])])])]),t._v(" "),a("li",[t._v("History对象\n"),a("ol",[a("li",[t._v("history.back()与在浏览器中点击后退按钮相同")]),t._v(" "),a("li",[t._v("history.forward()与在浏览器中点击向前按钮相同")]),t._v(" "),a("li",[t._v("history.go()进入历史中的某个页面")])])]),t._v(" "),a("li",[t._v("Location对象\n"),a("ol",[a("li",[t._v("location对象用于获得当前页面的地址(URL)，并把浏览器重定向到新的页面")]),t._v(" "),a("li",[t._v("属性与方法\n"),a("ol",[a("li",[t._v("location.hostname返回web主机的域名")]),t._v(" "),a("li",[t._v("location.pathname返回当前页面的路径和文件名")]),t._v(" "),a("li",[t._v("location.port返回web主机的端口")]),t._v(" "),a("li",[t._v("location.protocol返回所使用的web协议(http://或https://)")]),t._v(" "),a("li",[t._v("location.href返回当前页面的URL")]),t._v(" "),a("li",[t._v("location.assign()加载新的文档")])])])])]),t._v(" "),a("li",[t._v("Screen对象\n"),a("ol",[a("li",[t._v("属性\n"),a("ol",[a("li",[t._v("screen.availWidth可用的屏幕宽度")]),t._v(" "),a("li",[t._v("screen.availHeight可用的屏幕高度")]),t._v(" "),a("li",[t._v("screen.Height屏幕高度")]),t._v(" "),a("li",[t._v("screen.Width屏幕宽度")])])])])])]),t._v(" "),a("h2",{attrs:{id:"面向对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面向对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 面向对象")]),t._v(" "),a("div",{staticClass:"language-js 使用闭包以及function来模拟类 line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("People")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("People")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("say")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"People:Hello "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" years old"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("People "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" People"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Student")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" grade")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_grade "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" grade"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("People")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" superSay "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("say"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("say")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("superSay")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Student:Hello "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" years old"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('",Grade: "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_grade"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Student "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Student"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" stu "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"morris"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"one"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("say")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br")])]),a("h2",{attrs:{id:"ajax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ajax","aria-hidden":"true"}},[t._v("#")]),t._v(" AJAX")]),t._v(" "),a("ol",[a("li",[t._v("AJAX(Asynchronous Javascript And XML)")]),t._v(" "),a("li",[t._v("编程模板\n"),a("ol",[a("li",[t._v("创建XMLHttpRequest对象")]),t._v(" "),a("li",[t._v("open操作初始化请求信息")]),t._v(" "),a("li",[t._v("监听事件处理响应结果")]),t._v(" "),a("li",[t._v("send操作发出请求")])])]),t._v(" "),a("li",[t._v("创建各浏览器兼容的XMLHttpRequest对象")])]),t._v(" "),a("div",{staticClass:"language-JS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("creatXHR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" xhr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("XMLHttpRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        xhr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ActiveXObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            xhr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ActiveXObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Msxml2.XMLHTTP'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                xhr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ActiveXObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Microsoft.XMLHTTP'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("发送请求信息\n"),a("ol",[a("li",[t._v("get方法\n"),a("ul",[a("li",[a("code",[t._v('xhr.open("GET","http://test/keyword/hit?keyword=c",true);')])]),t._v(" "),a("li",[a("code",[t._v("xhr.send();")])])])]),t._v(" "),a("li",[t._v("post方法\n"),a("ul",[a("li",[a("code",[t._v('xhr.open("POST","http://test/keyword/hit",true);')])]),t._v(" "),a("li",[a("code",[t._v('xhr.send("keyword=c")')]),t._v(";")])])])])]),t._v(" "),a("li",[t._v("设置请求头信息\n"),a("ol",[a("li",[a("code",[t._v('xhr.setRequestHeader("Content-Type","application/json");')])]),t._v(" "),a("li",[a("code",[t._v('xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");')])])])]),t._v(" "),a("li",[t._v("响应的接收与请求")])]),t._v(" "),a("div",{staticClass:"language-JS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseXML"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAllResponseHeaders")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResponseHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("statusText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("ol",{attrs:{start:"7"}},[a("li",[t._v("将Json字符串转换成Json对象：\n"),a("ol",[a("li",[t._v("JSON.parse(xhr.responseText);")]),t._v(" "),a("li",[t._v("eval(xhr.responseText);")])])])]),t._v(" "),a("h2",{attrs:{id:"设计模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 设计模式")]),t._v(" "),a("ol",[a("li",[t._v("设计原则\n"),a("ol",[a("li",[t._v("开闭原则：对扩展开放，对修改关闭")]),t._v(" "),a("li",[t._v("里氏转换原则：子类继承父类，单独调用完全可以运行")]),t._v(" "),a("li",[t._v("依赖倒转原则：引用一个对象，如果这个对象有底层类型，直接饮用底层")]),t._v(" "),a("li",[t._v("接口隔离原则：每一个接口应该是一种角色")]),t._v(" "),a("li",[t._v("合成/聚合复用原则：新的对象应使用一些已有的对象，使之成为新对象的一部分")]),t._v(" "),a("li",[t._v("迪米特原则：一个对象应对其他对象有尽可能少的了解")])])]),t._v(" "),a("li",[t._v("单例模式")])]),t._v(" "),a("h2",{attrs:{id:"jquery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery","aria-hidden":"true"}},[t._v("#")]),t._v(" jQuery")]),t._v(" "),a("ol",[a("li",[t._v("jQuery库可以通过一行简单的标记被添加到网页中")]),t._v(" "),a("li",[t._v("jQuery是一个JavaScript函数库")]),t._v(" "),a("li",[t._v("jQuery库包含的功能:\n"),a("ol",[a("li",[t._v("HTML元素选取")]),t._v(" "),a("li",[t._v("HTML元素操作")]),t._v(" "),a("li",[t._v("CSS操作")]),t._v(" "),a("li",[t._v("HTML事件函数")]),t._v(" "),a("li",[t._v("JavaScript特效和动画")]),t._v(" "),a("li",[t._v("HTML DOM遍历和修改")]),t._v(" "),a("li",[t._v("AJAX")]),t._v(" "),a("li",[t._v("Utilities")])])]),t._v(" "),a("li",[t._v("从CDN中载入jQuery，例如：http://libs.baidu.com/jquery/1.10.1/jquery.min.js")]),t._v(" "),a("li",[t._v("基础语法：\n"),a("ol",[a("li",[t._v("$(selector).action()\n"),a("ul",[a("li",[t._v("美元符号定义jQuery")]),t._v(" "),a("li",[t._v("选择符selector“查询”和“查找”HTML元素")]),t._v(" "),a("li",[t._v("jQuery的action()执行对元素的操作")]),t._v(" "),a("li",[t._v("例如：\n"),a("ul",[a("li",[t._v("$(this).hide()隐藏当前元素")])])])])])])])])])},[],!1,null,null,null);s.default=e.exports}}]);