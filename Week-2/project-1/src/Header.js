//Header.js
//Header of page

import React from "react"
import {ThingItemContextConsumer} from "./thingContext"

class Header extends React.Component {
    render() {
        return(
            <ThingItemContextConsumer>
                <div>
                    <center>
                        <h1>
                            Ugly Things
                        </h1>
                    </center>
                </div>
            </ThingItemContextConsumer>
        )
    }
}

export default Header