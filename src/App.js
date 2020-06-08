import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: ["Mac", "Dennis", "Charlie", "Dee", "Frank"],
      lastname: ["Macdonald", "Reynolds", "Kelly", "Reynolds", "Reynolds"],
      username: [
        "BodyguardForJesus",
        "The_Golden_God",
        "KHAt",
        "Bird",
        "The Garbage Man",
      ],
      gamesplayed: [0, 0, 0, 0, 0],
    };
  }

  render() {
    const { firstname, lastname, username, gamesplayed } = this.state;
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>ReactND - Coding Practice</h1>
        </header>
        <UserList
          firstname={firstname}
          lastname={lastname}
          username={username}
          gamesplayed={gamesplayed}
        />
        <AddUser />
      </div>
    );
  }
}

export default App;
