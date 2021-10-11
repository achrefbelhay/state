import React, { Component } from "react";

export class Achref extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "achref",
      show: true,
    };
  }
  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };
  render() {
    if (this.state.show)
      return (
        <div>
          <h1>Bonjour {this.state.fullName}</h1>
          <button onClick={this.handleShowPerson}>inzél Houni</button>
        </div>
      );
    else
      return (
        <div>
          <h1>Bhim</h1>
          <button onClick={this.handleShowPerson}>inzél Houni</button>
        </div>
      );
  }
}

export default Achref;
