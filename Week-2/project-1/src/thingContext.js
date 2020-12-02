//thingContext.js
//Context

import React from "react"
const {Provider, Consumer} = React.createContext()

class ThingItemContextProvider extends React.Component {
    state ={
        listItemNameItem: "",
        listItemImageItem: "",
        listItemDescItem: "",
        listItemList: []
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
            listItemList: [...this.state.listItemList, {listItemNameItem: this.state.listItemNameItem, listItemImageItem: this.state.listItemImageItem, listItemDescItem: this.state.listItemDescItem}]
        })
    }

    render(){
        const {listItemNameItem, listItemDescItem, listItemImageItem, listItemList} = this.state
        return(
            <Provider value={{addToList: this.addToList, handleChange: this.handleChange, listItemNameItem, listItemDescItem, listItemImageItem, listItemList}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThingItemContextProvider, Consumer as ThingItemContextConsumer}