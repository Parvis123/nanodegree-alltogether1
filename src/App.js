import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import ErrorMessage from "./components/ErrorMessage";
import Scores from "./components/Scores";

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
      scoreStatus: "Hide Scores",
      showScores: true,
    };
  }

  updateScores = (updatedScores) => {
    const { updateScoreStatus, updateShowScores } = updatedScores;

    this.setState({
      scoreStatus: updateScoreStatus,
      showScores: updateShowScores,
    });
  };

  newUserUpdate = (newUser) => {
    const { firstname, lastname, username, gamesplayed } = this.state;
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
        gamesplayed: [...gamesplayed, 0],
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
      showScores,
      scoreStatus,
    } = this.state;
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>ReactND - Coding Practice</h1>
        </header>
        <Scores
          scoreStatus={scoreStatus}
          showScores={showScores}
          updateScores={this.updateScores}
        />
        <UserList
          firstname={firstname}
          lastname={lastname}
          username={username}
          gamesplayed={gamesplayed}
          showScores={showScores}
        />
        <ErrorMessage errorStatus={errorStatus} />
        <AddUser update={this.newUserUpdate} />
      </div>
    );
  }
}

export default App;
