import React, { Component } from "react";

class UserList extends Component {
  render() {
    const {
      firstname,
      username,
      lastname,
      gamesplayed,
      showScores,
    } = this.props;
    return (
      <div>
        {" "}
        <h1>User List</h1>
        <ul>
          {username.map((user, i) => {
            return (
              <li key={user}>
                <p>
                  {username[i]} - ({firstname[i] + " " + lastname[i]})
                  {showScores
                    ? " has played " + gamesplayed[i] + " game(s)"
                    : ""}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default UserList;
