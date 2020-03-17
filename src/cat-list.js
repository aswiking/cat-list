import React, { useState } from "react";
import cuid from "cuid";
import Cat from "./cat";
import CatForm from './cat-form';
import FatCat from './fat-cat.jpg';
import Susu from './Susu.jpeg';
import Saga from './saga.jpg';


export default function CatList() {
  const [catData, setCat] = useState([
    { id: 1, name: "Jeff", size: "Chonk", mood: "Lazy", imageLocation: FatCat },
    { id: 2, name: "Susu", size: "Smol", mood: "Friend", imageLocation: Susu },
    { id: 3, name: "Saga", size: "Chonk", mood: "Grumpy", imageLocation: Saga }


  ]);

  const catList = catData.map(cat =>  <Cat cat = {cat} />)

  return (
    <div>
     {catList}
     <CatForm />
    </div>
  );
}
