import React from "react";

import ListItem from "../ListItem";

import css from "./ListContainer.module.css";

const ListContainer = props => {
  return (
    <ul className={css.listContainer}>
      {props.listItems.map((item, idx) => (
        <ListItem key={idx} title={item.title} status={item.completed} />
      ))}
    </ul>
  );
};

export default ListContainer;
