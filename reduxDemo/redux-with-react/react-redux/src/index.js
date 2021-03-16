import React from 'react';
import {createStore} from "redux";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./App";

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


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)


