(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{382:function(t,a,s){"use strict";s.r(a);var n=s(46),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"词法作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#词法作用域"}},[t._v("#")]),t._v(" 词法作用域")]),t._v(" "),s("p",[t._v("作用域与变量的查找息息相关。作用域一般有两种主要的工作模型，一种是“词法作用域”，另一种是“动态作用域”。")]),t._v(" "),s("p",[t._v("JavaScript采用的是词法作用域。")]),t._v(" "),s("h2",{attrs:{id:"词法作用域-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#词法作用域-2"}},[t._v("#")]),t._v(" 词法作用域")]),t._v(" "),s("p",[t._v("代码编译过程中有一个阶段称为词法阶段，即编译器对代码进行分词、词法分析，而词法作用域就是在该阶段确定下来的作用域。")]),t._v(" "),s("p",[t._v("换句话说，词法作用域是由代码编写时变量和函数定义的位置所决定的。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用bar")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("以上代码将会打印“1”。")]),t._v(" "),s("p",[t._v("函数bar执行时，首先在bar内部查找变量a，没有找到，于是去全局作用域中查找（因为函数bar是全局作用域声明的）。")]),t._v(" "),s("h2",{attrs:{id:"动态作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态作用域"}},[t._v("#")]),t._v(" 动态作用域")]),t._v(" "),s("p",[t._v("大部分语言采用的是词法作用域，与词法作用域形成对比的是动态作用域。")]),t._v(" "),s("p",[t._v("所谓动态作用域，就是指查找变量是在代码运行时动态确定的，与函数的声明位置无关，而与函数的调用位置有关，与当前的执行栈有关。")]),t._v(" "),s("p",[t._v("如果采用动态作用域，上面的代码将会打印“2”，因为在函数bar中查找变量a时，会找到函数foo中声明的变量a。")])])}),[],!1,null,null,null);a.default=r.exports}}]);