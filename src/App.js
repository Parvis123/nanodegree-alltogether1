import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import ErrorMessage from "./components/ErrorMessage";

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
      errorStatus: "noError",
    };
  }

  newUserUpdate = (newUser) => {
    const { firstname, lastname, username } = this.state;
    const { newfirstname, newlastname, newusername } = newUser;

    this.setState({
      errorStatus: "noError",
    });

    if (username.includes(newusername)) {
      this.setState({
        errorStatus: "errorPresent",
      });
    } else {
      this.setState({
        firstname: [...firstname, newfirstname],
        lastname: [...lastname, newlastname],
        username: [...username, newusername],
      });
    }
  };

  render() {
    const {
      firstname,
      lastname,
      username,
      gamesplayed,
      errorStatus,
    } = this.state;
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
        <ErrorMessage errorStatus={errorStatus} />
        <AddUser update={this.newUserUpdate} />
      </div>
    );
  }
}

export default App;
