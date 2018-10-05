import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      "bread-middle": 1,
      cheese: 2,
      bacon: 2
    }
  };

  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <div> Controls </div>
      </React.Fragment>
    );
  }
}