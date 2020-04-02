import React, { useState, useEffect } from "react";
import cuid from "cuid";
import Cat from "./cat";
import CatForm from "./cat-form";

export default function CatList() {
  const [catData, setCat] = useState([]);

  useEffect(() => {
    async function fetchCats() {
      const res = await fetch("/api/cats");
      const cats = await res.json();
      setCat(cats);
    }
    fetchCats();
  }, []);

  async function submitCat(event) {
    event.preventDefault();
    const newCat = {
      id: cuid(),
      name: event.target.name.value,
      size: event.target.size.value,
      mood: event.target.mood.value,
      imageLocation: event.target.image.value
    };
    event.target.reset();

    const url = "/api/cats";

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCat)
    });
    const cat = await res.json();
    setCat([...catData, cat]);
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

  async function discardCat(id) {
    console.log(id);
    const url = `/api/cats/${id}`;
    const res = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    })
    setCat(
      catData.filter(cat => {
        return id !== cat.id;
      })
    );
  }

  async function updateCat(event, id, name) {
      console.log(event.target.size.value)
      event.preventDefault();
    const updatedCat = {
      id: id,
      name: name,
      size: event.target.size.value,
      mood: event.target.mood.value,
      imageLocation: event.target.image.value
    };

    const url = `/api/cats/${id}`;

    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updatedCat)
    });
    const cat = await res.json();
    console.log(cat);

    setCat(
      catData.map(cat => {
        if (cat.id === id) {
          return updatedCat;
        } else {
          return cat;
        }
      })
    );
  }



  const catList = catData.map(cat => {
    return (
      <Cat
        cat={cat}
        editCat={editCat}
        discardCat={discardCat}
        updateCat={updateCat}
      />
    );
  });

  return (
    <div>
      {catList}
      <CatForm
        submitCat={submitCat}
        formType="addCat"
      />
    </div>
  );
}
