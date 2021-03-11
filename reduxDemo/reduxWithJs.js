/**
 * redux 基本思路：
 * 把所有的变量放在一个地方
 * 如果有元素需要修改这个变量，那么提交一个修改变量的申请
 * 管家会监听并处理这个申请，然后重新 render 页面
 * 
 * redux 具体
 * 把所有的变量和处理函数放在 store 里，变量用 state 存储，处理函数用 action 存储。
 * 外部需要获取变量的话用 store.getState() 拿到 state 的值。
 * action 接收一个参数对象 {type: "xxx", payload: 1} , 其中 type 用来区分不同的 action ， payload 是 action 的参数。
 * var store = Redux.createStore(reducer) 来生成 store 。 其中 reducer 是一个函数，接收旧的 state ， 返回新的 state ， 并且负责进行 state 的初始化和 action 的分类处理
 * store.dispatch({ type: "add", payload: 1 }) 触发一个类型为 "add" 的 action ， 并且传入参数 1 。在需要调用的时候调用。
 * store.subscribe(render) 监听 action ，一旦 action 被 dispatch 了，就执行 render 函数。 render 函数负责刷新页面。
 * 
*/
const {createStore} = Redux;


function counter(state, action) {
    if (!state) {
        return {
            number: 0
        }
    }
    switch (action.type) {
        case "add":
            return {
                number: state.number + action.payload
            }
        case "minus":
            return {
                number: state.number - action.payload
            }
        default:
            return state
    }
}
var store = Redux.createStore(counter)

function getEle(number) {
    return `
        <div>现在的数字是： <span>${number}</span></div>
        <div class="btns">
            <button onclick="add(1)">add one</button>
            <button onclick="minusOne()">minus one</button>
            <button onclick="add(2)">add two</button>
            <button onclick="addAfter1s()">add one after 1s</button>
            <button onclick="addIfOdd()">add one if it's odd</button>
        </div>
    `
}
function render() {
    document.getElementById("root").innerHTML = getEle(store.getState().number)
}
render()

store.subscribe(()=>{
    render()
})

function add(n) {
    store.dispatch({ type: "add", payload: n })
}
function minusOne() {
    store.dispatch({ type: "minus", payload: 1})
}
function addAfter1s() {
    setTimeout( () => {
        store.dispatch({ type: "add", payload: 1})
    }, 1000)
}
function addIfOdd() {
    if(+store.getState().number % 2 === 1) {
        store.dispatch({ type: "add", payload: 1})
    }
}