//ListForm.js
//Form for Project List

import React from "react"
import {ThingItemContextConsumer} from "./thingContext"

class ListForm extends React.Component {
    render(){
    return(
        <div>
            <ThingItemContextConsumer>{({addToList, handleChange, listItemDesc, listItemImage, listItemName, listItemList}) => {
                return(
                    <form>
                <input
                    type="text"
                    value={listItemName}
                    name="listItemName"
                    placeholder="Title"
                    required
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={listItemImage}
                    name="listItemImage"
                    placeholder="Image Url"
                    alt="Image"
                    required
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={listItemDesc}
                    name="listItemDesc"
                    placeholder="Description"
                    required
                    onChange={handleChange}
                />
                <button onClick={addToList}>Submit</button>
            </form>)}}
            </ThingItemContextConsumer>
        </div>
    )
}
}

export default ListForm