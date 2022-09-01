import React, { useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RingLoader } from "react-spinners";
import {
  getAllFilmsDetails, setDetailFilms
} from "../../redux/actions";
import styles from "./DetailFilms.module.css";

export default function DetailFilms() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const films = useSelector((state) => state.filmsDetails);
  const gState = useSelector((state) => state);

  //images from visualguide
  let imgUrlSplit = films?.url?.split("/");
  var idFromUrl = imgUrlSplit && imgUrlSplit[imgUrlSplit.length - 2];
  var baseImgUrl = "https://starwars-visualguide.com/assets/img/films/";
  const img = `${baseImgUrl}${idFromUrl}.jpg`;

  const film = gState?.films.find((e) => e.id === parseInt(id));
  const characters = film.characters ? film.characters : "n/a";
  const planets = film.planets ? film.planets : "n/a";
  const starships = film.starships ? film.starships : "n/a";
  const vehicles = film.vehicles ? film.vehicles : "n/a";
  const species = film.species ? film.species : "n/a";
// console.log(film)

  useEffect(() => {
    dispatch(getAllFilmsDetails(id));
    return () => {
      dispatch(setDetailFilms());
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
        {films.title ? (
          <div>
            <h4>Title: {films.title}</h4>
            <h4>Director: {films.director}</h4>
            <h4>Producer: {films.producer}</h4>
            <h4>Release date: {films.release_date}</h4>
            <h4>Opening crawl: {films.opening_crawl}</h4>
            <h4>Characters: {characters.join(", ") ? characters.join(", ") : "n/a"}</h4>
            <h4>Planets: {planets.join(', ')}</h4>
            <h4>Starships: {starships.join(', ')}</h4>
            <h4>vehicles: {vehicles.join(', ')}</h4>
            <h4>Species: {species.join(', ')}</h4>
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
