//Theme.js
//Theme for App

import React from "react"
import {ThemeContextConsumer} from "./themeContext"

class Theme extends React.Component {
    render() {
    return (
        <ThemeContextConsumer>
            {context => (
                <div id="page" className={`${context.theme}-theme`}>
                    <h2>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
                </div>
            )}
        </ThemeContextConsumer>
    )}
}

export default Theme