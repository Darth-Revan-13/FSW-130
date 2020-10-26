//App.js

import React from "react"
import ListForm from "./ListForm"
import List from "./List"

class App extends React.Component {
    // constructor() {
    //     super()
    //     this.state ={
    //         listItemName: "",
    //         listItemImage: "",
    //         listItemDesc: "",
    //         listItemNameItem: "",
    //         listItemImageItem: "",
    //         listItemDescItem: ""
    //     }
    //     this.handleChange = this.handleChange.bind(this)
    // }

    // handleChange(event) {
    //     const {name, value} = event.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

    // addToList=(event) => {
    //     event.preventDefault();
    //     this.setState({
    //         listItemNameItem: this.setState.listItemName,
    //         listItemImageItem: this.setState.listItemImage,
    //         listItemDescItem: this.setState.listItemDesc
    //     })
    // }

    render() {
        return(
            <div>
                <ListForm/>
            </div>
        )
    }
}

export default App