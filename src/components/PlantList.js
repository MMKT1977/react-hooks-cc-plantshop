import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  return (
    <div className="cards">
      {/* render PlantCards components in here */}
      {plants.map((plant)=> (
        <PlantCard key={plant.id} plant={plant}/>
      )

      )}
      

      </div>
  );
}

export default PlantList;
