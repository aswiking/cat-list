import React from "react";
import CatForm from "./cat-form";

export default function Cat(props) {
  if (!props.cat.isEditing) {
    return (
      <div>
        <h2>{props.cat.name}</h2>
        <div>
          <button onClick={event => props.editCat(event, props.cat.id)}>
            Edit cat
          </button>
          <button onClick={() => props.discardCat(props.cat.id)}>
            Discard cat
          </button>
        </div>
        <img src={props.cat.imageLocation} alt="cat" width="200px" />
        <p>This cat is {props.cat.size}</p>
      </div>
    );
  } else {
    return (
      <CatForm
        cat={props.cat}
        check={props.check}
        checked={props.cat}
        formType="editCat"
        discardCat={props.discardCat}
        submitCat={props.updateCat}
      />
    );
  }
}
