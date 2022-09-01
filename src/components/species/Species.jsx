import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RingLoader } from "react-spinners";
import { getAllSpecies } from "../../redux/actions";
import NavBar from "../navbar/NavBar";
import SpeciesCards from './SpeciesCards'
import styles from '../species/Species.module.css'

export default function Species() {
  const allSpecies = useSelector((state) => state.species);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllSpecies(page));
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
        {allSpecies.length > 0 ? (
          <SpeciesCards currentSpecies={allSpecies} />
        ) : (
          <div className={styles.ring}>
            <RingLoader color="blue" size={200} />
          </div>
        )}
      </div>
    </div>
  );
}