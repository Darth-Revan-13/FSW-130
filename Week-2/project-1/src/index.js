//index.js

import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

import App from "./App"
import { ThingItemContextProvider } from "./thingContext"


ReactDOM.render(
    <ThingItemContextProvider>
        <App/>
    </ThingItemContextProvider>,
    document.getElementById("root")
)
