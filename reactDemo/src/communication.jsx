function Scoreboard() {
    return (
        <div className="scoreboard">
            <div className="score-part">
                <div className="red">一号选手小红</div>
                <div>score1</div>
            </div>
            <div className="score-part">
                <div className="blue">二号选手小蓝</div>
                <div>score2</div>
            </div>
        </div>
    )
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
                console.log("小红跑完啦")
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
                console.log("我跑完啦")
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

function App() {
    return (
        <div>
            <Scoreboard />
            <div>
                <PlayerRed />
                <PlayerBlue />  
            </div>
        </div>
    )
}

const element = <App />
ReactDOM.render(element, document.getElementById('root'));
