import React from "react";

class ListItem extends React.Component {
  render() {
    return (
      <li>
        <input type="checkbox" />
        Title goes here
        <button>Edit</button>
        <button>Delete</button>
      </li>
    );
  }
}

export default ListItem;
