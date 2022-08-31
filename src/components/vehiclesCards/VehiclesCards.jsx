import React from "react";
import VehicleCard from '../vehicleCard/VehicleCard'


export default function VehiclesCards({ currentVehicles }) {
  return (
    <div>
      {currentVehicles?.map((e) => {
        return (
          <VehicleCard key={e.id} id={e.id} image={e.image} name={e.name} />
        );
      })}
    </div>
  );
}