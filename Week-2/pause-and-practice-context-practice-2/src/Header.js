//Header.js
//Header of page

import React from "react";
import { ListItemContextConsumer } from "./listItems";
// import "./Eclipse.jpg";
// import "./Executor.jpg";
// import "./HarrowerDreadnought.jpg";
// import "./ImperialStarDestroyer.png";
// import "./Venator_clonewars (1).jpg";

class Header extends React.Component {
  render() {
    // const listItems = ["Ecplise-Class Super Dreadnought", "Executor-Class Star Dreadnought", "Imperial-Class Star Destryoyer", "Venator-Class Star Destroyer", "Harrower-Class Star Destroyer"];
    return (
      <ListItemContextConsumer>
        {({ listItem }) => (
          <div>
            <center>
              <h1>Star Wars Ship List Thing</h1>
              {/* <h2>{listItems}</h2> */}
            </center>
            {/* <img src="./Eclipse.jpg"/>
            <img src="./Executor.jpg"/>
            <img src="./ImperialStarDestroyer.png"/>
            <img src="./Venator_clonewars (1).jpg"/>
            <img src="./HarrowerDreadnought.jpg"/> */}
          </div>
        )}
      </ListItemContextConsumer>
    );
  }
}

export default Header;
