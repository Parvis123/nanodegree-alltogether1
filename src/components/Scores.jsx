import React, { Component } from "react";

class Scores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateScoreStatus: "",
      updateShowScores: null,
    };
  }
  handleScores = () => {
    const { scoreStatus } = this.props;
    if (scoreStatus === "Hide Scores") {
      this.setState({
        updateScoreStatus: "Show Scores",
        updateShowScores: false,
      });
    } else {
      this.setState({
        updateScoreStatus: "Hide Scores",
        updateShowScores: true,
      });
    }
  };

  render() {
    const { scoreStatus } = this.props;

    return (
      <div>
        <input
          type='Submit'
          value={scoreStatus}
          onClick={(e) => {
            // e.preventDefault();
            this.handleScores();
            this.props.updateScores(this.state);
          }}
        ></input>
      </div>
    );
  }
}

export default Scores;
