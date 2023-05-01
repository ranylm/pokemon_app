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
        <a href="/pokemon/new">Add new Pokemon</a>
        <ul>
          {pokemon.map((e, idx) => {
            return (
              <li>
                <a href={`/pokemon/${e._id}`}>
                  {e.name.charAt(0).toUpperCase() + e.name.slice(1)}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
