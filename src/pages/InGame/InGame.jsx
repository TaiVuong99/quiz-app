import React, { useState, useContext } from "react";
import { DataContext } from "../../components/DataProvider/DataProvider";
import Timer from "../../components/Timer/Timer";
import Question from "../../components/Question/Question";
import ListAnswer from "../../components/ListAnswer/ListAnswer";
import EndGame from "../EndGame/EndGame";

import styles from "./InGame.module.css";


function InGame() {
  const db = useContext(DataContext);
  const [listQuestion, listAnswer, setListAnswer] = db;

  const [changePage, setChangePage] = useState(false);
  const [current, setCurrent] = useState(0);

  const isFirst = () => (current === 0 ? true : false);
  const isLast = () => (current === listQuestion.length - 1 ? true : false);

  const handlePrevClick = () => {
    setCurrent(current - 1);
  };

  const handleNextClick = () => {
    const newList = [...listAnswer];
    if (!listAnswer[current]) {
      newList[current] = null;
      setListAnswer(newList);
    }
    setCurrent(current + 1);
  };

  const handleSubmitClick = () => {
    const newList = [...listAnswer];

    if (!listAnswer[current]) {
      newList[current] = null;
      setListAnswer(newList);
    }

    const confirmBox = window.confirm("Do you want to submit answer ?");
    if (confirmBox) return setChangePage(true);
    else return;
  };

  const handleTimeOut = (notice) => {
    return notice && setChangePage(true);
  };

  const handleAnswerClick = (answer) => {
    const newList = [...listAnswer];
    newList[current] = answer;
    setListAnswer(newList);
    console.log(listAnswer);
  };

  return (
    <>
      {!changePage && (
        <div className={styles.containerDiv}>
          <div className={styles.listButtonDiv}>
            <button
              className={styles.btnPrev}
              disabled={isFirst()}
              onClick={handlePrevClick}
            >
              Previous
            </button>
            <button
              className={styles.btnNext}
              disabled={isLast()}
              onClick={handleNextClick}
            >
              Next
            </button>
            <button
              className={styles.btnSubmit}
              style={{ display: isLast() ? "flex" : "none" }}
              onClick={handleSubmitClick}
            >
              Submit
            </button>
          </div>
          <div className={styles.questionDiv}>
            <Timer isTimeOut={handleTimeOut} />
            <Question db={db} current={current} />
          </div>
          <div className={styles.answerDiv}>
            <ListAnswer
              db={db}
              current={current}
              onAnswerClick={handleAnswerClick}
            />
          </div>
        </div>
      )}
      {changePage && <EndGame />}
    </>
  );
}

export default InGame;
