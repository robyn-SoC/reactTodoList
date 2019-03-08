import React from "react";

import Title from "../Title";
import Input from "../Input";
import SubTitle from "../SubTitle";
import ListContainer from "../ListContainer";

import css from "./Maincontainer.module.css";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { title: "This is a todo", completed: false },
        { title: "This is another todo", completed: false }
      ]
    };
  }

  //   addToDo = todo => {
  //     this.setState(state => ({
  //       todos: [...state.todos, { title: todo, completed: false }]
  //     }));
  //   };

  render() {
    return (
      <div id={css.mainContainer}>
        <Title />
        <Input />
        <SubTitle text="To Do" />
        <ListContainer todos={this.state.todos} />
        <SubTitle text="Done" />
        <ListContainer />
      </div>
    );
  }
}

export default MainContainer;
