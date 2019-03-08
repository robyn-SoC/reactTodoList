import React from "react";
import css from "./SubTitle.module.css";

const SubTitle = props => <div className={css.subTitle}>{props.text}</div>;

export default SubTitle;
