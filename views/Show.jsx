import React, { Component } from "react";

export default class Show extends Component {
  render() {
    const pokemon = this.props.pokemon;
    return (
      <div>
        <h1>Gotta Catch 'Em All</h1>
        <h2>{pokemon.name}</h2>
        {pokemon.img === "" ? (
          <h3>Pokemon has never been captured on camera.</h3>
        ) : (
          <img src={`${pokemon.img}.jpg`}></img>
        )}
        <a href="/pokemon">Back</a>
      </div>
    );
  }
}
