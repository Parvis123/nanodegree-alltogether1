import React, { Component } from "react";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newusername: "",
      newfirstname: "",
      newlastname: "",
    };
  }

  handleUserNameChange = (event) => {
    this.setState({
      newusername: event.target.value,
    });
  };

  handleFirstNameChange = (event) => {
    this.setState({
      newfirstname: event.target.value,
    });
  };

  handleLastNameChange = (event) => {
    this.setState({
      newlastname: event.target.value,
    });
  };

  isSubmitDisabled = () => {
    const { newusername, newfirstname, newlastname } = this.state;
    return newusername !== "" && newfirstname !== "" && newlastname !== "";
  };

  render() {
    return (
      <form>
        <label for='user'>User Name: </label>
        <input
          type='text'
          name='user'
          placeholder='Enter a user name'
          onChange={this.handleUserNameChange}
        ></input>{" "}
        <br />
        <label for='firstn'>First Name: </label>
        <input
          type='text'
          name='firstn'
          placeholder='Enter a first name'
          onChange={this.handleFirstNameChange}
        ></input>{" "}
        <br />
        <label for='lastn'>Last Name: </label>
        <input
          type='text'
          name='lastn'
          placeholder='Enter a last name'
          onChange={this.handleLastNameChange}
        ></input>{" "}
        <br />
        <input
          type='submit'
          value='Submit'
          disabled={!this.isSubmitDisabled()}
        ></input>
      </form>
    );
  }
}

export default AddUser;
