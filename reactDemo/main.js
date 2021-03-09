"use strict";

function Scoreboard() {
  return /*#__PURE__*/React.createElement("div", {
    className: "scoreboard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "score-part"
  }, /*#__PURE__*/React.createElement("div", {
    className: "red"
  }, "\u4E00\u53F7\u9009\u624B\u5C0F\u7EA2"), /*#__PURE__*/React.createElement("div", null, "score1")), /*#__PURE__*/React.createElement("div", {
    className: "score-part"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blue"
  }, "\u4E8C\u53F7\u9009\u624B\u5C0F\u84DD"), /*#__PURE__*/React.createElement("div", null, "score2")));
}

function PlayerRed() {
  return /*#__PURE__*/React.createElement("div", {
    className: "track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "player red"
  }, "1"));
}

function PlayerBlue() {
  return /*#__PURE__*/React.createElement("div", {
    className: "track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "player blue"
  }, "2"));
}

function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Scoreboard, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PlayerRed, null), /*#__PURE__*/React.createElement(PlayerBlue, null)));
}

const element = /*#__PURE__*/React.createElement(App, null);
ReactDOM.render(element, document.getElementById('root'));
