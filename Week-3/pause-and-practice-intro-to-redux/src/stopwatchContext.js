// stopwatchContext.js
// Context for assignment.

import React from "react"
const {Provider, Consumer} = React.createContext()

class StopwatchContextProvider extends React.Component {
    state = {
    }

    render(){ 

        return(
            <Provider>
                {this.props.children}
            </Provider>
        )
    }
}

export {StopwatchContextProvider, Consumer as StopwatchContextConsumer}