import {connect} from "react-redux";
import React from "react";
import Btns from "./Btns";
import Times from "./Times";


class App extends React.Component {
    render () {
        return (
            <div>
                <Times />
                <Btns />
            </div>
        )
    }
}
export default connect()(App)