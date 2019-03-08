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
      ],
      donetodo: [
        { title: "This is completed", completed: true },
        { title: "This is also completed", completed: true }
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
        <ListContainer listItems={this.state.todos} />
        <SubTitle text="Done" />
        <ListContainer listItems={this.state.donetodo} />
      </div>
    );
  }
}

export default MainContainer;
