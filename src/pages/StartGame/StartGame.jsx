import React, { useState } from "react";
import InGame from "../InGame/InGame";

import styles from "./StartGame.module.css";

function StartGame() {
  const [changePage, setChangePage] = useState(false);

  return (
    <>
      {!changePage && (
        <div className={styles.containerDiv}>
          <div className={styles.divColumn}>
            <h1 className={styles.h1}>Welcome to React Quiz Game!</h1>
          </div>
          <div className={styles.divColumn}>
            <button
              className={styles.button}
              onClick={() => setChangePage(true)}
            >
              Start
            </button>
          </div>
        </div>
      )}
      {changePage && <InGame />}
    </>
  );
}

export default StartGame;
