class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time0: new Date(),
            red: "0000",
            blue: "0000"
        }
    }
    redSuccess() {
        this.setState({
            red: new Date - this.state.time0
        })
    }
    blueSuccess() {
        this.setState({
            blue: new Date - this.state.time0
        })
    }
    render() {
        return (
            <div>
                <div className="scoreboard">
                    <div className="score-part">
                        <div className="red">一号选手小红用时</div>
                        <div>{this.state.red}</div>
                    </div>
                    <div className="score-part">
                        <div className="blue">二号选手小蓝用时</div>
                        <div>{this.state.blue}</div>
                    </div>
                </div>
                <div>
                    <PlayerRed success={this.redSuccess.bind(this)} />
                    <PlayerBlue success={this.blueSuccess.bind(this)} />  
                </div>
            </div>
        )   
    }
}

class PlayerRed extends React.Component {
    constructor(props) {
        super(props)
        let position = 0
        this.state = {
            style: {
                left: `${position}%`
            }
        }
        let timerID = setInterval(() => {
            position += 1
            this.setState({
                style: {
                    left: `${position}%`
                }
            })
            if (position >= 100) {
                clearInterval(timerID)
                props.success()
            }
        }, 5)
        
    }
    render() {
        return (
            <div className="track">
                <div className="player red" style={this.state.style}>1</div>
            </div>
        )
    }
}
class PlayerBlue extends React.Component {
    constructor(props) {
        super(props)
        let position = 0
        this.state = {
            style: {
                left: `${position}%`
            }
        }
        let timerID = setInterval(() => {
            position += 1
            this.setState({
                style: {
                    left: `${position}%`
                }
            })
            if (position >= 100) {
                clearInterval(timerID)
                props.success()
            }
        }, 60)
        
    }
    render() {
        return (
            <div className="track">
                <div className="player blue" style={this.state.style}>2</div>
            </div>
        )
    }
}


const element = <App />
ReactDOM.render(element, document.getElementById('root'));
