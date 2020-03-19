import React from "react";

export default function CatForm(props) {
  return (
    <div>
      <h2>{props.formType === "addCat" ? "Add cat" : props.cat.name}</h2>
      {props.formType === "editCat" && (
      
          <button onClick={() => props.discardCat(props.cat.id)} >Discard cat</button>
       
      )}
      <form
        onSubmit={() => {
          props.submitCat();
          props.resetForm();
        }}
      >
        <label htmlFor="name">Name</label> <input type="text" id="name"></input>
        <div>
          <label htmlFor="size">Size</label>
          <div id="size">
            <label htmlFor="chonk">Chonk</label>{" "}
            <input
              type="radio"
              id="chonk"
              value="chonk"
              name="size"
              checked={props.checked.size === "Chonk"}
              onChange={props.check}
            ></input>
            <label htmlFor="smol">Smol</label>{" "}
            <input
              type="radio"
              id="smol"
              value="smol"
              name="size"
              checked={props.checked.size === "smol"}
              onChange={props.check}
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
              checked={props.checked.mood === "grumpy"}
              onChange={props.check}
            ></input>
            <label htmlFor="friendly">Friendly</label>{" "}
            <input
              type="radio"
              id="friendly"
              value="friendly"
              name="mood"
              checked={props.checked.mood === "friendly"}
              onChange={props.check}
            ></input>
            <label htmlFor="lazy">Lazy</label>{" "}
            <input
              type="radio"
              id="lazy"
              value="grumpy"
              name="mood"
              checked={props.checked.mood === "Lazy"}
              onChange={props.check}
            ></input>
          </div>
        </div>
        <label htmlFor="image">Image url</label>{" "}
        <input
          type="text"
          id="image"
          defaultValue={props.checked.imageLocation}
        ></input>
        <br></br>
        <button>Submit cat</button>
      </form>
    </div>
  );
}

/*    return (
      <div>
        <h2>{props.cat.name}</h2>
        <div>
          <button onClick={() => props.discardCat(props.cat.id)}>Discard cat</button>
        </div>
        <form onSubmit={event => props.updateCat(event, props.cat.id)}>
          <div>
            <label htmlFor="size">Size</label>
            <div id="size">
              <label htmlFor="chonk">Chonk</label>{" "}
              <input
                type="radio"
                id="chonk"
                value="chonk"
                name="size"
                checked={props.cat.size === "Chonk"}
                onChange={props.check}
              ></input>
              <label htmlFor="smol">Smol</label>{" "}
              <input
                type="radio"
                id="smol"
                value="smol"
                name="size"
                checked={props.cat.size === "Smol"}
                onChange={props.check}
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
                checked={props.cat.mood === "Grumpy"}
                onChange={props.check}
              ></input>
              <label htmlFor="friendly">Friendly</label>{" "}
              <input
                type="radio"
                id="friendly"
                value="friendly"
                name="mood"
                checked={props.cat.mood === "Friendly"}
                onChange={props.check}
              ></input>
              <label htmlFor="grumpy">Lazy</label>{" "}
              <input
                type="radio"
                id="lazy"
                value="lazy"
                name="mood"
                checked={props.cat.mood === "Lazy"}
                onChange={props.check}
              ></input>
            </div>
          </div>
          <label htmlFor="image">Image url</label>{" "}
          <input
            type="text"
            id="image"
            defaultValue={props.cat.imageLocation}
          ></input>
          <br></br>
          <button>Submit cat</button>
        </form>
      </div>
    ); */
