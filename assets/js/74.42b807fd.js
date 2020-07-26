(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{645:function(t,a,s){"use strict";s.r(a);var n=s(29),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("title: Review in C++ Language\ntags:")]),t._v(" "),s("ul",[s("li",[t._v("CPP\ncategories:")]),t._v(" "),s("li",[t._v("Job Hunting\nauthor: suda-morris\ndate: 2015-07-20 09:42:00")])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#流"}},[t._v("#")]),t._v(" 流")]),t._v(" "),s("ol",[s("li",[t._v("标准C++中，iostream中常见的操作算子(manipulator):flush,endl,oct(后面跟的数据解析成八进制)，hex(后面跟的数解析成十六进制)，dec(后面跟的数解析成十进制)，boolalpha(后面跟的数据解析成布尔类型，并用true和false来显示)，showpos(后面跟的数据显示正负号)，fixed(后面跟的数不要四舍五入),noshowpos(后面跟的数如果是正数就显示+号),showpoint(后面跟的数据显示小数点)，scientific(后面跟的数据以科学计数法的形式表示);在Qt中附加的一些操作算子：forcesign(后面的数据显示正负号),forcepoint(后面的数据显示小数点),noforcesign(后面的数据如果是正数就不显示+号)")]),t._v(" "),s("li",[t._v("标准C++的iostream中，getline(cin,your_string)语句能够从标准输入流中提取一行字符串")]),t._v(" "),s("li",[t._v("在Qt中很容易用与iostream对应的同一个名称定义QTextStream，由于控制台输入和输出主要用在调试过程，所以Qt提供了一个全局函数qDebug(),用它可以方便地将消息发送到控制台，且具有灵活的接口")]),t._v(" "),s("li",[t._v("流被用来读取/写入文件、连接网络和处理字符串，它有一个有用的特性是易于从混合数据类型中得到字符串。")]),t._v(" "),s("li",[t._v("STL中的字符串流：std::ostringstream,常用来定义一个string_buffer;")]),t._v(" "),s("li",[t._v('STL中的文件流std::ofstream,用来定义一个文件流管道如ofstream outf后绑定一个文件：outf.open("file path")')]),t._v(" "),s("li",[t._v('STL中的输入文件流std::ifstream,打开文件instream inf;inf.open("file path"),判断是否读到了文件末尾inf.eof(),读取一行数据getline(inf,newstr)')]),t._v(" "),s("li",[t._v("STL中的stringstream对应于Qt里面的QString，STL中的fstream对应于Qt里面的QFile，STL中的iostream对应于Qt中的QTextStream")])]),t._v(" "),s("h2",{attrs:{id:"运算符new和delete"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运算符new和delete"}},[t._v("#")]),t._v(" 运算符new和delete")]),t._v(" "),s("ul",[s("li",[t._v("new运算符从堆(heap)中分配内存空间，并且返回指向新分配的对象的指针，如果由于某种原因无法完成内存分配，就会抛出一个异常")]),t._v(" "),s("li",[t._v("delete运算符的作用是释放动态分配的内存并将其返回给堆。delete操作只能用于由new运算符返回的指针或者空指针。")])]),t._v(" "),s("h2",{attrs:{id:"智能指针"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#智能指针"}},[t._v("#")]),t._v(" 智能指针")]),t._v(" "),s("ul",[s("li",[t._v("智能指针是一个对象，它用来保存和管理指向堆对象的指针，其行为与常规的指针非常类似，只是它会在合适的时刻自动删除堆对象。这个类在Qt中对应的是QPointer，在标准库中是std::auto_ptr,在Boost中是shared_ptr")])]),t._v(" "),s("h2",{attrs:{id:"引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[t._v("#")]),t._v(" 引用")]),t._v(" "),s("ul",[s("li",[t._v("在C++中，引用提供了一种给左值赋予一个别名的机制，对于避免费事或者不必要的复制引用是非常有用的，例如向函数传送一个非常大的对象作为参数。"),s("strong",[t._v("引用必须在声明时进行初始化且其初始化器也必须是一个左值")]),t._v(",例如："),s("code",[t._v("int n;int& rn=n;")]),t._v("引用变量rn是实际变量n的别名")]),t._v(" "),s("li",[t._v("一种好的编程实践是：对于不需要通过函数来进行变化的指针和引用参数，应使用const来保护它们。只读引用参数的能力在于：对按引用传递参数提供了高效性，而对按值传递参数提供了安全性")])]),t._v(" "),s("h2",{attrs:{id:"类的友元"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类的友元"}},[t._v("#")]),t._v(" 类的友元")]),t._v(" "),s("ul",[s("li",[t._v("友元机制允许非成员函数访问一个类的私有数据，关键字friend可以放在类的生命或者函数声明之前，友元声明位于类定义之内")]),t._v(" "),s("li",[t._v("通常而言，为了达到下面两个目的才会使用友元函数：\n"),s("ol",[s("li",[t._v("为了使用工厂方法，此时需要对某个类强制实施某些创建规则")]),t._v(" "),s("li",[t._v("为了使用全局运算符函数，比如operator<<()和operator>>()，此时不希望将运算符作为某个类的成员函数，或者没有写入类定义的权利")])])])]),t._v(" "),s("h2",{attrs:{id:"运算符重载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运算符重载"}},[t._v("#")]),t._v(" 运算符重载")]),t._v(" "),s("ol",[s("li",[t._v("C++使用关键字operator为运算符赋予新的含义")]),t._v(" "),s("li",[t._v("例如重载<<运算符：friend ostream& operator<<(ostream& out,const Complex& c);")])]),t._v(" "),s("h2",{attrs:{id:"define与inline的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#define与inline的区别"}},[t._v("#")]),t._v(" define与inline的区别")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("对#define宏的替换过程是由预处理器处理的，预处理器本质上是一个文本编辑器。对inline函数的替换过程是由编译器处理的，它会执行更智能的操作，进行正确的类型检查")]),t._v(" "),s("li",[t._v("inline函数必须在调用之前"),s("strong",[t._v("定义")])]),t._v(" "),s("li",[t._v("在一个源代码模块中只能有一次inline定义")])])]),t._v(" "),s("h2",{attrs:{id:"带变长实参表的函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#带变长实参表的函数"}},[t._v("#")]),t._v(" 带变长实参表的函数")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("在C和C++中，可以定义其参数表以省略号结尾的函数。省略号使调用者能够制定参数的数量以及类型。")]),t._v(" "),s("li",[t._v("为了定义使用省略号的函数，需要包含cstdarg库")])])]),t._v(" "),s("div",{staticClass:"language-C line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tva_list ap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("va_start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*ap执行第一个未命名实参*/")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tsum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("va_arg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("va_end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*返回之前清除栈*/")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sum"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("h2",{attrs:{id:"预处理宏主要应用场合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预处理宏主要应用场合"}},[t._v("#")]),t._v(" 预处理宏主要应用场合")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("使用#ifndef/#define/#endif将头文件包裹起来，以避免多次包含某个头文件")]),t._v(" "),s("li",[t._v("使用#ifdef/#else/#endif对某些代码部分进行条件编译")]),t._v(" "),s("li",[t._v("__FILE__宏和__LINE__宏用于调试并给出框架信息")])])]),t._v(" "),s("h2",{attrs:{id:"c-中的多态性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-中的多态性"}},[t._v("#")]),t._v(" C++中的多态性")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("C++源于C语言，它的编译器也试图在编译时绑定函数调用，这主要是基于性能方面的考虑。编译器无法仅凭集成关系和基类指针就确定它正在操作何种对象。如果没有运行时检查，就无法保证运行时调用正确的函数。C++要求使用一个特殊的关键字来允许运行时通过指针和引用进行函数调用的绑定，这个关键字就是virtual，它能够使得程序具有多态性。")]),t._v(" "),s("li",[t._v("由于this是在执行它的构造函数时被初始化的，在执行它的析构函数的时候被销毁，因此不要指望在这两种条件下能够执行正确的运行时绑定。当在构造函数或者析构函数里面调用任何this方法时，将由编译时绑定决定应该调用哪一个方法，就好像不存在virtual关键字一样。")]),t._v(" "),s("li",[t._v("一般而言，如果类中包含一个或者多个virtual函数，则也应包含一个虚析构函数。这是因为，当对对台对象集合进行操作时，通常是通过基类指针删除这些对象，这会导致对析构函数的间接调用，如果析构函数不为virtual类型，在编译时绑定将决定应该调用哪一个析构函数，从而可能导致派生对象的不完整析构")]),t._v(" "),s("li",[t._v("静态成员函数不能使虚函数；内敛函数不能是虚函数；构造函数不能是虚函数")])])]),t._v(" "),s("h2",{attrs:{id:"虚函数实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚函数实现原理"}},[t._v("#")]),t._v(" 虚函数实现原理")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("父类中如果有虚函数存在，编译器就会为该对象创建一个虚函数表，里面存放自己的虚函数的指针。")]),t._v(" "),s("li",[t._v("子类继承父类，编译器也会为子类创建一个不同的虚函数表，存放子类自己的虚函数指针")]),t._v(" "),s("li",[t._v("拥有虚函数表的类都会另外创建一个指向该表的指针")]),t._v(" "),s("li",[t._v("所以当父类指针指向子类对象，调用虚函数的时候就会根据子类对象的虚函数表调用得到子类的虚函数，而不是父类的虚函数")]),t._v(" "),s("li",[t._v("如果没有在子类中定义与父类同名的虚函数，那么就会在子类的虚函数表中就会写上父类的相应的虚函数的函数入口地址；如果在子类中也定义了同名的虚函数，那么在虚函数表中用子类的虚函数的函数地址覆盖掉父类的相应的虚函数的函数地址")]),t._v(" "),s("li",[t._v("每个类只有一份虚函数表，所有该类的对象共用同一张虚函数表")]),t._v(" "),s("li",[t._v("只有函数声明没有函数定义的虚函数也是纯虚函数")])])]),t._v(" "),s("h2",{attrs:{id:"纯virtual函数的声明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#纯virtual函数的声明"}},[t._v("#")]),t._v(" 纯virtual函数的声明")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("virtual returnType functionName(parameterList)=0;")]),t._v(" "),s("li",[t._v("抽象基类中至少要有一个virtual函数")]),t._v(" "),s("li",[t._v("抽象基类中不能有public的构造函数")]),t._v(" "),s("li",[t._v("抽象基类的任何具体派生类都必须重写并定义全部的纯virtual基类函数，话句话说，任何没有重写并定义全部纯virtual基类函数的派生类都是抽象类")])])]),t._v(" "),s("h2",{attrs:{id:"重载，隐藏与重写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重载，隐藏与重写"}},[t._v("#")]),t._v(" 重载，隐藏与重写")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("当函数foo在同一个作用域内存在两个或者多个版本(具有不同的签名)时，就称foo函数被"),s("strong",[t._v("重载")]),t._v("了")]),t._v(" "),s("li",[t._v("当基类中的一个virtual函数在培生累中也存在，并且他们具有相同的签名和返回类型时，就称派生类中的版本“重写”了基类中的版本")]),t._v(" "),s("li",[t._v("派生类中的成员函数，会隐藏基类中与之同名的全部函数，如果出现这种情况，则：\n* 只有派生类函数可以被直接调用\n* 类作用域解析运算符::西部用来显式地调用基类函数")])])]),t._v(" "),s("h2",{attrs:{id:"有三种特殊的成员函数从来不会被继承，编译器会为没有定义它们的类自动生成这三种函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有三种特殊的成员函数从来不会被继承，编译器会为没有定义它们的类自动生成这三种函数"}},[t._v("#")]),t._v(" 有三种特殊的成员函数从来不会被继承，编译器会为没有定义它们的类自动生成这三种函数")]),t._v(" "),s("ol",[s("li",[t._v("拷贝构造函数：类名（const 类名& 变量名）")]),t._v(" "),s("li",[t._v("复制赋值运算符")]),t._v(" "),s("li",[t._v("析构函数")])]),t._v(" "),s("h2",{attrs:{id:"构造函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构造函数"}},[t._v("#")]),t._v(" 构造函数")]),t._v(" "),s("blockquote",[s("p",[t._v("如果一个类没有构造函数，那么编译器就会自动产生一个默认的public构造函数，而这个构造函数会调用它的每一个基类的默认构造函数。如果某个类有一些构造函数但是没有默认构造函数，那么它就不会进行默认的初始化工作，这种情况下，任何派生类构造函数都必须在其初始化列表中明确地指名应该调用哪一个基类构造函数")])]),t._v(" "),s("h2",{attrs:{id:"类的前置声明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类的前置声明"}},[t._v("#")]),t._v(" 类的前置声明")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("类的前置声明将它的名称声明成一个有效的类名称，但不给出类的定义。这会使得类名称能够被用作"),s("strong",[t._v("指针")]),t._v("和"),s("strong",[t._v("引用")]),t._v("的类型，在遇到类的定义之前，不会将这些指针和引用进行解引操作。")]),t._v(" "),s("li",[s("strong",[t._v("如果可以使用前置声明，就不要使用#include指令")])])])]),t._v(" "),s("h2",{attrs:{id:"范型与模板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#范型与模板"}},[t._v("#")]),t._v(" 范型与模板")]),t._v(" "),s("blockquote",[s("p",[t._v("1.模板为C++编译器提供了一个途径，能够为带有参数化类型和相同行为的类和函数生成多个版本。模板使用关键字template以及用尖括号<>包围的模板参数进行区分。与函数参数不同，模板参数不仅可以传递变量和值，还可以传递类型表达式。例如：template <class T,int max> Buffer{T v[max];}\n2. 每当编译器看到一个特定参数类型的组合首次用于一个模板函数时，就称此模板进行了实例化。\n3. 类模板主要用来生成数据的通用容器，其参数能够指名容器中的内容。所有的Qt容器类以及标准模板库(STL)中的所有容器类都是参数化的。\n4. 所有模板的定义(类和函数)都必须出现在头文件中，这是因为编译器需要用这些定义来根据模板声明生成代码")])]),t._v(" "),s("h2",{attrs:{id:"其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),s("ul",[s("li",[t._v("C++中使用struct的大多数情形是需要将数据项分组在一起，但是不需要成员函数")]),t._v(" "),s("li",[t._v("const成员函数中不允许对数据成员进行修改，如果修改，编译器将报错，任何不会修改数据成员的函数都应该声明为const类型。如果在编写const成员函数时，不慎修改了数据成员，或者调用了其它非const成员函数，编译器将指出错误。注意可以在const成员函数里面更改可变成员(mutable member)的值，而常规的数据成员的值不能改变")]),t._v(" "),s("li",[t._v("类内定义的成员函数编译器会优先编译成内联(inline)函数")]),t._v(" "),s("li",[t._v("初始化列表优先于构造函数执行.初始化列表只能用于构造函数,初始化列表可以同时初始化多个数据成员")]),t._v(" "),s("li",[t._v("const数据成员的初始化必须写在初始化列表中")]),t._v(" "),s("li",[t._v("M_PI来自于<math.h>,它位于cstdlib库中")]),t._v(" "),s("li",[t._v("foreach()宏需要赋值它所遍历的容器，这就要求使用foreach必须要有拷贝构造函数")]),t._v(" "),s("li",[t._v("C++类型可以分成两类：值类型和对象类型，值类型的有Anything*，int，char，QString，QDate和QVariant。带有共有默认构造函数、拷贝构造函数和复制赋值运算符的任何类型都是值类型")]),t._v(" "),s("li",[t._v("C++对于没有数据成员的类在实例化的时候会分配1个内存单元(1Byte)，用于标记该对象的存在")]),t._v(" "),s("li",[t._v("含有纯虚函数的类叫做抽象类,抽象类无法实例化对象")])])])}),[],!1,null,null,null);a.default=e.exports}}]);