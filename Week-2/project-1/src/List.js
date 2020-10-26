//List.js
//List for app

import React from "react"

function List (props) {
    return(
        <span key={props.thingList}>
            {
                props.thingList
            }
        </span>
    )
}

export default List;