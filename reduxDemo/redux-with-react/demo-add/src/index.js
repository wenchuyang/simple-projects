import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as redux from "redux";
import {Provider} from "react-redux";

function counter(state, action) {
    state = state || {
        number: 0
    }
    switch (action.type) {
        case "add":
            return {
                number: state.number + 1
            }
        default:
            return state
    }
}
let store = redux.createStore(counter)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
