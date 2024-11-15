import React, { useEffect, useState, createContext } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

export const PlantContext = createContext();

function App() {
  const [search, setSearch] = useState("");
  const [plantListing, setPlantListing] = useState([]);

  useEffect(() => {
    fetch("https://react-hooks-cc-plantshop-o5o0.onrender.com/plants")
      .then((resp) => resp.json())
      .then((plants) => setPlantListing(plants));
  }, []);

  function handleSearchChange(e) {
    const searchText = e.target.value.toLowerCase();
    setSearch(searchText);
  }

  function handleDelete(id) {
    console.log(id);
    fetch(`https://react-hooks-cc-plantshop-o5o0.onrender.com/plants/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((deletedItem) => toDelete(id));
  }
  function toDelete(id) {
    const withoutDeletedItem = plantListing.filter((plant) => plant.id !== id);
    setPlantListing(withoutDeletedItem);
  }
  const filteredPlants = plantListing.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <PlantContext.Provider
      value={{
        plantListing,
        setPlantListing,
        search,
        handleSearchChange,
        filteredPlants,
      }}
    >
      <div className="app">
        <Header />
        <PlantPage handleDelete={handleDelete} />
      </div>
    </PlantContext.Provider>
  );
}

export default App;