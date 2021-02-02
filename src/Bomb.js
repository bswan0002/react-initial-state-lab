// your Bomb code here!
import React, { Component } from "react";

class Bomb extends Component {
  constructor({ initialCount }) {
    super();
    this.state = {
      secondsLeft: initialCount,
    };
  }

  state = {};
  render() {
    return (
      <div>
        {this.state.secondsLeft === 0
          ? "Boom!"
          : `${this.state.secondsLeft} seconds left before I go boom!`}
      </div>
    );
  }
}

export default Bomb;
