import React, { Component } from "react";

export default class New extends Component {
  render() {
    return (
      <div>
        <h1>Create New Pokemon</h1>
        <form action="/pokemon/create" method="POST">
          <label for="name">Name:</label>
          <br />
          <input type="text" id="name" name="name" />
          <br />
          <label for="img">ImgUrl</label>
          <br />
          <input type="text" id="img" name="img" />
          <br />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}
