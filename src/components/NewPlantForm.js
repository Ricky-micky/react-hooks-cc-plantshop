import React, { useState, useContext } from "react";
import { PlantContext } from "./App";

function NewPlantForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const { setPlantListing } = useContext(PlantContext);

  const handleNameChange = (e) => setName(e.target.value);
  const handleImageChange = (e) => setImage(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  function handleNewPlantSubmit(e) {
    e.preventDefault();
    const newPlant = {
      name: name,
      image: image,
      price: price,
    };

fetch("https://react-hooks-cc-plantshop-o5o0.onrender.com/plants", {
  method: "POST",
  headers: {
    "Content-Type": "Application/JSON",
  },
  body: JSON.stringify(newPlant),
})
  .then((resp) => resp.json())
  .then((newP) => {
    setPlantListing((prevPlantListing) => [...prevPlantListing, newP]);
    setName("");
    setImage("");
    setPrice("");
  });
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleNewPlantSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={handleImageChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={handlePriceChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

