//ListForm.js
//Form for Project List

import React from "react"

class ListForm extends React.Component {
    state ={
        listItemName: "",
        listItemImage: "",
        listItemDesc: "",
        listItemNameItem: "",
        listItemImageItem: "",
        listItemDescItem: ""
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    addToList=(event) => {
        event.preventDefault();
        this.setState({
            listItemNameItem: this.state.listItemName,
            listItemImageItem: this.state.listItemImage,
            listItemDescItem: this.state.listItemDesc
        })
    }

    render(){
    return(
        <div>
            <form>
                <input
                    type="text"
                    value={this.state.listItemName}
                    name="listItemName"
                    placeholder="Title"
                    required
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    value={this.state.listItemImage}
                    name="listItemImage"
                    placeholder="Image Url"
                    alt="Image"
                    required
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    value={this.state.listItemDesc}
                    name="listItemDesc"
                    placeholder="Description"
                    required
                    onChange={this.handleChange}
                />
                <button onClick={this.addToList}>Submit</button>
            </form>
            <img src={`${this.state.listItemImage}`}/>
        </div>
    )
}
}

export default ListForm