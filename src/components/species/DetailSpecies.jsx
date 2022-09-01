import React, { useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RingLoader } from "react-spinners";
import { getAllSpeciesDetails, setDetailSpecies } from "../../redux/actions";
import styles from "./DetailSpecies.module.css";

export default function DetailSpecies() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const species = useSelector((state) => state.speciesDetails);
  const gState = useSelector((state) => state);

  //images from visualguide
  let imgUrlSplit = species?.url?.split("/");
  var idFromUrl = imgUrlSplit && imgUrlSplit[imgUrlSplit.length - 2];
  var baseImgUrl = "https://starwars-visualguide.com/assets/img/species/";
  const img = `${baseImgUrl}${idFromUrl}.jpg`;

  //starships
  const specie = gState?.species.find((e) => e.id === parseInt(id));
  const people = specie.people ? specie.people : "n/a";
  const films = specie.films;
  // const homeworld = axios(species.homeworld);
  // const worldInfo = homeworld.data
  // console.log(homeworld)

  useEffect(() => {
    dispatch(getAllSpeciesDetails(id));
    return () => {
      dispatch(setDetailSpecies());
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
        {species.name ? (
          <div>
            <h4>average_height: {species.average_height}</h4>
        <h4>average_lifespan: {species.average_lifespan}</h4>
        <h4>classification: {species.classification}</h4>
        <h4>designation: {species.designation}</h4>
        <h4>eye_colors: {species.eye_colors}</h4>
        <h4>films: {films.join(', ')}</h4>
        <h4>hair_colors: {species.hair_colors}</h4>
        {/* <h4>homeworld: {species.homeworld}</h4> */}
        <h4>language: {species.language}</h4>
        <h4>name: {species.name}</h4>
        <h4>people: {people.join(', ')}</h4>
        <h4>skin_colors: {species.skin_colors}</h4>
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