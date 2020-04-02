import React from "react";



export default function CatForm(props) {


  return (
    <div>
      <h2>{props.formType === "addCat" ? "Add cat" : props.cat.name}</h2>
      {props.formType === "editCat" && (
        <button onClick={() => props.discardCat(props.cat.id)}>
          Discard cat
        </button>
      )}
      <form
        onSubmit={event => {
          props.submitCat(event, props.cat.id, props.cat.name);
        }}
      >
        {props.formType === "addCat" && (
          <div>
            <label htmlFor="name">Name</label>{" "}
            <input type="text" id="name"></input>
          </div>
        )}
        <div>
          <label htmlFor="size">Size</label>
          <div id="size">
            <label htmlFor="chonk">Chongk</label>{" "}
            <input
              type="radio"
              id="chonk"
              value="chonk"
              name="size"
              defaultChecked={props.cat.size === "chonk"}
            ></input>
            <label htmlFor="smol">Smol</label>{" "}
            <input
              type="radio"
              id="smol"
              value="smol"
              name="size"
              defaultChecked={props.cat.size === "smol"}
            ></input>
          </div>
        </div>
        <div>
          <label htmlFor="mood">Mood</label>
          <div id="mood">
            <label htmlFor="grumpy">Grumpy</label>{" "}
            <input
              type="radio"
              id="grumpy"
              value="grumpy"
              name="mood"
              defaultChecked={props.cat.mood === "grumpy"}
            ></input>
            <label htmlFor="friendly">Friendly</label>{" "}
            <input
              type="radio"
              id="friendly"
              value="friendly"
              name="mood"
              defaultChecked={props.cat.mood === "friendly"}
            ></input>
            <label htmlFor="lazy">Lazy</label>{" "}
            <input
              type="radio"
              id="lazy"
              value="lazy"
              name="mood"
              defaultChecked={props.cat.mood === "lazy"}
            ></input>
          </div>
        </div>
        <label htmlFor="image">Image url</label>{" "}
        <input type="text" id="image" defaultValue={props.cat.imageLocation}></input>
        <br></br>
        <button>Submit cat</button>
      </form>
    </div>
  );
}

CatForm.defaultProps = {
    cat: {
        id: "",
        name: "",
        size: "",
        mood: "",
        imageLocation: ""
    }
};