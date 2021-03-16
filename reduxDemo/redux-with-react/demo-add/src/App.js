import './App.css';
import {connect} from "react-redux";
import React from "react";

class App extends React.Component{
  render() {
    return (
        <div>
          {this.props.number}
          <button onClick={this.props.add.bind(this)}>+1</button>
        </div>
    );
  }
}

const webStateToProps = (state) => {
  return {
    number: state.number
  }
}
const webDispatchToProps = (dispatch) => {
  return {
    add: () => {
      dispatch({type: "add"})
    }
  }
}

export default connect(webStateToProps, webDispatchToProps)(App);
