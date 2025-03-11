import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([]);

  const [searchTerm, setSearchTerm]= useState("");

  useEffect(()=> {
    fetch("http://127.0.0.1:6001/plants")
    .then((response) => response.json())
    .then((data)=> setPlants(data))

  },[])

  const filteredPlants = plants.filter((plant) => 
    plant.name.toLowerCase ().includes(searchTerm.toLowerCase())
  );

  const handleNewPlant = (newPlant) => {
    const updatedPlants = [...plants,{ ...newPlant,id : plants.length +1}];
    setPlants(updatedPlants);
  }

  return (

    <main>
      <NewPlantForm onAddPlant={handleNewPlant}/>
      <Search onSearch={setSearchTerm}/>
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
