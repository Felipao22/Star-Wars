import React from "react";
import styles from "./Cards.module.css";
import Character from "../card/Character";

export const Cards = ({ currentCharacters }) => {
  return (
    <div className={styles.container}>
      <div className={styles.big}>
        {currentCharacters?.map((e) => {
          return (
            <Character key={e.id} id={e.id} photo={e.photo} name={e.name} />
          );
        })}
      </div>
    </div>
  );
};
