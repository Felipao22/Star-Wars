import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RingLoader } from "react-spinners";
import { getAllPlanets } from "../../redux/actions";
import NavBar from "../navbar/NavBar";
import PlanetCards from "../planetsCards/PlanetCards";
import styles from './Planets.module.css'

export default function Planets() {
  const allPlanets = useSelector((state) => state.planets);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllPlanets(page));
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
        {allPlanets.length > 0 ? (
          <PlanetCards currentPlanets={allPlanets} />
        ) : (
          <div className={styles.ring}>
            <RingLoader color="blue" size={200} />
          </div>
        )}
      </div>
    </div>
  );
}
