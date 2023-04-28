import React, { Component } from "react";
const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

export default class Index extends Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div style={myStyle}>
        <h1>See All The Pokemon</h1>
        <ul>
          {pokemon.map((e) => {
            return <li>{e.name.charAt(0).toUpperCase() + e.name.slice(1)}</li>;
          })}
        </ul>
      </div>
    );
  }
}
