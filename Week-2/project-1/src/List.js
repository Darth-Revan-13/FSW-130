//List.js
//List for app

import React from "react"

function List (props) {
    return(
        <span key={props.listItemList}>
            {
                props.listItemList
            }
        </span>
    )
}

export default List;