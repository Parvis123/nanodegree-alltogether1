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

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  isSubmitDisabled = () => {
    const { newusername, newfirstname, newlastname } = this.state;
    return newusername !== "" && newfirstname !== "" && newlastname !== "";
  };

  render() {
    return (
      <form>
        <label htmlFor='newusername'>User Name: </label>
        <input
          type='text'
          name='newusername'
          placeholder='Enter a user name'
          onChange={this.handleInputChange}
        ></input>{" "}
        <br />
        <label htmlFor='newfirstname'>First Name: </label>
        <input
          type='text'
          name='newfirstname'
          placeholder='Enter a first name'
          onChange={this.handleInputChange}
        ></input>{" "}
        <br />
        <label htmlFor='newlastname'>Last Name: </label>
        <input
          type='text'
          name='newlastname'
          placeholder='Enter a last name'
          onChange={this.handleInputChange}
        ></input>{" "}
        <br />
        <input
          type='submit'
          value='Submit'
          disabled={!this.isSubmitDisabled()}
          onClick={(e) => {
            e.preventDefault();
            this.props.update(this.state);
          }}
        ></input>
      </form>
    );
  }
}

export default AddUser;
