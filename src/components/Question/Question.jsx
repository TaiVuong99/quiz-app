import React from "react";
import PropTypes from "prop-types";
import styles from "./Question.module.css";

Question.propTypes = {
  db: PropTypes.array,
  current: PropTypes.number,
};

function Question(props) {
  const { db, current } = props;
  const [listQuestion, listAnswer, setListAnswer] = db;

  return (
    <>
      <div className={styles.divNoQuestion}>
        <p className={styles.pNoQuestion}>
          Question
          <span style={{fontWeight: "800"}}> {listQuestion[current].id} </span>/ {listQuestion.length}
        </p>
      </div>
      <div className={styles.divContentQuestion}>
        <p className={styles.pContentQuestion}>{listQuestion[current].question_content}</p>
      </div>
    </>
  );
}

export default Question;
