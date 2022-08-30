import React from "react";
import PlanetCard from "../planetCard/PlanetCard";

export default function PlanetCards({ currentPlanets }) {
  return (
    <div>
      {currentPlanets?.map((e) => {
        return (
          <PlanetCard key={e.id} id={e.id} image={e.image} name={e.name} />
        );
      })}
    </div>
  );
}
