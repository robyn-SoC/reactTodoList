import React from "react";
import css from "./Title.module.css";

class Title extends React.Component {
  render() {
    return <div id={css.mainTitle}>To Do List</div>;
  }
}

export default Title;
