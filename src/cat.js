import React from "react";

export default function Cat(props) {
  return (
    <div>
        <h2>{props.cat.name}</h2>
        <img src={props.cat.imageLocation} alt='cat' width='200px'/>
      <p>This cat is {props.cat.size}</p>
    </div>
  );
}
