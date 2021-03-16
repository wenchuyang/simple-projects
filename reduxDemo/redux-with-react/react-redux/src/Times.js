import React from "react";
import {connect} from "react-redux";

class Times extends React.Component {
    render() {
        return (
            <div>现在的数字是： <span>{this.props.number}</span></div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        number: state.number
    }
}

export default connect(mapStateToProps)(Times)