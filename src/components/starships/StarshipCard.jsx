import React from "react";
import { Link } from "react-router-dom";

export default function StarshipCard({ name, image, id }) {
  return (
    <Link to={`/starships/${id}`} style={{ textDecoratio: "none" }} key={id}>
      <img
        src={image}
        alt="No image"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://starwars-visualguide.com/assets/img/placeholder.jpg";
        }}
        key={id}
      />
      <h3>{name}</h3>
    </Link>
  );
}