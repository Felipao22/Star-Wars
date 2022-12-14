import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters } from "../../redux/actions";
import { Cards } from "../cards/Cards";
import { RingLoader } from "react-spinners";
import NavBar from "../navbar/NavBar";
import styles from "./Home.module.css";

export default function Home() {
  const allCharacters = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllCharacters(page));
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
        <button onClick={() => setPage(5)}>5</button>
        <button onClick={() => setPage(6)}>6</button>
        <button onClick={() => setPage(7)}>7</button>
        <button onClick={() => setPage(8)}>8</button>
        <button onClick={() => setPage(9)}>9</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
      <div>
        {allCharacters.length > 0 ? (
          <Cards currentCharacters={allCharacters} />
        ) : (
          <div className={styles.ring}>
            <RingLoader color="blue" size={200} />
          </div>
        )}
      </div>
    </div>
  );
}
