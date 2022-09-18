import React, { useContext, useState } from "react";
import StartGame from "../StartGame/StartGame";
import Review from "../ReviewPage/Review";

import styles from "./EndGame.module.css";
import { DataContext } from "../../components/DataProvider/DataProvider";

function EndGame() {
  console.log('ahihi')
  const db = useContext(DataContext);
  const [listQuestion, listAnswer, setListAnswer] = db;
  let abc
  const [a, setA] = useState()

  //change to start game page
  const [startGame, setStartGame] = useState(false);
  // change to review page
  const [review, setReview] = useState(false);

  // let score = 0;

  // const checkAnswer = () => {
  //   listAnswer.forEach((answer) => {
  //     if (answer == null) return;
  //     if (answer.correct === true) score++;
  //   });
  //   return score;
  // };

  return (
    <>
      {!startGame && !review && (
        <div className={styles.containerDiv}>
          <div className={styles.divColumn}>
            <h1 className={styles.h1}>
              Your score is :
              <span className={styles.span}> {checkAnswer()}</span>
            </h1>
          </div>
          <div className={styles.divColumn}>
            <div className={styles.listButtonDiv}>
              <button
                className={styles.btnAgain}
                onClick={() => {
                  setListAnswer([]);
                  setStartGame(true);
                }}
              >
                Try again
              </button>
              <button
                className={styles.btnReview}
                onClick={() => {
                  setReview(true);
                }}
              >
                Review
              </button>
            </div>
          </div>
        </div>
      )}
      {startGame && <StartGame />}
      {review && <Review />}
    </>
  );
}

export default EndGame;
