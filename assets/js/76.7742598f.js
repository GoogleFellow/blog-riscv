(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{663:function(_,v,i){"use strict";i.r(v);var t=i(29),l=Object(t.a)({},(function(){var _=this,v=_.$createElement,i=_._self._c||v;return i("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[i("p",[_._v("title: SD Card Driver\ntags:")]),_._v(" "),i("ul",[i("li",[_._v("SD\ncategories:")]),_._v(" "),i("li",[_._v("Driver\nauthor: suda-morris\ndate: 2015-10-30 16:58:07 +0800")])]),_._v(" "),i("hr"),_._v(" "),i("h2",{attrs:{id:"micro-sd卡简介"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#micro-sd卡简介"}},[_._v("#")]),_._v(" Micro SD卡简介")]),_._v(" "),i("p",[i("img",{attrs:{src:"http://i.imgur.com/baGsEky.jpg",alt:"SD卡"}})]),_._v(" "),i("ol",[i("li",[_._v("Micro SD卡的控制指令功能强大，支持SPI、SDIO模式，兼容MMC。在SPI模式下，CS/MOSI/MISO/CLK都需要加10~100K左右的上拉电阻")]),_._v(" "),i("li",[_._v("SD卡有5个寄存器\n"),i("ol",[i("li",[_._v("CID：128比特，卡标识寄存器,只读")]),_._v(" "),i("li",[_._v("RCA：16比特，相对卡地址寄存器，即本地系统中卡的地址，动态变化，在主机初始化的时候确定。SPI模式中没有此寄存器")]),_._v(" "),i("li",[_._v("CSD：128比特，卡描述数据，主要存储了卡的容量、数据格式、DSR寄存器是否可用、数据传输相关参数、数据传输速度、最大的数据访问时间、最大的读写数据块长度等，是可配置寄存器")]),_._v(" "),i("li",[_._v("SCR：64比特，SD配置寄存器，即SD卡特定信息数据如：SCR版本号、SD卡版本号、是否支持安全性、擦除后卡状态默认值、SD总线宽度等，由生产商在卡生产阶段写入")]),_._v(" "),i("li",[_._v("OCR：32比特，操作条件寄存器,提供SD Host查询SD卡支持的电压范围，是否是大容量卡OCR[30],卡省电过程是否结束OCR[31]")])])]),_._v(" "),i("li",[_._v("每发送一个命令，SD卡都会给出一个应答，以告知主机该命令的执行情况，或者返回主机需要获取的数据。SPI模式下，SD卡针对不同的命令，应答可以是R1~R7。命令与响应都是MSB优先。除了SEND_STATUS和READ_OCR指令外，其他指令的响应格式都是R1，格式R1的长度是1Byte，并且最高位总是0，其余每位均是错误提示，在指令接收过程中发生了什么样的错误，对应的错误位就会是‘1’。R1b和R1具有相同的格式，它将伴随一个附加的busy信号，busy信号的长度可以是任意个字节，全0表示卡处在“忙”的状态。格式R2的长度为2字节，它是指令SEND_STATUS的响应，它的高字节和R1相同，低字节同样作为状态提示。格式R3的长度是5字节，它是指令READ_OCR的响应，最高字节和R1相同，其余4字节包含SD卡的OCR寄存器信息")]),_._v(" "),i("li",[_._v("在SD卡收到复位命令（CMD0）时，CS为低电平则SD卡的SPI模式被启用。不过在发送CMD0之前，要发送>74个时钟这是因为SD卡内部有一个供电电压上升时间，大概为64个CLK，剩下的10个CLK用于SD卡同步，之后才能开始CMD0的操作。在卡初始化的时候，CLK时钟最大不能超过400KHz")]),_._v(" "),i("li",[_._v("对SD卡的常用基本操作主要由：单块读、连续读、单块写、连续写。SPI模式下，通过向SD卡发送响应的命令并读取相应的响应来实现对SD卡的控制。")])]),_._v(" "),i("h2",{attrs:{id:"sd-命令"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sd-命令"}},[_._v("#")]),_._v(" SD 命令")]),_._v(" "),i("ol",[i("li",[_._v("命令:每个命令都有一个起始位和结束位，总长度为48 bits，并且每个命令都有 7 bits 的CRC 校验码，高字节优先传输\n"),i("img",{attrs:{src:"http://i.imgur.com/sDb6XU5.jpg",alt:"SD Command"}})]),_._v(" "),i("li",[_._v("Command 共分为12类（class0 - class11），在寄存器CSD中有12 bits CCC（Card Command Class）对本卡支持的分类进行描述\n"),i("img",{attrs:{src:"http://i.imgur.com/2QG9Ein.jpg",alt:"SD命令"}})]),_._v(" "),i("li",[_._v("几个重要的命令\n"),i("img",{attrs:{src:"http://i.imgur.com/Xh1BWEV.png",alt:"常用命令"}})]),_._v(" "),i("li",[_._v("CMD8命令格式\n"),i("img",{attrs:{src:"http://i.imgur.com/9oboqjq.jpg",alt:"CMD8"}})])]),_._v(" "),i("h2",{attrs:{id:"sd-应答"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sd-应答"}},[_._v("#")]),_._v(" SD 应答")]),_._v(" "),i("ol",[i("li",[_._v("R1响应格式\n"),i("img",{attrs:{src:"http://i.imgur.com/ZYbXuth.png",alt:"R1响应格式"}})])]),_._v(" "),i("h2",{attrs:{id:"sd卡初始化"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sd卡初始化"}},[_._v("#")]),_._v(" SD卡初始化")]),_._v(" "),i("p",[i("img",{attrs:{src:"http://i.imgur.com/ccW4YbS.jpg",alt:"SD卡初始化流程"}})]),_._v(" "),i("ol",[i("li",[_._v("配置时钟，慢速一般为400Hz，设置工作模式")]),_._v(" "),i("li",[_._v("发送CMD0，对卡进行软复位，进入空闲态，该指令没有反馈")]),_._v(" "),i("li",[_._v("发送CMD8命令用于读取卡的接口信息，如果是SD2.0，则支持CMD8命令；如果是SD1.x，MMC，则不支持CMD8")]),_._v(" "),i("li",[_._v("发送CMD55+ACMD41，判断当前电压是否在卡的工作范围内，看卡能否识别命令，如果是MMC卡，则CMD55不能被识别，短反馈")]),_._v(" "),i("li",[_._v("发送CMD2，验证SD卡是否接入，长反馈")]),_._v(" "),i("li",[_._v("发送CMD3，读取SD卡的RCA地址，短反馈")]),_._v(" "),i("li",[_._v("以RCA作为参数，发送CMD9读取CSD，长反馈")]),_._v(" "),i("li",[_._v("发送CMD7，选中要操作的SD卡，短反馈")]),_._v(" "),i("li",[_._v("配置告诉时钟，准备数据传输，一般为20~25MHz")]),_._v(" "),i("li",[_._v("设置工作模式：DMA、中断或者查询模式")])]),_._v(" "),i("h2",{attrs:{id:"sd卡读取数据流程"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sd卡读取数据流程"}},[_._v("#")]),_._v(" SD卡读取数据流程")]),_._v(" "),i("ol",[i("li",[_._v("发送CMD17")]),_._v(" "),i("li",[_._v("接收卡响应R1")]),_._v(" "),i("li",[_._v("接收数据起始令牌0xFE")]),_._v(" "),i("li",[_._v("接收数据")]),_._v(" "),i("li",[_._v("接收2字节的CRC，如果不使用CRC，这两个字节在读取后可以丢掉")]),_._v(" "),i("li",[_._v("禁止片选之后，发多8个CLK")])]),_._v(" "),i("h2",{attrs:{id:"sd卡写数据流程"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sd卡写数据流程"}},[_._v("#")]),_._v(" SD卡写数据流程")]),_._v(" "),i("ol",[i("li",[_._v("发送CMD24")]),_._v(" "),i("li",[_._v("接收卡响应R1")]),_._v(" "),i("li",[_._v("发送写数据起始令牌0xFE")]),_._v(" "),i("li",[_._v("发送数据")]),_._v(" "),i("li",[_._v("发送2字节的伪CRC")]),_._v(" "),i("li",[_._v("禁止片选之后，发多8个CLK")])]),_._v(" "),i("h2",{attrs:{id:"sd卡读数据块操作"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sd卡读数据块操作"}},[_._v("#")]),_._v(" SD卡读数据块操作")]),_._v(" "),i("ol",[i("li",[_._v("在读数据块模式下，数据传输的基本单元是数据块，它的大小在CSD中（READ_BL_LEN）定义")]),_._v(" "),i("li",[_._v("为了保证数据传输的正确，每个数据块后都有一个CRC校验码。")]),_._v(" "),i("li",[_._v("CMD17（Read_Single_Block）启动一次读数据块操作，在传输结束后返回返回到发送状态。")]),_._v(" "),i("li",[_._v("CMD18（Read_Multiple_Block）启动一次连续多个数据块的读操作")]),_._v(" "),i("li",[_._v("主机可以在多数据块读操作的任何时候终止操作，而不管操作的类型。发送停止传输命令即可终止操作")]),_._v(" "),i("li",[_._v("如果在多数据块读操作中，卡检测到错误（如越界，地址错位或内部错误），它将停止数据传输并仍处于数据状态；此时主机必须发送停止传输命令，终止操作")])]),_._v(" "),i("h2",{attrs:{id:"fatfs简介"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fatfs简介"}},[_._v("#")]),_._v(" FATFS简介")]),_._v(" "),i("ol",[i("li",[_._v("FATFS是一个完全免费开源的FAT文件系统模块，专门为小型的嵌入式系统而设计。支持FAT12、FAT16和FAT32，支持多个存储媒介；有独立的缓冲区，可以对多个文件进行读/写。")]),_._v(" "),i("li",[_._v("拥有多种配置选项：\n"),i("ol",[i("li",[_._v("支持多卷（物理驱动器或分区，最多10个卷）")]),_._v(" "),i("li",[_._v("多个ANSI/OEM代码页包括DBCS")]),_._v(" "),i("li",[_._v("支持长文件名、ANSI/OEM或Unicode")]),_._v(" "),i("li",[_._v("支持RTOS")]),_._v(" "),i("li",[_._v("支持多种扇区大小")]),_._v(" "),i("li",[_._v("只读、最小化的API和I/O缓冲区等")])])]),_._v(" "),i("li",[_._v("需要我们编写移植代码的是FATFS模块提供的底层接口，包括存储媒介读/写接口(disk I/O)和供给文件创建修改时间的实时时钟\n"),i("ol",[i("li",[_._v("ffconf.h:FATFS模块配置文件")]),_._v(" "),i("li",[_._v("ff.h:FATFS和应用模块共用的包含文件")]),_._v(" "),i("li",[_._v("ff.c:FATFS模块")]),_._v(" "),i("li",[_._v("diskio.h:FATFS和disk I/O模块共用的包含文件")]),_._v(" "),i("li",[_._v("interger.h:数据类型定义")]),_._v(" "),i("li",[_._v("option：可选的外部功能(比如支持中文等)")]),_._v(" "),i("li",[_._v("diskio.c:FATFS和disk I/O模块接口层文件")])])]),_._v(" "),i("li",[_._v("ffconf.h\n"),i("ol",[i("li",[_._v("_CODE_PAGE,根据具体使用的而语言在ffconf.h中定义具体的宏定义。如果使用简体中文，则选择936；如果使用英文，则选择437；如果使用日文，则选择932。打开option文件夹，打开cc936.c文件，里面有一个很大的数组static const WCHAR uni2oem[]。这个数组用于unicode码和OEM码之间的相互转换。接下来又有两个函数，ff_convert()和ff_wtoupper()具体执行码型转换和将字符串转换为大写。unicode是一种双字节字符编码，无论中文还是英文，或者其他语言统一到2字节。与现有的任何编码都不兼容。WindowsNT的内核即使用该编码，所有数据进入内核前转换成UNICODE，退出内核后再转换成版本相关的编码(通常称为OEM，在简体中文下即为GB)")]),_._v(" "),i("li",[_._v("_FS_TINY，使用浓缩版的FATFS就设置为1")]),_._v(" "),i("li",[_._v("_FS_READONLY,这个用来配置是不是只读")]),_._v(" "),i("li",[_._v("_USE_STRFUNC,这个用来设置是否支持字符串类操作，比如f_putc,f_puts等")]),_._v(" "),i("li",[_._v("_USE_MKFS,这个用来设置是否使能格式化")]),_._v(" "),i("li",[_._v("_USE_FASTSEEK，这个用来使能快速定位")]),_._v(" "),i("li",[_._v("_USE_LABEL,这个用来设置是否支持磁盘盘符（磁盘名字）读取与设置")]),_._v(" "),i("li",[_._v("_USE_LFN,该选项用于设置是否支持长文件名，还需要_CODE_PAGE支持，取值范围为0~3。0表示不支持长文件名，1~3是支持长文件名，但是存储地方不一样")]),_._v(" "),i("li",[_._v("_VOLUMES,用于设置FATFS支持的逻辑设备数目")]),_._v(" "),i("li",[_._v("_MAX_SS,扇区缓冲的最大值，一般设置为512")])])]),_._v(" "),i("li",[_._v("ff.h中的函数定义\n"),i("ol",[i("li",[_._v("FRESULT f_mount (FATFS* fs, const TCHAR* path, BYTE opt);加载文件系统\n"),i("ul",[i("li",[_._v("fs表示文件系统对象，path表示本地设备驱动号，opt=1表示立即挂载，0表示延迟挂载")])])]),_._v(" "),i("li",[_._v("FRESULT f_lseek (FIL* fp, DWORD ofs);移动文件的读写指针\n"),i("ul",[i("li",[_._v("ofs表示文件偏移量的数目")])])]),_._v(" "),i("li",[_._v("FRESULT f_close (FIL* fp);关闭打开的文件对象")]),_._v(" "),i("li",[_._v("FRESULT f_opendir (DIR* dp, const TCHAR* path);打开目录，返回目录对象")]),_._v(" "),i("li",[_._v("FRESULT f_readdir (DIR* dp, FILINFO* fno);读取目录获得文件信息")]),_._v(" "),i("li",[_._v("FRESULT f_stat (const TCHAR* path, FILINFO* fno);读取文件的状态")]),_._v(" "),i("li",[_._v("FRESULT f_getfree (const TCHAR* path, DWORD* nclst, FATFS** fatfs);获取驱动器上的空闲簇数")]),_._v(" "),i("li",[_._v("FRESULT f_truncate (FIL* fp);截断文件")]),_._v(" "),i("li",[_._v("FRESULT f_sync (FIL* fp);刷新写文件的缓冲数据")]),_._v(" "),i("li",[_._v("FRESULT f_unlink (const TCHAR* path);删除目录中的一个文件")]),_._v(" "),i("li",[_._v("FRESULT f_mkdir (const TCHAR* path);创建一个新目录")]),_._v(" "),i("li",[_._v("FRESULT f_chmod (const TCHAR* path, BYTE attr, BYTE mask);更改文件/目录的属性")]),_._v(" "),i("li",[_._v("FRESULT f_utime (const TCHAR* path, const FILINFO* fno);更改文件/目录的时间戳")]),_._v(" "),i("li",[_._v("FRESULT f_rename (const TCHAR* path_old, const TCHAR* path_new);重命名/移动文件或目录")]),_._v(" "),i("li",[_._v("FRESULT f_forward (FIL* fp, UINT("),i("em",[_._v("func)(const BYTE")]),_._v(",UINT), UINT btf, UINT* bf);转发数据流")]),_._v(" "),i("li",[_._v("FRESULT f_mkfs (const TCHAR* path, BYTE sfd, UINT au);在驱动器上创建一个文件系统")]),_._v(" "),i("li",[_._v("FRESULT f_chdir (const TCHAR* path);改变当前目录")]),_._v(" "),i("li",[_._v("FRESULT f_chdrive (const TCHAR* path);更改当前驱动器")]),_._v(" "),i("li",[_._v("int f_putc (TCHAR c, FIL* fp);")]),_._v(" "),i("li",[_._v("int f_puts (const TCHAR* str, FIL* cp);")]),_._v(" "),i("li",[_._v("int f_printf (FIL* fp, const TCHAR* str, ...);")]),_._v(" "),i("li",[_._v("TCHAR* f_gets (TCHAR* buff, int len, FIL* fp);")])])]),_._v(" "),i("li",[_._v("diskio.c(需要用户提供如下几个函数接口)\n"),i("ol",[i("li",[_._v("DSTATUS disk_initialize (BYTE pdrv);初始化磁盘驱动器")]),_._v(" "),i("li",[_._v("DSTATUS disk_status (BYTE pdrv);获取磁盘状态")]),_._v(" "),i("li",[_._v("DRESULT disk_read (BYTE pdrv, BYTE* buff, DWORD sector, UINT count);读扇区")]),_._v(" "),i("li",[_._v("DRESULT disk_write (BYTE pdrv, const BYTE* buff, DWORD sector, UINT count);写扇区")]),_._v(" "),i("li",[_._v("DRESULT disk_ioctl (BYTE pdrv, BYTE cmd, void* buff);设备相关的控制特性")]),_._v(" "),i("li",[_._v("get_fattime获取当前时间")])])]),_._v(" "),i("li",[_._v("簇：文件数据分配的基本单位")]),_._v(" "),i("li",[_._v("FAT文件系统依次应该为:引导扇区、文件分配表两个、根目录区和数据区")])]),_._v(" "),i("h2",{attrs:{id:"汉字字库"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#汉字字库"}},[_._v("#")]),_._v(" 汉字字库")]),_._v(" "),i("ol",[i("li",[_._v("常用的汉字内码系统有GB2312，GB13000，GBK，BIG5（繁体）等几种，其中GB2312支持的汉字仅有几千个，很多时候不够用，而GBK内码不仅完全兼容GB2312，还支持繁体字，总汉字数量达到2万多个。")]),_._v(" "),i("li",[_._v("每个GBK码由2字节组成，第一个字节为0X81~0xFE，第二个字节分为两部分，一是0x40~0x7E，二是0x80~0xFE。第一个字节代表的意义称为区，GBK里面总共有126个区，每个区内有190个汉字。")])])])}),[],!1,null,null,null);v.default=l.exports}}]);