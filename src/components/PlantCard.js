import React, { useState } from "react";

function PlantCard({ name, price, image, id, handleDelete }) {
  const [isStocked, setIsStocked] = useState(true);

  const handleClickStockOrNot = () => setIsStocked(!isStocked);


  return (
    <li className="card" data-testid="plant-item">
      <img src={image ? image : " https://react-hooks-cc-plantshop-o5o0.onrender.com/plants"} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button
        className={isStocked ? "primary" : ""}
        onClick={handleClickStockOrNot}
      >
        {isStocked ? "In Stock" : "Out of Stock"}
      </button>
      <button
        className= "delete-button"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </li>
  );
}

export default PlantCard;