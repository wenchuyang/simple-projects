import React from 'react';
import {createStore} from "redux";
import * as ReactDOM from "react-dom";

function reducer(state, action) {
    state = state || {
        number: 0
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
let store = createStore(reducer)
store.subscribe(render)


function render() {
    ReactDOM.render(<App number={store.getState().number} />, document.getElementById("root"))
}

class App extends React.Component {
    render () {
        return (
            <div>
                <Times number={this.props.number} />
                <Btns />
            </div>
        )
    }
}

class Times extends React.Component {
    render() {
        return (
            <div>现在的数字是： <span>{this.props.number}</span></div>
        )
    }
}

class Btns extends React.Component {
    add(n) {
        store.dispatch({type: "add", payload: n})
    }
    minus() {
        store.dispatch({type: "minus", payload: 1})
    }
    addAfter1s() {
        setTimeout( () => {
            store.dispatch({ type: "add", payload: 1})
        }, 1000)
    }
    addIfOdd() {
        if(+store.getState().number % 2 === 1) {
            store.dispatch({ type: "add", payload: 1})
        }
    }
    render() {
        return (
            <div className = "btns">
                <button onClick={this.add.bind(this, 1)}>add one</button>
                <button onClick={this.minus.bind(this, 1)}>minus one</button>
                <button onClick={this.add.bind(this, 2)}>add two</button>
                <button onClick={this.addAfter1s.bind(this)}>add one after 1s</button>
                <button onClick={this.addIfOdd.bind(this)}>add one if it's odd</button>
            </div>
        )
    }
}
render()