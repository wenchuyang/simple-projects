var fnLists = {}
var eventHub = {
    trigger(eventName, data) { // 发布
        let fnList = fnLists[eventName]
        if(!fnList) { return }
        for(let i = 0; i<fnList.length; i++) {
            fnList[i](data)
        }
    },
    on(eventName, fn) {  // 订阅
        if(!fnLists[eventName]) {
            fnLists[eventName] = []
        }
        fnLists[eventName].push(fn)
    }
}

var money = {
    amount: 10000
}


class Dad1 extends React.Component {
    constructor(props) {
        super(props)
    }
    pay() {
        eventHub.trigger("pay", 10)
    }
    render() {
        return (
            <div className="dad">
                Dad1 amount: {this.props.amount}
                <button onClick={this.pay.bind(this)}>付款10</button>
                <Son1 amount={this.props.amount} />
                <Son2 amount={this.props.amount} />
            </div>
        )
    }
}
class Dad2 extends React.Component {
    constructor(props) {
        super(props)
    }
    pay() {
        eventHub.trigger("pay", 50)
    }
    render() {
        return (
            <div className="dad">
                Dad2 amount: {this.props.amount}
                <button onClick={this.pay.bind(this)}>付款50</button>
                <Son3 amount={this.props.amount} />
                <Son4 amount={this.props.amount} />
            </div>
        )
    }
}
class Son1 extends React.Component {
    constructor(props) {
        super(props)
    }
    pay() {
        eventHub.trigger("pay", 100)
    }
    render() {
        return (
            <div className="son">amount: {this.props.amount}
                <button onClick={this.pay}>付款100</button>
            </div>
        )
    }
}

class Son2 extends React.Component {
    constructor(props) {
        super(props)
    }
    pay() {
        eventHub.trigger("pay", 200)
    }
    render() {
        return (
            <div className="son">amount: {this.props.amount}
                <button onClick={this.pay}>付款200</button>
            </div>
        )
    }
}

class Son3 extends React.Component {
    constructor(props) {
        super(props)
    }
    pay() {
        eventHub.trigger("pay", 300)
    }
    render() {
        return (
            <div className="son">amount: {this.props.amount}
                <button onClick={this.pay}>付款300</button>
            </div>
        )
    }
}

class Son4 extends React.Component {
    constructor(props) {
        super(props)
    }
    pay() {
        eventHub.trigger("pay", 400)
    }
    render() {
        return (
            <div className="son">amount: {this.props.amount}
                <button onClick={this.pay}>付款400</button>
            </div>
        )
    }
}

class App extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <Dad1 amount={money.amount} />
                <Dad2 amount={money.amount} />
            </div>
        )
    }
}

function render() {
    ReactDOM.render(<App />, document.getElementById("root"))
}
render()

var x = {
    init() {
        eventHub.on("pay", function(data) {
            money.amount -= data
            render()
        })
    }
}
x.init()