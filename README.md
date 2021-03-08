# Simple Project
有些是为了方便理解一些概念，有些是单纯的觉得有趣。<br>
## css画图(/cssImage)
### 太极(/taiji.html)
[点此预览](https://wenchuyang.github.io/simple-projects/cssImage/taiji.html)
## js事件的理解(/jsEvent)

### 点击显示浮层(/clickdisappear.html)
[点此预览](https://wenchuyang.github.io/simple-projects/jsEvent/clickdisappear.html)
### 事件捕获与冒泡的可视化(/rainbow.html)
[点此预览](https://wenchuyang.github.io/simple-projects/jsEvent/rainbow.html)

## nodejs(/nodejs)

### 使用nodejs做一个服务器
为了理解nodejs的使用而做的一个简易的服务器，运行命令`node server [端口号]`可以打开服务。
1. 获取各种请求路径
2. 添加简单的服务器配置
  - 用户请求 / 时，返回 html 内容
  - 该 html 内容里面由一个 css link 和一个 script
  - css link 会请求 '/style.css'，返回 css 内容
  - script 会请求 '/main.js'，返回 js 内容
  - 请求 '/', '/style.css', '/main.js' 以外的路径，则一律返回 404 状态码
3. 向后端发送请求并改变前端页面结果
  - 创建 'money.db' 文件
  - 在 index.html 中发送 POST 请求，把金额传给后台
  - 在 server.js 文件中接收请求，读取传过来的数据，把新的金额传给前端并写入数据库 money.db 文件，如果失败则将 success 字段置为 false
  - 前端拿到后端传过来的结果，根据 success 值进行判断是更新页面数据还是给出提示告诉用户执行失败。


### 创建文件(/createFile)
两个文件实现的功能都是一样的，创建一个简单的网站目录和一些文件。为其指定名称，并在index.html、css/style.css和js/main.js中写入一些基本语句。并且在执行之前进行文件夹目录是否存在的判断。如果已经存在的话给出提示并且不继续执行，不存在的话创建文件。
其中demo.sh是用bash脚本写的，demo.js用nodejs语法。
## 轮播(/swiper)
### 普通的轮播(/simple.html)
[点此预览](https://wenchuyang.github.io/simple-projects/swiper/simple.html)
### 无缝轮播(/noGap.html)
[点此预览](https://wenchuyang.github.io/simple-projects/swiper/noGap.html)
&emsp;&emsp;如果我们只需要做一个有缝的轮播，那可以直接移动包裹多个图片的images类，通过translateX来控制图片的切换。如果我们只需要让一个无缝轮播自动播放，那可以设置成状态机，把几个图片绝对定位分开控制它们。<br>
&emsp;&emsp;但是如果要实现无缝轮播，并且还可以通过按钮控制的话。那我们需要把最后一张图片复制一份到第一张图片的前边，把第一张图片复制一份到最后一张图片的后边，辅助它们完成这个轮播的动画过程。然后再将趁用户不注意把它们换成正常的位置。从而在视觉上完成这个轮播。<br>
&emsp;&emsp;这个demo是用这个方法做成的。但里边有一些小bug，不太想解决了，毕竟实际用的时候并不需要自己写。<br>
&emsp;&emsp;setInterval()函数在用户切换到其它的标签页的时候会偷懒，在用户继续切换回来的时候会把很多次的操作一起完成，所以看上去会很乱。可以在用户切换到其它页面的时候停掉轮播。<br>
&emsp;&emsp;最外层包裹所有东西的类宽度包括了所有的image（那些看不见的也包括在内），所以在鼠标悬浮进去停掉轮播的时候，悬浮的范围是上边一整块的宽度。<br>
### 苹果风格的轮播(/appleStyle.html)
[点此预览](https://wenchuyang.github.io/simple-projects/swiper/appleStyle.html)
## css小技巧(/cssTip)
### 修改主题颜色(/changeTheme.html)
[点此预览](https://wenchuyang.github.io/simple-projects/cssTip/changeTheme.html)

## 动态画图(/css-picture-animation)
使用css画的一些图片，以及使用js展示图片的制作过程
### 龙猫(/totoro)
[点此预览](https://wenchuyang.github.io/simple-projects/css-picture-animation/totoro/)
### 简历(/resume)
[点此预览](https://wenchuyang.github.io/simple-projects/css-picture-animation/resume/)
## 页面元素(/element)
### 目录按钮(/menuButton.html)
[点此预览](https://wenchuyang.github.io/simple-projects/element/menuButton.html)
### 价格输入计算器(/priceCalculator.html)
不用输入小数点的价格输入计算器
[点此预览](https://wenchuyang.github.io/simple-projects/element/priceCalculator.html)

## Webpack 测试(webpackDemo)
使用 webpack 打包工具做的一个 demo 。
包括了 babel-loader 、 sass-loader 和 html-webpack-plugin 插件的使用，命令行执行 `npx webpack` 即可输出计算出的文件。

## axios 测试(axiosDemo)
使用 axios 做一个数据伪造，其中 server.js 文件用来做一个后台，只对根目录请求返回 index.html , 其他请求一律瞎写。
直接运行 `node server.js 8888`

## vue 使用测试(vueDemo)
使用 vue 改写之前写过的一些代码。

### axios
对于之前的 axiosDemo 的代码，先将其用 class 语法再次封装，拿到最终的 MVC 模式的代码，然后使用 vue 来进行改写。
首先将 class View 换成 Vue ， 在 new Vue() 的时候参考 vue 的官方文档里的语法说明。然后使用 vue 自带的 click 事件绑定 `v-on:click="addOne()"` 替换掉之前在 Controller 里的 bindEvents 事件。至此代码功能与之前完全一致。
此时 Controller 里边只剩下一个 init ， 使用 created 钩子可以代替它。至此 vue 完全替代了原先的 controller 和 view。

### clickDisappear
jsEvent/clickdisappear.html 中页面有一个按钮，点击会出现一行字，再次点击消失，用 jquery 写的，这里使用 vue 进行改写，功能不变。
[点此预览](https://wenchuyang.github.io/simple-projects/vueDemo/clickDisappear.html)

### swiper
基于 swiper/simple.html 的轮播，点击按钮切换到对应的图片，去除了自动进行切换的部分。
[点此预览](https://wenchuyang.github.io/simple-projects/vueDemo/swiper.html)

### tab
使用 vue 写一个 tab 页。
[点此预览](https://wenchuyang.github.io/simple-projects/vueDemo/tab.html)

## React Demo(reactDemo)
目录下使用 babel 搭建了一个开发环境，其中 index.html 页面是一个入口文件， main.js 是 babel 翻译出来的文件，src 里边是用作测试的源码。使用时需要运行 `npx babel src/xxx.jsx --watch --out-file main.js` 以进行实时编译。
### 函数组件(src/functionComponent.jsx)
一个函数组件，接收并展示 name 和 age。
