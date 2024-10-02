Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

//Basic user activity tracking
var INPUT_EVENT_NAMES = ["click", "mousemove", "keydown"];
var addTrackingEventListeners = function (onEventFunction) {
    INPUT_EVENT_NAMES.forEach(function (eventName) {
        return document.body.addEventListener(eventName, function (e) { return onEventFunction(e); }, false);
    });
    window.addEventListener("blur", function (e) {
        onEventFunction(e);
    }, false);
    window.addEventListener("focus", function (e) {
        onEventFunction(e);
    }, false);
};
var removeTrackingEventListeners = function (onEventFunction) {
    INPUT_EVENT_NAMES.forEach(function (eventName) {
        return document.body.removeEventListener(eventName, function () { return onEventFunction(); }, false);
    });
    window.removeEventListener("blur", function (e) {
        onEventFunction(e);
    }, false);
    window.removeEventListener("focus", function (e) {
        onEventFunction(e);
    }, false);
};

var STORAGE_ID = "trackerIdValue";
var setStorage = function (trackerId) {
    sessionStorage.setItem(STORAGE_ID, trackerId.toString());
};
var getStorage = function () {
    return sessionStorage.getItem(STORAGE_ID);
};

var useState = React__namespace.useState, useEffect = React__namespace.useEffect;
var App = function (_a) {
    var trackerId = _a.trackerId, onTrackerIdChange = _a.onTrackerIdChange, timeout = _a.timeout, trackerSubmitInterval = _a.trackerSubmitInterval, onIntervalSubmit = _a.onIntervalSubmit, debugOn = _a.debugOn;
    var _b = useState(0), timer = _b[0], setTimer = _b[1];
    var _c = useState(timeout || 30 * 60), countdown = _c[0], setCountdown = _c[1];
    var _d = useState(false), timedOut = _d[0], setTimedOut = _d[1];
    var onUserActivity = function (e) {
        if (e.type && e.type === 'blur') {
            setCountdown(0);
            return;
        } //window on blur
        setCountdown(timeout || 30 * 60);
    };
    useEffect(function () {
        addTrackingEventListeners(onUserActivity);
        return function () {
            removeTrackingEventListeners(onUserActivity);
        };
    }, []);
    useEffect(function () {
        if (countdown === 0) {
            setTimedOut(true);
        }
        else {
            setTimedOut(false);
        }
    }, [countdown]);
    useEffect(function () {
        //fire onTrackChange if timer > 0
        if (timer > 0)
            onTrackerIdChange(getStorage() ? getStorage() : trackerId, timer);
        //Reset timer
        setTimer(0);
        //start timer if not timed out
        var interval;
        if (!timedOut) {
            interval = setInterval(function () {
                setTimer(function (prevValue) { return prevValue + 1; });
                setCountdown(function (prevValue) { return prevValue - 1; });
            }, 1000);
        }
        //set new tracker to storage
        setStorage(trackerId);
        return function () {
            clearInterval(interval);
        };
    }, [trackerId, timedOut]);
    //submit change every x second
    useEffect(function () {
        if (timer >= trackerSubmitInterval && trackerSubmitInterval && onIntervalSubmit) {
            onIntervalSubmit(trackerId, timer);
            setTimer(0);
        }
    }, [timer]);
    return (React__namespace.createElement("div", { style: {
            position: "fixed",
            zIndex: 999,
            bottom: 20,
            right: 20,
            padding: 20,
            backgroundColor: "grey",
            display: debugOn ? "block" : "none",
        } },
        React__namespace.createElement("p", null,
            "tracker : ",
            trackerId),
        React__namespace.createElement("p", null,
            "countdown to timeout : ",
            countdown),
        React__namespace.createElement("p", null,
            "timer : ",
            timer)));
};

exports["default"] = App;
//# sourceMappingURL=index.js.map
