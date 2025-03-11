import React from "react";

function PlantCard({plant}) {


  return (
    
      <ul>
        <li className="card" data-testid="plant-item">
          <img src={plant.image} alt={plant.name} />
          <h4>{plant.name}</h4>
          <p>Price: {plant.price}</p>
          
        </li>
      </ul>
    

  );
}

export default PlantCard;
