import React, { useState, useRef } from "react";

const App = () => {
  const [startTime, setStartTime] = useState(Date.now());
  const [ellapsedTime, setEllapsedTime] = useState("");
  let timePassed = 0;
  const intervalId = useRef(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isStarted, setIsStrated] = useState(false);

  function start() {
    if (!isPaused && !isStarted) {
      setIsStrated(true);
      setStartTime(Date.now());

      intervalId.current = setInterval(() => {
        console.log(" the time now ", Date.now());
        console.log(" the started time ", startTime);
        timePassed = (Date.now() - startTime) / 1000;
        console.log(" the time Passed", timePassed);
        setEllapsedTime(timePassed.toFixed(3));
      });
    }
  }
  function stop() {
    if (isStarted === true) {
      clearInterval(intervalId.current);
      setIsPaused(false);
      setIsStrated(false);
    }
  }
  return (
    <div>
      <button className="start" onClick={start}>
        Start
      </button>
      {ellapsedTime}
      <button className="stop" onClick={stop}>
        Stop
      </button>
    </div>
  );
};

export default App;
