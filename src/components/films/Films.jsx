import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { RingLoader } from "react-spinners";
import { getAllFilms } from "../../redux/actions";
import NavBar from "../navbar/NavBar";
import styles from './Films.module.css'
import FilmsCards from './FilmsCards'

export default function Films() {
  const allFilms = useSelector((state) => state.films);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllFilms());
  }, [dispatch]);
  
  return (
    <div>
      <NavBar />
      <div>
        {allFilms.length > 0 ? (
          <FilmsCards currentFilms={allFilms} />
        ) : (
          <div className={styles.ring}>
            <RingLoader color="blue" size={200} />
          </div>
        )}
      </div>
    </div>
  );
}