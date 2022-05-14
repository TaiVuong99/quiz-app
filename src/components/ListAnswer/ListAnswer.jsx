import React from "react";
import PropTypes from "prop-types";
import styles from "./ListAnswer.module.css";

ListAnswer.propTypes = {
  db: PropTypes.array,
  current: PropTypes.number,
  onAnswerClick: PropTypes.func,
  type: PropTypes.bool,
};

ListAnswer.defaultProps = {
  onAnswerClick: null,
  type: false,
};

function ListAnswer(props) {
  const { db, current, onAnswerClick, type } = props;
  const [listQuestion, listAnswer, setListAnswer] = db;

  const handleClick = (answer) => {
    if (onAnswerClick) onAnswerClick(answer);
  };

  const handleCheck = (answer) => {
    if (listAnswer[current] != null) {
      if (listAnswer[current].correct === true && answer.correct === true)
        return "#10B981";
      if (listAnswer[current].answer_content === answer.answer_content)
        return "#EF4444";
    }
    if (answer.correct === true) return "#10B981";
  };

  return (
    <>
      {!type && (
        <>
          {listQuestion[current].answers.map((answer, index) => (
            <div className={styles.divColumn} key={index}>
              <div
                className={styles.divContent}
                style={{
                  backgroundColor:
                    listAnswer[current] == null ||
                    listAnswer[current] == undefined
                      ? ""
                      : listAnswer[current].answer_content ===
                        answer.answer_content
                      ? "#312E81"
                      : "",
                }}
                onClick={() => handleClick(answer)}
              >
                {index + 1}/ {answer.answer_content}
              </div>
            </div>
          ))}
        </>
      )}

      {type && (
        <>
          {listQuestion[current].answers.map((answer, index) => (
            <div className={styles.divColumn} key={index}>
              <div
                className={styles.divContentReview}
                style={{ backgroundColor: handleCheck(answer) }}
              >
                {index + 1}/ {answer.answer_content}
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default ListAnswer;
