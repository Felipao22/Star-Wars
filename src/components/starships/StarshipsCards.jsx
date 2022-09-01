import React from "react";
import StarshipCard from './StarshipCard'

export default function StarshipsCards({ currentStarships }) {
  return (
    <div>
      {currentStarships?.map((e) => {
        return (
          <StarshipCard key={e.id} id={e.id} image={e.image} name={e.name} />
        );
      })}
    </div>
  );
}