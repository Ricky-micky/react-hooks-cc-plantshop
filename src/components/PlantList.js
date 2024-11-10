import React, { useContext } from "react";
import PlantCard from "./PlantCard";
import { PlantContext } from "./App";

function PlantList({handleDelete}) {
  const { filteredPlants } = useContext(PlantContext);
  const plantListOfCards = filteredPlants.map((plant) => (
    <PlantCard
      key={plant.id}
      name={plant.name}
      price={plant.price}
      image={plant.image}
      id={plant.id}
      handleDelete={handleDelete}
    />
  ));
  return <ul className="cards">{plantListOfCards}</ul>;
}

export default PlantList;