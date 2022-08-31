import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RingLoader } from "react-spinners";
import { getAllVehiclesDetails, setDetailVehicles } from "../../redux/actions";
import styles from './DetailVehicles.module.css'

export default function DetailVehicles() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const vehicles = useSelector((state) => state.vehiclesDetails);
  const gState = useSelector((state) => state);

  //images from visualguide
  let imgUrlSplit = vehicles?.url?.split("/");
  var idFromUrl = imgUrlSplit && imgUrlSplit[imgUrlSplit.length - 2];
  var baseImgUrl = "https://starwars-visualguide.com/assets/img/vehicles/";
  const img = `${baseImgUrl}${idFromUrl}.jpg`;

  //starships
  const char = gState?.vehicles.find((e) => e.id === parseInt(id));
  const pilots = char.pilots ? char.pilots : "n/a";
  const films = char.films;

  useEffect(() => {
    dispatch(getAllVehiclesDetails(id));
    return () => {
      dispatch(setDetailVehicles());
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
        {vehicles.name ? (
          <div>
            <h1>Name: {vehicles.name}</h1>
            <p>Model: {vehicles.model}</p>
            <p>Manufacturer: {vehicles.manufacturer}</p>
            <p>Cost in credits: {vehicles.cost_in_credits}</p>
            <p>Length: {vehicles.length}</p>
            <p>Max atmosphering speed: {vehicles.max_atmosphering_speed}</p>
            <p>Crew: {vehicles.crew}</p>
            <p>Passengers: {vehicles.passengers}</p>
            <p>Consumables: {vehicles.consumables}</p>
            <p>Vehicle class: {vehicles.vehicle_class}</p>
            <p>Cargo capacity: {vehicles.cargo_capacity}</p>
            <p>Pilots: {pilots.join(', ')? pilots.join(', ') : 'n/a'}</p>
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