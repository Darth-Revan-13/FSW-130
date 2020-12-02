//App.js

import React from "react";
import ListForm from "./ListForm";
import List from "./List";
import { ThingItemContextConsumer } from "./thingContext";
import "./styles.css"

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
    return (
      <ThingItemContextConsumer>
        {({
          addToList,
          handleChange,
          listItemDesc,
          listItemImage,
          listItemName,
          listItemList,
          editItem,
          deleteItem
        }) => {
          return (
            <div>
              <Header />
              <ListForm
                addToList={addToList}
                handleChange={handleChange}
                listItemDesc
                listItemImage
                listItemList
                listItemName
              />
              {listItemList.map((thingItem) => {
                return (
                  <ul>
                    <li>
                      <center>
                        <List listItemList={thingItem.listItemName} />
                        <br />
                        <List listItemList={thingItem.listItemDesc} />
                        <br />
                        <img src={thingItem.listItemImage} />
                        <br/>
                        <button onClick={thingItem.editItem}>Edit</button>
                        <button onClick={thingItem.deleteItem}>Delete</button>
                      </center>
                    </li>
                  </ul>
                );
              })}
            </div>
          );
        }}
      </ThingItemContextConsumer>
    );
  }
}

export default App;