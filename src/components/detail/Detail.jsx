import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllDetails, setDetail } from "../../redux/actions";
import { RingLoader } from "react-spinners";
import styles from "./Detail.module.css";

export default function Detail() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const characters = useSelector((state) => state.characterDetails);
  const gState = useSelector((state) => state);
  console.log(gState);

  //images from visualguide
  let imgUrlSplit = characters?.url?.split("/");
  var idFromUrl = imgUrlSplit && imgUrlSplit[imgUrlSplit.length - 2];
  var baseImgUrl = "https://starwars-visualguide.com/assets/img/characters/";
  const img = `${baseImgUrl}${idFromUrl}.jpg`;

  //starships
  const char = gState?.characters.find((e) => e.id === parseInt(id));
  const starships = char.starships ? char.starships : "n/a";
  const vehicles = char.vehicles ? char.vehicles : "n/a";
  const films = char.films;
  const homeworld = char.homeworld;

  useEffect(() => {
    dispatch(getAllDetails(id));
    return () => {
      dispatch(setDetail());
    };
  }, [dispatch, id]);

  return (
    <div>
      <div>
        {!!img && idFromUrl !== undefined ? (
          <img src={img} alt="No image" onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://starwars-visualguide.com/assets/img/placeholder.jpg";
          }} />
        ) : (
          "Loading Image..."
        )}
      </div>
      <div>
        {characters.gender ? (
          <div>
            <h1>Name: {characters.name}</h1>
            <p>Height: {characters.height}</p>
            <p>Mass: {characters.mass}</p>
            <p>
              Hair Color:{" "}
              {characters.hair_color.charAt(0).toUpperCase() +
                characters.hair_color.slice(1)}
            </p>
            <p>
              Skin Color:{" "}
              {characters.skin_color.charAt(0).toUpperCase() +
                characters.skin_color.slice(1)}{" "}
            </p>
            <p>
              Eye Color:{" "}
              {characters.eye_color.charAt(0).toUpperCase() +
                characters.eye_color.slice(1)}
            </p>
            <p>
              Gender:{" "}
              {characters.gender.charAt(0).toUpperCase() +
                characters.gender.slice(1)}
            </p>
            <p>Birth Year: {characters.birth_year}</p>
            <p>Homeworld: {homeworld}</p>
            <p>Starships: {starships.join(", ")}</p>
            <p>Vehicles: {vehicles.join(", ")}</p>
            <p>Films: {films.join(", ")}</p>
          </div>
        ) : (
          <div className={styles.ring}>
            <RingLoader color="blue" size={200} />
          </div>
        )}
      </div>
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  );
}
