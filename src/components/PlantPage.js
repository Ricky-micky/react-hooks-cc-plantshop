import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import React from "react";

function PlantPage({handleDelete}) {
  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList  handleDelete={handleDelete}/>
    </main>
  );
}

export default PlantPage;