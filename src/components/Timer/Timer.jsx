import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Timer.module.css"

Timer.propTypes = {
  initState: PropTypes.number,
  isTimeOut: PropTypes.func,
};

Timer.defaultProps = {
  initState: 90,
  isTimeOut: null,
}

function Timer(props) {
  const {initState, isTimeOut} = props

  const [timer, setTimer] = useState(initState);
  
  let minutes = `0${Math.floor(timer / 60)}`.slice(-2);
  let seconds = `0${timer % 60}`.slice(-2);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (timer === 0) {
        isTimeOut(true);
        return clearInterval(timerId)
      };
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  });

  return (
    <div className={styles.timer} style={{
      color: timer !== 0 ? "#312E81" : "red"
    }}>
      {timer !== 0 ? `${minutes}:${seconds}` : `End!`}
    </div>
  );
}

export default Timer;
