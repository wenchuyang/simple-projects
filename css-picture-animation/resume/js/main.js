var domCode = document.querySelector('#code')
var domStyle = document.querySelector('#styleTag')
var domPaper = document.querySelector('#paper')
var code1 = `/*
 * 面试官您好，我是文欢。
 * 这是我的简历
 */
body{
  padding: 16px;
  background-color: #F5F2F0;
  font-size: 16px; 
}
/* 或许需要一点的代码高亮  */
.tocken.comment{
  color: slategray;
}
.token.punctuation{
  color: #999;
}
.token.property{
  color: #905;
}
.token.selector{
  color: #690;
}
/* 加个边框吧 */
#code{
  border: 1px solid #ddd;
  padding: 16px;
}
/* 或者再给边框加个阴影？ */
#code{
  box-shadow: 2px 5px 5px 2px rgba(153,153,153,1);
}
/* 我想让阴影动起来呢 */
#code{
  animation: borderChange 1.5s ease-in infinite;
}
/* 好了话不多说，开始写简历了。*/
/* 唔，或许我需要一张纸。 */
#code-wrapper{
  width: 50%;
}
#paper-wrapper{
  display: block;
}
#paper{
  width: 100%;
  height: 100%;
  padding-top: 24px;
  padding-left: 24px;
  position: relative;
  background: #58a;
  background: linear-gradient(-150deg, transparent 1.5em, #58a 0);
  border-radius: .5em;
}
#paper::before{
  display: block;
}
/* 请看右侧 */
`
var code2 = `
/* 让我们把它转成markdown页面  */
`
var code3 = `
/* 大功告成，谢谢观看 */
`
var resume = `
# 文欢的个人简历

## 基本信息
求职岗位：**WEB前端开发工程师**。全职，坐标杭州，随时到岗。

## 自我介绍
女，22岁，本科，华北科技学院软件工程专业毕业。自学前端一年。
- 电子邮箱：wenchuyang@foxmail.com
- github主页：https://github.com/wenchuyang
- 个人博客：https://blog.csdn.net/writing_happy

## 教育背景
2018.6毕业于华北科技学院软件工程专业，主修课程包括web前端基础、.net程序设计、JSP程序设计、java、C、C++、数据库系统概论、数据结构、软件项目管理、软件测试、UML建模等，在校期间成绩优异，多次获得学院奖学金。

## 相关技能
- **HTTP** 了解 http 协议，能够看懂 http 请求和响应，了解常见状态码含义； 
- **HTML5 & CSS3** 可以根据 HTML5 标准编写语义化的文档结构，掌握 CSS 选择器、常见样式、堆叠上下文、常用居中方案以及常见布局（float 布局和 flex 布局），能使用纯 CSS 实现一些简单有趣的效果比如[旋转的太极图](https://wenchuyang.github.io/Task/cssWorks/%E5%A4%AA%E6%9E%81/demo.html)。 
- **原生JavaScript** 原生JavaScript – 掌握js七种数据类型以及它们之间的转换，在内存中的存储方式，熟悉DOM常用API、JS数组以及数组的一些常用方法，掌握事件的捕获与冒泡，了解js的变量提升机制，知道js闭包、浏览器的同源策略和跨域方法、JSONP、AJAX、同步异步、原型链、继承、new和this相关知识，理解MVC思想并能在实际中运用。
- **jQuery** 能够使用jQuery进行DOM操作，实现[简单的轮播](https://wenchuyang.github.io/appleLikeSwiper-2018.4/.)
- **BootStrap** 初步了解Bootstrap，能够使用Bootstrap快速制作页面。
- **Node.js** 简单了解node.js，可以使用nodejs搭建，根据浏览器发送的不同请求路径给出不同的响应。能使用express框架进行网站的构建。

## 项目经验
- 2018.11至2018.11  画个龙猫给你看
预览链接：https://wenchuyang.github.io/css-picture-animation/totoro/
项目描述：使用纯css画的龙猫，通过js将过程展示出来，并添加了调速按钮。
技术栈：css3、JavaScript、jQuery
- 2018.01至今  个人在线简历
预览链接：https://wenchuyang.github.io/Resume/index.html
项目描述：在线简历项目，包括有导航栏、个人资料卡、技能条、作品集、留言板等模块。
        点击导航栏可以跳转到页面的相应部分，并且使用tween.js为它的跳转添加了缓动效果。
        使用原生js和css给页面添加了加载动画。
        作品集用轮播图展示，使用swiper插件制作。
        留言板后台使用leancloud提供的在线数据库，输入用户名和留言内容可以进行留言的提交。
技术栈：html5、css3、javascript、jQuery、tween.js、swiper
- 2018.04至2018.06  沉潜书屋网站
项目地址：https://github.com/wenchuyang/deep
项目描述：网站前端大部分直接使用HTML5和CSS3实现，部分使用bootstrap框架。后台使用nodejs的express框架做路由，返回ejs网页。
网站包括有用户注册、登录、图书信息的增删改查、书籍评论的添加修改和删除功能，是一个比较完备的网站。
技术栈：html5、css3、bootstrap、nodejs、express
- 2018.02至2018.02  简易导航栏
预览地址：https://wenchuyang.github.io/myNav/
项目描述：使用原生js为键盘上的26个字母分别绑定常用网站，点击键盘上的字母即可进入相应的网站。支持用户修改绑定的网站。
技术栈：html5、css3、JavaScript
- 2018.02至2018.02  移动端canvas画板
预览地址：https://wenchuyang.github.io/canvas-demo/index.html
项目描述：兼容PC端，包含画笔、橡皮擦、颜色选择、画笔粗细选择、清空画板以及下载功能。
技术栈：html5、css3、JavaScript、canvas

## 工作经历
- 2017.9至2018.6 赵老师婚礼影像团队 婚礼摄像师兼后期剪辑师
跟拍婚礼全程并在婚礼结束制作精美MV，工作认真做事仔细，从业一年零差评。
- 2018.8至2018.10 杭州云档口科技有限公司 前端工程师
主要负责优百仓网站的更新与维护，使用PHP对原有页面进行修改以及插件的封装。

## 技能证书
- 英语CET-4，能够基本无障碍阅读英文文档。
- 软考初级程序员合格，具备扎实的理论基础。
`
var duration = 50
$('.actions').on('click','button',function(e){
  let $ele = $(e.target)
  $ele.addClass('active')
     .siblings('.active').removeClass('active')
  let speed = $ele.attr('data-speed')
  switch(speed){
    case 'slow':
      duration = 100
      break
    case 'normal':
      duration = 50
      break
    case 'fast':
      duration = 10
      break
  }
})

writeCode.call(this, '', code1, domCode, 'css', domStyle, ()=>{
  writeCode.call(this, '', resume, domPaper, 'markdown', null, ()=>{
    writeCode.call(this, code1, code2, domCode, 'css', domStyle, ()=>{
      domPaper.innerHTML = marked(document.querySelector('#paper').innerText)
      writeCode.call(this, code1+code2, code3, domCode, 'css', domStyle)
    })
  })
})


function writeCode(prefix, code, domCode, languageType, pageStyle, fn){ 
  //参数分别是你将要写入到页面的代码、承载代码的页面元素、代码的语言类型（便于颜色的渲染）、是否写入css、回调函数
  let i = 0
  let id
  id = setTimeout(function run(){
    i++
    domCode.innerHTML = Prism.highlight(prefix + code.slice(0, i), Prism.languages[languageType], languageType);
    if(pageStyle){
      pageStyle.innerHTML = prefix + code.slice(0, i)
    }
    domCode.scrollTop = domCode.scrollHeight
    if(i>=code.length){
      fn && fn.call()
    }else{
      id = setTimeout(run, duration)
    }
  }, duration)
}
