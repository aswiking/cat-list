import React, { useState } from "react";
import cuid from "cuid";
import Cat from "./cat";
import CatForm from "./cat-form";
import FatCat from "./fat-cat.jpg";
import Susu from "./Susu.jpeg";
import Saga from "./saga.jpg";

export default function CatList() {
  const [catData, setCat] = useState([
    { id: 1, name: "Jeff", size: "Chonk", mood: "Lazy", imageLocation: FatCat, isEditing: false },
    { id: 2, name: "Susu", size: "Smol", mood: "Friend", imageLocation: Susu },
    { id: 3, name: "Saga", size: "Chonk", mood: "Grumpy", imageLocation: Saga }
  ]);

  function submitCat(event) {
    event.preventDefault();
    setCat([
      ...catData,
      {
        id: cuid(),
        name: event.target.name.value,
        size: event.target.size.value,
        mood: event.target.mood.value,
        imageLocation: event.target.image.value,
        isEditing: false
      }
    ]);
    event.target.reset();
  }

  const [checked, setChecked] = useState({ size: undefined, mood: undefined });
  function check(event) {
    setChecked({ ...checked, [event.target.name]: event.target.value });
  }

  function editCat(event, id) {
    setCat(
      catData.map(cat => {
        if (cat.id === id) {
          return { ...cat, isEditing: true };
        } else {
          return cat;
        }
      })
    );
  }

  function discardCat(id) {
    console.log(id);
    setCat(
      catData.filter(cat => {
        return id !== cat.id;
      })
    );
  }

  function updateCat(event, id) {
    setCat(
      catData.map(cat => {
        if (cat.id === id) {
          return {
            id: cat.id,
            name: cat.name,
            size: event.target.size.value,
            mood: event.target.mood.value,
            imageLocation: event.target.image.value
          };
        } else {
          return cat;
        }
      })
    );
  }

  function resetForm() {
    setChecked({ size: undefined, mood: undefined });
  }

  const catList = catData.map(cat => (
    <Cat
      cat={cat}
      editCat={editCat}
      discardCat={discardCat}
      updateCat={updateCat}
      check={check}
      checked={checked}
    />
  ));

  return (
    <div>
      {catList}
      <CatForm
        submitCat={submitCat}
        check={check}
        checked={checked}
        resetForm={resetForm}
        formType='addCat'
      />
    </div>
  );
}
