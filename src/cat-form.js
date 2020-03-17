import React from "react";

export default function CatForm() {
  return (
    <div>
      <h2>Add cat</h2>
      <form>
        <label htmlFor="name">Name</label> <input type="text" id="name"></input>
        <div>
          <label htmlFor="size">Size</label>
          <div id="size">
            <label htmlFor="chonk">Chonk</label>{" "}
            <input type="radio" id="chonk" value="chonk" ></input>
            <label htmlFor="smol">Smol</label>{" "}
            <input type="radio" id="smol" value="smol"></input>
          </div>
        </div>
        <div>
          <label htmlFor="mood">Mood</label>
          <div id="mood">
            <label htmlFor="grumpy">Grumpy</label>{" "}
            <input type="radio" id="grumpy" value="grumpy"></input>
            <label htmlFor="friendly">Friendly</label>{" "}
            <input type="radio" id="friendly" value="friendly"></input>
          </div>
        </div>
        <label htmlFor="image">Image url</label>{" "}
        <input type="text" id="image"></input>
        <br></br>
        <button>Submit cat</button>
      </form>
    </div>
  );
}
