class Dad1 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="dad">
                Dad1 amount: {this.props.amount}
                <button onClick={this.props.pay}>付款100</button>
                <Son1 pay={this.props.pay.bind(this)} amount={this.props.amount} />
                <Son2 pay={this.props.pay.bind(this)} amount={this.props.amount} />
            </div>
        )
    }
}
class Dad2 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="dad">
                Dad2 amount: {this.props.amount}
                <button onClick={this.props.pay}>付款100</button>
                <Son3 pay={this.props.pay.bind(this)} amount={this.props.amount} />
                <Son4 pay={this.props.pay.bind(this)} amount={this.props.amount} />
            </div>
        )
    }
}
class Son1 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="son">amount: {this.props.amount}
                <button onClick={this.props.pay}>付款100</button>
            </div>
        )
    }
}

class Son2 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="son">amount: {this.props.amount}
                <button onClick={this.props.pay}>付款100</button>
            </div>
        )
    }
}

class Son3 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="son">amount: {this.props.amount}
                <button onClick={this.props.pay}>付款100</button>
            </div>
        )
    }
}

class Son4 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="son">amount: {this.props.amount}
                <button onClick={this.props.pay}>付款100</button>
            </div>
        )
    }
}

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            amount: 10000
        }
    }
    pay() {
        this.setState({
            amount: this.state.amount - 50
        })
    }
    render() {
        return (
            <div>
                <Dad1 pay={this.pay.bind(this)} amount={this.state.amount} />
                <Dad2 pay={this.pay.bind(this)} amount={this.state.amount} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))