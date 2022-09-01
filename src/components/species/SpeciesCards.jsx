import React from "react";
import SpeciesCard from './SpeciesCard'

export default function SpeciesCards({ currentSpecies }) {
  return (
    <div>
      {currentSpecies?.map((e) => {
        return (
          <SpeciesCard key={e.id} id={e.id} image={e.image} name={e.name} />
        );
      })}
    </div>
  );
}