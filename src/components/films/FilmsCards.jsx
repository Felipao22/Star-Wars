import React from "react";
import FilmCard from './FilmCard'

export default function FilmssCards({ currentFilms }) {
  return (
    <div>
      {currentFilms?.map((e) => {
        return (
          <FilmCard key={e.id} id={e.id} image={e.image} title={e.title} />
        );
      })}
    </div>
  );
}