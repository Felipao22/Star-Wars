import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RingLoader } from "react-spinners";
import { getAllPlanetsDetails, setDetailPlanets } from "../../redux/actions";
import styles from "./DetailPlanets.module.css";

export default function DetailPlanets() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const planets = useSelector((state) => state.planetsDetails);
  const gState = useSelector((state) => state);

  //images from visualguide
  let imgUrlSplit = planets?.url?.split("/");
  var idFromUrl = imgUrlSplit && imgUrlSplit[imgUrlSplit.length - 2];
  var baseImgUrl = "https://starwars-visualguide.com/assets/img/planets/";
  const img = `${baseImgUrl}${idFromUrl}.jpg`;

  //starships
  const char = gState?.planets.find((e) => e.id === parseInt(id));
  const residents = char.residents ? char.residents : "n/a";
  const films = char.films;

  useEffect(() => {
    dispatch(getAllPlanetsDetails(id));
    return () => {
      dispatch(setDetailPlanets());
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
        {planets.name ? (
          <div>
            <h1>Name: {planets.name}</h1>
            <p>Rotation Period: {planets.rotation_period} days</p>
            <p>Orbital Period: {planets.orbital_period} days</p>
            <p>Diameter: {planets.diameter}km</p>
            <p>Gravity: {planets.gravity}</p>
            <p>Surface Water: {planets.surface_water}%</p>
            <p>Population: {planets.population}</p>
            <p>Climate: {planets.climate}</p>
            <p>Terrain: {planets.terrain}</p>
            <p>Residents: {residents.join(', ') ? residents.join(', ') : 'n/a'}</p>
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
