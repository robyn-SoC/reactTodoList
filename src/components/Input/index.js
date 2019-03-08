import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleClick = () => {
    this.setState({
      value: ""
    });
  };

  render() {
    return (
      <div>
        <input type="text" />
        <button>+</button>
      </div>
    );
  }
}

export default Input;
