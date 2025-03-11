import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] =useState([]);

  useEffect(()=> {
    fetch("http://127.0.0.1:6001/plants")
    .then((response) => response.json())
    .then((data)=> setPlants(data))

  },[])

  return (

    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
