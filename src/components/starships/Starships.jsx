import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RingLoader } from "react-spinners";
import { getAllStarships } from "../../redux/actions";
import NavBar from "../navbar/NavBar";
import styles from './Starships.module.css'
import StarshipsCards from './StarshipsCards'

export default function Starships() {
  const allStarships = useSelector((state) => state.starships);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    dispatch(getAllStarships(page));
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
        {allStarships.length > 0 ? (
          <StarshipsCards currentStarships={allStarships} />
        ) : (
          <div className={styles.ring}>
            <RingLoader color="blue" size={200} />
          </div>
        )}
      </div>
    </div>
  );
}