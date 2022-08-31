import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RingLoader } from "react-spinners";
import { getAllVehicles } from "../../redux/actions";
import NavBar from "../navbar/NavBar";
import VehiclesCards from "../vehiclesCards/VehiclesCards";
import styles from './Vehicles.module.css'

export default function Vehicles() {
  const allVehicles = useSelector((state) => state.vehicles);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllVehicles(page));
  }, [dispatch, page]);

  return (
    <div>
      <NavBar />
      <div>
        <button onClick={() => setPage(page - 1)}>Prev</button>
        <button onClick={() => setPage(1)}>1</button>
        <button onClick={() => setPage(2)}>2</button>
        <button onClick={() => setPage(3)}>3</button>
        <button onClick={() => setPage(4)}>4</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
      <div>
        {allVehicles.length > 0 ? (
          <VehiclesCards currentVehicles={allVehicles} />
        ) : (
          <div className={styles.ring}>
            <RingLoader color="blue" size={200} />
          </div>
        )}
      </div>
    </div>
  );
}
