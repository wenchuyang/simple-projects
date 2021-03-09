class Son extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div> 我的余额为：{this.props.amount} </div>
                <button onClick={this.props.add}>充值 10 元</button>
            </div>
        )
    }
}

class Dad extends React.Component {
    constructor() {
        super()
        this.state = {
            amount: "0"
        }
    }
    addTen() {
        this.setState({
            amount: +this.state.amount + 10
        })
    }
    render() {
        return (
            <div>
                <div>父组件 amount: {this.state.amount}</div>
                <Son amount={this.state.amount} add={this.addTen.bind(this)} />
            </div>
        )
    }
}

ReactDOM.render(<Dad />, document.getElementById("root"))