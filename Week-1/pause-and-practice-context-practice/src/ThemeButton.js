//ThemeButton.js
//Theme changing button

import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function ThemeButton(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Change Theme</button>
            )}
        </ThemeContextConsumer>
    )
}

export default ThemeButton