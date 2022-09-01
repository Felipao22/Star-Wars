import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RingLoader } from "react-spinners";
import {
  getAllStarshipsDetails,
  setDetailStarships,
} from "../../redux/actions";
import styles from "./DetailStarships.module.css";

export default function DetailStarships() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const starships = useSelector((state) => state.starshipsDetails);
  const gState = useSelector((state) => state);

  //images from visualguide
  let imgUrlSplit = starships?.url?.split("/");
  var idFromUrl = imgUrlSplit && imgUrlSplit[imgUrlSplit.length - 2];
  var baseImgUrl = "https://starwars-visualguide.com/assets/img/starships/";
  const img = `${baseImgUrl}${idFromUrl}.jpg`;

  const starship = gState?.starships.find((e) => e.id === parseInt(id));
  const pilots = starship.pilots ? starship.pilots : "n/a";
  const films = starship.films;

  useEffect(() => {
    dispatch(getAllStarshipsDetails(id));
    return () => {
      dispatch(setDetailStarships());
    };
  }, [dispatch, id]);

  return (
    <div>
      <div>
        {!!img && idFromUrl !== undefined ? (
          <img
            src={img}
            alt="No image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }}
          />
        ) : (
          "Loading Image..."
        )}
      </div>
      <div>
        {starships.name ? (
          <div>
            <h4>Name: {starships.name}</h4>
            <h4>Cargo capacity: {starships.cargo_capacity}</h4>
            <h4>Consumables: {starships.consumables}</h4>
            <h4>Cost in credits: {starships.cost_in_credits}</h4>
            <h4>Crew: {starships.crew}</h4>
            <h4>Films: {films.join(", ")}</h4>
            <h4>Hair colors: {starships.hair_colors ? starships.hair_colors : 'n/a'}</h4>
            <h4>Pilots: {pilots.join(", ") ? pilots.join(", ") : "n/a"}</h4>
            <h4>Length: {starships.length}</h4>
            <h4>Manufacturer: {starships.manufacturer}</h4>
            <h4>Passengers: {starships.passengers}</h4>
            <h4>Model: {starships.model}</h4>
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
