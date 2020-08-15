(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{644:function(v,t,i){"use strict";i.r(t);var _=i(29),r=Object(_.a)({},(function(){var v=this,t=v.$createElement,i=v._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[i("p",[v._v("title: Machine Learning\ntags:")]),v._v(" "),i("ul",[i("li",[v._v("ML\ncategories:")]),v._v(" "),i("li",[v._v("Algorithm\nauthor: suda-morris\ndate: 2016-09-05 12:36:12 +0800")])]),v._v(" "),i("hr"),v._v(" "),i("h2",{attrs:{id:"机器学习（从例子中学习）"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#机器学习（从例子中学习）"}},[v._v("#")]),v._v(" 机器学习（从例子中学习）")]),v._v(" "),i("ul",[i("li",[v._v("监督学习（有标注）\n"),i("ul",[i("li",[v._v("逻辑回归")]),v._v(" "),i("li",[v._v("决策树")])])]),v._v(" "),i("li",[v._v("无监督学习（无标注）\n"),i("ul",[i("li",[v._v("K-means聚类算法")])])]),v._v(" "),i("li",[v._v("增强学习（半监督学习）\n"),i("ul",[i("li",[v._v("不是分类问题，也不是聚类的问题")]),v._v(" "),i("li",[v._v("研究的是决策问题（下棋、机器人寻路）")]),v._v(" "),i("li",[v._v("非完备信息")]),v._v(" "),i("li",[v._v("无训练样本")])])])]),v._v(" "),i("h2",{attrs:{id:"机器学习常见算法一览"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#机器学习常见算法一览"}},[v._v("#")]),v._v(" 机器学习常见算法一览")]),v._v(" "),i("p",[i("img",{attrs:{src:"http://i.imgur.com/4DI146y.png",alt:"机器学习常见算法"}})]),v._v(" "),i("ul",[i("li",[v._v("人脸识别大多都采用AdaBoost算法，本质上是决策树")]),v._v(" "),i("li",[v._v("垃圾邮件识别采用朴素贝叶斯算法")]),v._v(" "),i("li",[v._v("FP-Growth算法已经取代了Apriori算法")]),v._v(" "),i("li",[v._v("百度搜索结果的排序使用的是逻辑回归算法")])]),v._v(" "),i("h2",{attrs:{id:"增强学习（reinforcement-learning），也称为强化学习"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#增强学习（reinforcement-learning），也称为强化学习"}},[v._v("#")]),v._v(" 增强学习（Reinforcement Learning），也称为强化学习")]),v._v(" "),i("p",[i("img",{attrs:{src:"http://i.imgur.com/CQ2pZzo.png",alt:"增强学习基本流程"}})]),v._v(" "),i("ul",[i("li",[v._v("由动物学习、参数扰动自适应控制等理论发展而来")]),v._v(" "),i("li",[v._v("算法分类\n"),i("ul",[i("li",[v._v("时序差分算法")]),v._v(" "),i("li",[v._v("Q学习")])])]),v._v(" "),i("li",[v._v("基本流程\n"),i("ul",[i("li",[v._v("Agent产生一个动作")]),v._v(" "),i("li",[v._v("环境接受该动作后状态改变")]),v._v(" "),i("li",[v._v("同时产生会报反馈给Agent")])])])]),v._v(" "),i("h2",{attrs:{id:"马尔可夫决策过程-markov-decision-processes-mdp增强学习的理论基础）"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#马尔可夫决策过程-markov-decision-processes-mdp增强学习的理论基础）"}},[v._v("#")]),v._v(" 马尔可夫决策过程 --Markov Decision Processes,MDP增强学习的理论基础）")]),v._v(" "),i("ul",[i("li",[v._v("马尔科夫链（Markov Chain），也称为马氏链")]),v._v(" "),i("li",[v._v("状态转移图就是一个简单的马尔科夫链")]),v._v(" "),i("li",[v._v("数学定义："),i("img",{attrs:{src:"http://i.imgur.com/kDltlHV.png",alt:"马尔科夫链数学定义"}})]),v._v(" "),i("li",[v._v("状态转移的概率只依赖前一个状态")]),v._v(" "),i("li",[v._v("MDP模型"),i("img",{attrs:{src:"http://i.imgur.com/307BOZV.png",alt:"MDP模型"}})])]),v._v(" "),i("h2",{attrs:{id:"q学习算法"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#q学习算法"}},[v._v("#")]),v._v(" Q学习算法")]),v._v(" "),i("ul",[i("li",[v._v("Q学习算法是一种用来解决马尔可夫决策过程中最优化问题的方法，通过这种算法来更新Q矩阵（决策矩阵）")]),v._v(" "),i("li",[v._v("Q函数："),i("img",{attrs:{src:"http://i.imgur.com/htV0WOO.png",alt:"Q函数"}})]),v._v(" "),i("li",[v._v("模拟退火（马尔科夫蒙特卡罗（MCMC）思想）\n"),i("ul",[i("li",[v._v("以一定的概率接收目标函数值的下降")]),v._v(" "),i("li",[v._v("缓解了爬山算法容易陷入局部最优的缺陷")])])]),v._v(" "),i("li",[v._v("Q学习算法描述（训练）"),i("img",{attrs:{src:"http://i.imgur.com/JxHxRYQ.png",alt:"Q学习算法描述（训练）"}})]),v._v(" "),i("li",[v._v("Q学习算法描述（使用）"),i("img",{attrs:{src:"http://i.imgur.com/rU8L0K0.png",alt:"Q学习算法描述（使用）"}})]),v._v(" "),i("li")]),v._v(" "),i("h2",{attrs:{id:"数据分析和机器学习的区别"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#数据分析和机器学习的区别"}},[v._v("#")]),v._v(" 数据分析和机器学习的区别")]),v._v(" "),i("ul",[i("li",[v._v("数据特点\n"),i("ul",[i("li",[v._v("交易数据vs行为数据")]),v._v(" "),i("li",[v._v("少量数据vs海量数据")]),v._v(" "),i("li",[v._v("采样分析vs全量分析")])])]),v._v(" "),i("li",[v._v("交易数据的一致性要求远远超过行为数据，典型的交易数据如银行转账，所以处理交易数据不能用NOSQL（NotOnlySQL）数据库")]),v._v(" "),i("li",[v._v("解决的业务问题不同，数据分析用来报告过去的事情，机器学习用来预测未来的事情")]),v._v(" "),i("li",[v._v("数据分析的目标用户是公司高层的决策者，机器学习的目标用户是个体")])]),v._v(" "),i("h2",{attrs:{id:"深度学习"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#深度学习"}},[v._v("#")]),v._v(" 深度学习")]),v._v(" "),i("ul",[i("li",[v._v("是基于机器学习延伸出来的一个新的领域，由以人大脑结构为启发的神经网络算法为起源加之模型结构深度的增加发展，并伴随大数据和计算能力的提高而产生的一系列新的算法")])])])}),[],!1,null,null,null);t.default=r.exports}}]);