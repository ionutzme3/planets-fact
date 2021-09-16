import React from "react";


export default function Lists(props) {
  let current = props.currentIndex === props.index;
  return (
    <li
    
      onClick={() => props.handleChange(props.index)}
      style={{ backgroundColor: current && "#00d782bf" }}
    >
      <span>{props.span}</span>
      {props.text}
    </li>
  );
}
