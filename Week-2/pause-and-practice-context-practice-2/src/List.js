//List.js
//List for app

import React from "react"

function List (props) {
    return(
        <span key={props.shipList}>
            {
                props.shipList
            }
        </span>
    );
}

export default List;