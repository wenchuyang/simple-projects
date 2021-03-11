const {createStore} = Redux;

function counterReducer(state, action ) {
    state = state || {
        amount: 10000
    }
    switch (action.type) {
        case "pay":
            return {
                amount: state.amount - action.payload
            }
        default:
            return state
    }
}
let store = createStore(counterReducer)
store.subscribe(() => { render() })


class Dad1 extends React.Component {
    constructor(props) {
        super(props)
    }
    pay() {
        store.dispatch({ type: "pay", payload: 10 })
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
        store.dispatch({ type: "pay", payload: 50 })
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
        store.dispatch({ type: "pay", payload: 100 })
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
        store.dispatch({ type: "pay", payload: 200 })
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
        store.dispatch({ type: "pay", payload: 300 })
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
        store.dispatch({ type: "pay", payload: 400 })
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
                <Dad1 amount={store.getState().amount} />
                <Dad2 amount={store.getState().amount} />
            </div>
        )
    }
}

function render() {
    ReactDOM.render(<App />, document.getElementById("root"))
}
render()
