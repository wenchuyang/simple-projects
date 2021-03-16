import React from "react";
import {connect} from "react-redux";

class Btns extends React.Component {
    addAfter1s() {
        setTimeout( () => {
            this.props.add(1)
        }, 1000)
    }
    addIfOdd() {
        if(+this.props.number % 2 === 1) {
            this.props.add(1)
        }
    }
    render() {
        return (
            <div className = "btns">
                <button onClick={()=>{this.props.add(1)}}>add one</button>
                <button onClick={this.props.minus}>minus one</button>
                <button onClick={()=>{this.props.add(2)}}>add two</button>
                <button onClick={this.addAfter1s.bind(this)}>add one after 1s</button>
                <button onClick={this.addIfOdd.bind(this)}>add one if it's odd</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        number: state.number
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        add: (n) => {
            dispatch({type: "add", payload: n})
        },
        minus: () => {
            dispatch({type: "minus", payload: 1})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Btns)