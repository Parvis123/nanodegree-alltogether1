import React, { Component } from "react";

class ErrorMessage extends Component {
  render() {
    return (
      <div>
        <h3 className={this.props.errorStatus}>
          {" "}
          Error, username already issued{" "}
        </h3>
      </div>
    );
  }
}

export default ErrorMessage;
