//index.js

import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

import App from "./App"
import {ListItemContextProvider} from "./listItems"

ReactDOM.render(
    <ListItemContextProvider>
        <App />
    </ListItemContextProvider>, 
    document.getElementById("root")
)
