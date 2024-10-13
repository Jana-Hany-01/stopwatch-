import React, { useRef } from "react";

const App = () => {
  let timeCounterRef = useRef(0);
  let intervalId = null;
  let startTime = 0;
  let isPaused = false;
  function start() {
    startTime = Date.now();
    
      intervalId = setInterval(() => {
        timeCounterRef.current= Date.now() - startTime;
      },0);
      
      console.log(" the elapsed time since starting ", timeCounterRef.current);
    
  }
  function stop() {
    clearInterval(intervalId);
    isPaused = true;
  }
  function showCuurentTime() {
    let date = Date.now();
    let formattedDate = new Date(date);
    console.log(
      `Time : ${formattedDate.toLocaleTimeString()} Date: ${formattedDate.toLocaleDateString()}`
    );
  }
  return (
    <div>
      <h1> Stop Watch App </h1>
      <button className="start"  onClick={start}>
        Start
      </button>
      <br />
      {timeCounterRef?.current}
      <button className="stop" onClick={stop}>
        Stop
      </button>

      <button className="showCurrentTime" onClick={showCuurentTime}>
        {" "}
        Show Current Time{" "}
      </button>
    </div>
  );
};

export default App;
