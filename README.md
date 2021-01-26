# Simple Project
有些是为了方便理解一些概念，有些是单纯的觉得有趣。<br>
## css画图(/cssImage)
### 太极(/taiji.html)
## js事件的理解(/jsEvent)
### 点击显示浮层(/clickdisappear.html)
### 事件捕获与冒泡的可视化(/rainbow.html)
## nodejs(/nodejs)

### 使用nodejs做一个服务器
为了理解nodejs的使用而做的一个简易的服务器，运行命令`node server [端口号]`可以打开服务。
1. 获取各种请求路径
2. 

### 创建文件(/createFile)
两个文件实现的功能都是一样的，创建一个简单的网站目录和一些文件。为其指定名称，并在index.html、css/style.css和js/main.js中写入一些基本语句。并且在执行之前进行文件夹目录是否存在的判断。如果已经存在的话给出提示并且不继续执行，不存在的话创建文件。
其中demo.sh是用bash脚本写的，demo.js用nodejs语法。
## 轮播(/swiper)
### 普通的轮播(/simple.html)
### 无缝轮播(/noGap.html)
&emsp;&emsp;如果我们只需要做一个有缝的轮播，那可以直接移动包裹多个图片的images类，通过translateX来控制图片的切换。如果我们只需要让一个无缝轮播自动播放，那可以设置成状态机，把几个图片绝对定位分开控制它们。<br>
&emsp;&emsp;但是如果要实现无缝轮播，并且还可以通过按钮控制的话。那我们需要把最后一张图片复制一份到第一张图片的前边，把第一张图片复制一份到最后一张图片的后边，辅助它们完成这个轮播的动画过程。然后再将趁用户不注意把它们换成正常的位置。从而在视觉上完成这个轮播。<br>
&emsp;&emsp;这个demo是用这个方法做成的。但里边有一些小bug，不太想解决了，毕竟实际用的时候并不需要自己写。<br>
&emsp;&emsp;setInterval()函数在用户切换到其它的标签页的时候会偷懒，在用户继续切换回来的时候会把很多次的操作一起完成，所以看上去会很乱。可以在用户切换到其它页面的时候停掉轮播。<br>
&emsp;&emsp;最外层包裹所有东西的类宽度包括了所有的image（那些看不见的也包括在内），所以在鼠标悬浮进去停掉轮播的时候，悬浮的范围是上边一整块的宽度。<br>
### 苹果风格的轮播(/appleStyle.html)
## css小技巧(/cssTip)
### 修改主题颜色(/changeTheme.html)
## 动态画图(/css-picture-animation)
使用css画的一些图片，以及使用js展示图片的制作过程
### 龙猫(/totoro)
### 简历(/resume)
## 页面元素(/element)
### 目录按钮(/menuButton.html)
### 价格输入计算器(/priceCalculator.html)
不用输入小数点的价格输入计算器