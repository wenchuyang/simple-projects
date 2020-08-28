let code = `/* 画一只龙猫送给最最喜欢的你 */
/* 首先，让我们准备一张龙猫色的纸 */
.picture{
  background: radial-gradient(ellipse at center, #d2ceb1 0%,#6a6642 100%);
}
/* 开始画耳朵了 */
.ear{
  background-color: #72705f;
}
.ear.left{
  left: 50%;
  margin-left: -42px;
}
.ear.right{
  right: 50%;
  margin-right: -42px;
}
/* 然后是大头 */
.head{
  background-color: #72705f;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  top: 32px;
}
/* 眼睛 */
.eye{
  background-color: #fff;
  top: 32px;
  border-radius: 50%; 
}
.eye.left{
  left: 50%;
  margin-left: -40px;
}
.eye.right{
  right: 50%;
  margin-right: -40px;
}
.eyeball{
  background-color: #000;
  border-radius: 50%;
}
.eyeball.left{
  right: 2px;
}
.eyeball.right{
  left: 2px;
}
/* 开始画鼻子了 */
.uppernose{
  top: 32px;
  border-top: 2px solid #47463b;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 70px;
}
.nose{
  position: absolute;
  border: 8px solid;
  border-color: black transparent transparent;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
}
/* 龙猫必不可少的可爱的胡子 */
.mustache{
  background-color: #000;
  top: 46px;
}
.mustache::before, .mustache::after{
  content: '';
  display: block;
  width: 30px;
  height: 2px;
  position: absolute;
  background-color: #000;
}
.mustache::before{
  bottom: 10px;
}
.mustache::after{
  top: 10px;
}
.mustache.left{
  left: 50%;
  margin-left: -74px;
}
.mustache.right{
  right: 50%;
  margin-right: -74px;
}
.mustache.left::before, .mustache.right::after{
  transform: rotate(12deg)
}
.mustache.left::after, .mustache.right::before{
  transform: rotate(-12deg)
}
/* 接下来是龙猫胖胖的身躯 */
.body{
  border-radius: 50%;
  background-color: #72705f;
  left: 50%;
  transform: translateX(-50%);
  top: 80px;
}
/* 该画胳膊咯 */
.arm{
  background-color: #72705f;
  top: 82px;
}
.arm.left{
  left: 4px;
  transform: rotate(18deg);
  border-bottom-left-radius: 76px 126px;
  border-top-left-radius: 72px 158px;
}
.arm.right{
  right: 4px;
  transform: rotate(-18deg);
  border-bottom-right-radius: 76px 126px;
  border-top-right-radius: 72px 158px;
}
/* 这里是可爱的肚皮 */
.belly{
  background-color: rgb(225, 219, 157);
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  top: 32px;
}
/* 肚皮上边的斑点 */
.speckle{
  position: absolute;
  width: 0;
  height: 0;
  border: 14px solid transparent;
  border-bottom: 12px solid #72705f;
  left: 50%;
  transform: translateX(-50%);
  top: 6px;
}
.speckle::after{
  content: '';
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  border: 14px solid transparent;
  border-bottom: 5px solid rgb(225, 219, 157);
  left: -14px;
  top: -6px;
}
.speckle:nth-child(1){
  margin-left: -28px;
  margin-top: 4px;
}
.speckle:nth-child(3){
  margin-left: 28px;
  margin-top: 4px;
}
.speckle:nth-child(4){
  margin-left: -48px;
  margin-top: 26px;
}
.speckle:nth-child(5){
  margin-left: -18px;
  margin-top: 24px;
}
.speckle:nth-child(6){
  margin-left: 14px;
  margin-top: 24px;
}
.speckle:nth-child(7){
  margin-left: 46px;
  margin-top: 26px;
}
/* 最后是龙猫的脚啦 */
.foot{
  background-color: #72705f;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 20px;
}
/* 大功告成，送给你 */
`
let codeDOM = document.querySelector('.code')
let styleDOM = document.querySelector('.styleTag')
var duration = 50

$('.speed').on('click', 'button', function(e){
  let $speed = $(e.target)
  $speed.addClass('active')
        .siblings('.active').removeClass('active')
  switch($speed.attr('data-speed')){
    case 'slow':
      duration = 100
      break
    case 'normal':
      duration = 50
      break
    case 'fast':
      duration = 5
      break
  }
})
writeCode(code, codeDOM, styleDOM)

function writeCode(code, codeDOM, styleDOM){
  let n = 0
  let id
  id = setTimeout(function run(){
    n++
    codeDOM.innerHTML = code.slice(0, n)
    codeDOM.scrollTop = codeDOM.scrollHeight
    styleDOM.innerHTML = code.slice(0, n)
    if(n <= code.length){
      id = setTimeout(run, duration)
    }
  }, duration)
}