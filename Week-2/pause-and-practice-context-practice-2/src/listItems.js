//listItems.js
//Item List

import React from "react"
const {Provider, Consumer} = React.createContext()

class ListItemContextProvider extends React.Component {
    state={
        shipNameItem: "",
        shipImageItem: "",
        shipList: []
    }

    handleChange=(event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    addToList=(event) => {
        event.preventDefault();
        this.setState({
            shipList: [...this.state.shipList, {shipNameItem: this.state.shipNameItem, shipImageItem: this.state.shipImageItem}]
        })
    }
    
    render(){
        const {shipNameItem, shipImageItem, shipList} = this.state
        return(
            <Provider value={{addToList: this.addToList, handleChange: this.handleChange, shipNameItem, shipImageItem, shipList}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ListItemContextProvider, Consumer as ListItemContextConsumer}