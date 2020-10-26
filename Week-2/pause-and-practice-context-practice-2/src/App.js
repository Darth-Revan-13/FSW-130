//App.js
//Main App

import React from "react"
import List from "./List"
import ItemForm from "./ItemForm"
import Header from "./Header"
import {ListItemContextConsumer} from "./listItems"
import "./styles.css"

class App extends React.Component {

    
    
    render() {
        return(

                <ListItemContextConsumer>{({addToList, handleChange, shipNameItem, shipImageItem, shipList}) => {
                return(
                <div>
                <Header/>
                <ItemForm addToList={addToList} handleChange={handleChange} shipNameItem shipImageItem shipList/>
                {shipList.map( shipItem => {
                    return(
                        <ul>
                            <li>
                                Ship Name: <List shipList={shipItem.shipNameItem}/>
                                <br/>
                                Ship Image: <img src={shipItem.shipImageItem}/>
                            </li>
                        </ul>
                        )
                })}
                </div>)}}
                </ListItemContextConsumer>
            
        )
    }
}

export default App