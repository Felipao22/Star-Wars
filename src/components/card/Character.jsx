import React from 'react';
import { Link } from 'react-router-dom';

export default function Character({name, photo, id}) {
  return (
    <Link to={`/characters/${id}` } style={{textDecoratio:'none'}} key={id}>
      <img src={photo} alt="Img not" onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }}/>
      <h3>{name}</h3>
    </Link>

  )
}
