"use strict";

function Welcome(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "name: ", props.name), /*#__PURE__*/React.createElement("div", null, "age: ", props.age));
}

const element = /*#__PURE__*/React.createElement(Welcome, {
  name: "Wency",
  age: "18"
});
ReactDOM.render(element, document.getElementById('app'));
