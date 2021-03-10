"use strict";

const {
  createStore
} = Redux;

function counterReducer(state, action) {
  state = state || {
    amount: 10000
  };

  switch (action.type) {
    case "pay":
      return {
        amount: state.amount - action.payload
      };

    default:
      return state;
  }
}

let store = createStore(counterReducer);
store.subscribe(() => {
  render();
});

class Dad1 extends React.Component {
  constructor(props) {
    super(props);
  }

  pay() {
    store.dispatch({
      type: "pay",
      payload: 10
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "dad"
    }, "Dad1 amount: ", this.props.amount, /*#__PURE__*/React.createElement("button", {
      onClick: this.pay.bind(this)
    }, "\u4ED8\u6B3E10"), /*#__PURE__*/React.createElement(Son1, {
      amount: this.props.amount
    }), /*#__PURE__*/React.createElement(Son2, {
      amount: this.props.amount
    }));
  }

}

class Dad2 extends React.Component {
  constructor(props) {
    super(props);
  }

  pay() {
    store.dispatch({
      type: "pay",
      payload: 50
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "dad"
    }, "Dad2 amount: ", this.props.amount, /*#__PURE__*/React.createElement("button", {
      onClick: this.pay.bind(this)
    }, "\u4ED8\u6B3E50"), /*#__PURE__*/React.createElement(Son3, {
      amount: this.props.amount
    }), /*#__PURE__*/React.createElement(Son4, {
      amount: this.props.amount
    }));
  }

}

class Son1 extends React.Component {
  constructor(props) {
    super(props);
  }

  pay() {
    store.dispatch({
      type: "pay",
      payload: 100
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "son"
    }, "amount: ", this.props.amount, /*#__PURE__*/React.createElement("button", {
      onClick: this.pay
    }, "\u4ED8\u6B3E100"));
  }

}

class Son2 extends React.Component {
  constructor(props) {
    super(props);
  }

  pay() {
    store.dispatch({
      type: "pay",
      payload: 200
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "son"
    }, "amount: ", this.props.amount, /*#__PURE__*/React.createElement("button", {
      onClick: this.pay
    }, "\u4ED8\u6B3E200"));
  }

}

class Son3 extends React.Component {
  constructor(props) {
    super(props);
  }

  pay() {
    store.dispatch({
      type: "pay",
      payload: 300
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "son"
    }, "amount: ", this.props.amount, /*#__PURE__*/React.createElement("button", {
      onClick: this.pay
    }, "\u4ED8\u6B3E300"));
  }

}

class Son4 extends React.Component {
  constructor(props) {
    super(props);
  }

  pay() {
    store.dispatch({
      type: "pay",
      payload: 400
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "son"
    }, "amount: ", this.props.amount, /*#__PURE__*/React.createElement("button", {
      onClick: this.pay
    }, "\u4ED8\u6B3E400"));
  }

}

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dad1, {
      amount: store.getState().amount
    }), /*#__PURE__*/React.createElement(Dad2, {
      amount: store.getState().amount
    }));
  }

}

function render() {
  ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));
}

render();
