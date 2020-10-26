//ItemForm.js
//Form for list

import React from "react"
import {ListItemContextConsumer} from "./listItems"

function ItemForm(props) {
    return(
        <div>
            <ListItemContextConsumer>{({addToList, handleChange, shipNameItem, shipImageItem, shipList}) => {
                return(
            <form>
                <input
                    type="text"
                    value={shipNameItem}
                    name="shipNameItem"
                    placeholder="Ship Name"
                    required
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={shipImageItem}
                    name="shipImageItem"
                    placeholder="Ship Image"
                    required
                    onChange={handleChange}
                />
                <button onClick={addToList}>Submit</button>
            </form>)}}
            </ListItemContextConsumer>
        </div>
    )
}

export default ItemForm