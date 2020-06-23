import React from "react";
import If from "./If";

export default (props) => (
  <If teste={!props.hide || false}>
    <button className={`btn btn-${props.style}`} onClick={props.onClick}>
      <i className={`fa fa-${props.icon}`}></i>
    </button>
  </If>
);
// <If teste={!props.hide}>

// </If>
