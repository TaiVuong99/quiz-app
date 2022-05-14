import React, { useContext, useState } from "react";
import StartGame from "../StartGame/StartGame";

import styles from "../InGame/InGame.module.css";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ListAnswer from "../../components/ListAnswer/ListAnswer";
import Timer from "../../components/Timer/Timer";
import Question from "../../components/Question/Question";

function Review() {
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
    setCurrent(current + 1);
  };

  const handleRestartClick = () => {
    setListAnswer([]);
    setChangePage(true);
  };

  const handleTimeOut = () => {};

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
            <button className={styles.btnRestart} onClick={handleRestartClick}>
              Restart
            </button>
          </div>
          <div className={styles.questionDiv}>
            <Timer initState={0} isTimeOut={handleTimeOut} />
            <Question db={db} current={current} />
          </div>
          <div className={styles.answerDiv}>
            <ListAnswer db={db} current={current} type={true} />
          </div>
        </div>
      )}
      {changePage && <StartGame />}
    </>
  );
}

export default Review;
