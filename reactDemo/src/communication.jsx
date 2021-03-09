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
function PlayerRed() {
    return (
        <div className="track">
            <div className="player red">1</div>
        </div>
    )
}
function PlayerBlue() {
    return (
        <div className="track">
            <div className="player blue">2</div>
        </div>
    )
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
