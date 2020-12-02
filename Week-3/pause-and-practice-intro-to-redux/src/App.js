//App.js

import React from "react"
import Stopwatch from "./Stopwatch"
import { connect } from "react-redux"

class App extends React.Component{
    render(){
        return(
            <div>
                <Stopwatch/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{}
}

export default connect(mapStateToProps)(App)