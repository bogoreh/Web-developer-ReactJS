import * as React from "react";
const { useState, useEffect } = React;
import {
  addTrackingEventListeners,
  removeTrackingEventListeners
} from "./events";
import { getStorage, setStorage } from "./storage";

export type IActivityTrackerProps = {
  trackerId: number;
  timeout: number;
  trackerSubmitInterval: number;
  onTrackerIdChange: Function;
  onIntervalSubmit: Function;
  debugOn: boolean;
};

const App: React.FC<IActivityTrackerProps> = ({
  trackerId,
  onTrackerIdChange,
  timeout,
  trackerSubmitInterval,
  onIntervalSubmit,
  debugOn,
}) => {
  const [timer, setTimer] = useState(0);
  const [countdown, setCountdown] = useState(timeout || 30 * 60);
  const [timedOut, setTimedOut] = useState(false);

  const onUserActivity = (e:Event) => {
    if ( e.type && e.type === 'blur') { setCountdown(0); return; } //window on blur
    setCountdown(timeout || 30 * 60);
  };

  useEffect(() => {
    addTrackingEventListeners(onUserActivity);
    return () => {
      removeTrackingEventListeners(onUserActivity);
    };
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      setTimedOut(true);
    } else {
      setTimedOut(false);
    }
  }, [countdown]);

  useEffect(() => {
    //fire onTrackChange if timer > 0
    if (timer > 0)
      onTrackerIdChange(getStorage() ? getStorage() : trackerId, timer);

    //Reset timer
    setTimer(0);

    //start timer if not timed out
    let interval: number;
    if (!timedOut) {
      interval = setInterval(() => {
        setTimer((prevValue) => prevValue + 1);
        setCountdown((prevValue) => prevValue - 1);
      }, 1000);
    }

    //set new tracker to storage
    setStorage(trackerId);

    return () => {
      clearInterval(interval);
    };
  }, [trackerId, timedOut]);

  //submit change every x second
  useEffect(() => {
    if( timer >= trackerSubmitInterval && trackerSubmitInterval && onIntervalSubmit ) {
      onIntervalSubmit(trackerId, timer);
      setTimer(0);
    }
  }, [timer])

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 999,
        bottom: 20,
        right: 20,
        padding: 20,
        backgroundColor: "grey",
        display: debugOn ? "block" : "none",
      }}
    >
      <p>tracker : {trackerId}</p>
      <p>countdown to timeout : {countdown}</p>
      <p>timer : {timer}</p>
    </div>
  );
};

export default App;
