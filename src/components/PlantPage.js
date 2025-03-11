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


  return (

    <main>
      <NewPlantForm />
      <Search onSearch={setSearchTerm}/>
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
